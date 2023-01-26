using Dev.Assuncao.Data.Context;
using Dev.Assuncao.Data.Repository;
using Dev.Assuncao.Intefaces;
using Microsoft.Extensions.DependencyInjection;

namespace Dev.Assuncao.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static IServiceCollection ResolveDependencies(this IServiceCollection services)
        {
            services.AddScoped<MeuDbContext>();
            services.AddScoped<IFornecedorRepository, FornecedorRepository>();



            return services;
        }




    }
}
