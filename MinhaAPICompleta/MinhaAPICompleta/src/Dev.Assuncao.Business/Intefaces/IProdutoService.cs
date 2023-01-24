using System;
using System.Threading.Tasks;
using Dev.Assuncao.Models;

namespace Dev.Assuncao.Intefaces
{
    public interface IProdutoService : IDisposable
    {
        Task Adicionar(Produto produto);
        Task Atualizar(Produto produto);
        Task Remover(Guid id);
    }
}