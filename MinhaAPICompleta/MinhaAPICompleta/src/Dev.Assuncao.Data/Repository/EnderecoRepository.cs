using System;
using System.Threading.Tasks;
using Dev.Assuncao.Data.Context;
using Dev.Assuncao.Intefaces;
using Dev.Assuncao.Models;
using Microsoft.EntityFrameworkCore;

namespace Dev.Assuncao.Data.Repository
{
    public class EnderecoRepository : Repository<Endereco>, IEnderecoRepository
    {
        public EnderecoRepository(MeuDbContext context) : base(context) { }

        public async Task<Endereco> ObterEnderecoPorFornecedor(Guid fornecedorId)
        {
            return await Db.Enderecos.AsNoTracking()
                .FirstOrDefaultAsync(f => f.FornecedorId == fornecedorId);
        }
    }
}