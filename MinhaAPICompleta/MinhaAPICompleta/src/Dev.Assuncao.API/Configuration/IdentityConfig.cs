using Microsoft.Extensions.Configuration;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.DependencyInjection;
using Dev.Assuncao.Data.Context;
using Microsoft.EntityFrameworkCore;
using Dev.Assuncao.API.Data;
using Microsoft.AspNetCore.Identity;
using Dev.Assuncao.API.Extensions;
using System;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace Dev.Assuncao.API.Configuration
{
    public static class IdentityConfig
    {
        public static  IServiceCollection IdentityConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>           
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"))
            );


            services.AddDefaultIdentity<IdentityUser>()
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddErrorDescriber<IdentityMensagensPortugues>()
                .AddDefaultTokenProviders();


            // JWT

            var appSettingsSection = configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme; //toda vez que autenticar, é para gerar um token
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme; //toda vez que validar, vai verificar se está autenticado
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false; // garantia que vai ser apenas https.
                x.SaveToken = true; //
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true, //quem emitiu é o mesmo que a chave.
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = appSettings.ValidoEm,
                    ValidIssuer = appSettings.Emissor
                };
            });


            return services;
        }
    }
}
