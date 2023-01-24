using System;
using System.Threading.Tasks;
using Dev.Assuncao.Models;

namespace Dev.Assuncao.Intefaces
{
    public interface IEnderecoRepository : IRepository<Endereco>
    {
        Task<Endereco> ObterEnderecoPorFornecedor(Guid fornecedorId);
    }
}