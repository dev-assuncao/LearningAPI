using Microsoft.Extensions.Configuration;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.DependencyInjection;
using Dev.Assuncao.Data.Context;
using Microsoft.EntityFrameworkCore;
using Dev.Assuncao.API.Data;
using Microsoft.AspNetCore.Identity;
using Dev.Assuncao.API.Extensions;

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

            return services;
        }
    }
}
