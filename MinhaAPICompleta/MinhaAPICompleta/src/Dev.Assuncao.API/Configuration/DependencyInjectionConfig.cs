using Dev.Assuncao.Business.Services;
using Dev.Assuncao.Data.Context;
using Dev.Assuncao.Data.Repository;
using Dev.Assuncao.Intefaces;
using Dev.Assuncao.Notificacoes;
using DevIO.Business.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Dev.Assuncao.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static IServiceCollection ResolveDependencies(this IServiceCollection services)
        {
            services.AddScoped<MeuDbContext>();
            services.AddScoped<IFornecedorRepository, FornecedorRepository>();         
            services.AddScoped<IEnderecoRepository, EnderecoRepository>();
            services.AddScoped<IProdutoRepository, ProdutoRepository>();

            services.AddScoped<IFornecedorService, FornecedorService>();
            services.AddScoped<INotificador, Notificador>();
            services.AddScoped<IProdutoService, ProdutoService>();



            return services;
        }




    }
}
