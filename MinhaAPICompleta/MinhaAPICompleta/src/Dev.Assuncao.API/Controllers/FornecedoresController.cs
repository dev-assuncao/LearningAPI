using AutoMapper;
using Dev.Assuncao.API.Extensions;
using Dev.Assuncao.API.ViewModels;
using Dev.Assuncao.Data.Repository;
using Dev.Assuncao.Intefaces;
using Dev.Assuncao.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dev.Assuncao.API.Controllers
{
    [Authorize]
    [Route("api/fornecedores")]
    public class FornecedoresController : MainController
    {

        private readonly IFornecedorRepository _fornecedorRepository;

        private readonly IMapper _mapper;

        private readonly IFornecedorService _fornecedorService;
        private readonly IEnderecoRepository _enderecoRepository;


        public FornecedoresController(IFornecedorRepository fornecedorRepository, IMapper mapper, IFornecedorService fornecedorService, INotificador notificador, IEnderecoRepository enderecoRepository) : base (notificador)
        {
            _fornecedorRepository = fornecedorRepository;
            _mapper = mapper;
            _fornecedorService = fornecedorService;
            _enderecoRepository = enderecoRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<FornecedorViewModel>> ObterTodos()
        {
            var fornecedor =_mapper.Map<IEnumerable<FornecedorViewModel>>(await _fornecedorRepository.ObterTodos());
            return fornecedor;
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<FornecedorViewModel>> ObterPorId(Guid id)
        {
            var fornecedor = await ObterFornecedorProdutosEndereco(id);

            if (fornecedor == null) return NotFound();

            return fornecedor;
        }

        [ClaimsAuthorize("Fornecedor","Adicionar")]
        [HttpPost]
        public async Task<ActionResult<FornecedorViewModel>> Adicionar (FornecedorViewModel fornecedorViewModel)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await _fornecedorService.Adicionar(_mapper.Map<Fornecedor>(fornecedorViewModel));

            return CustomResponse(fornecedorViewModel);
        }

        [ClaimsAuthorize("Fornecedor", "Atualizar")]
        [HttpPut("{id:guid}")]
        public async Task<ActionResult<FornecedorViewModel>> Atualizar(Guid id, FornecedorViewModel fornecedorViewModel)
        {
            if (id != fornecedorViewModel.Id)
            {
                NotificarErro("o id informado não é o mesmo passado na query");
                return CustomResponse(fornecedorViewModel);
            }

            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await _fornecedorService.Atualizar(_mapper.Map<Fornecedor>(fornecedorViewModel));

            return CustomResponse(fornecedorViewModel);
        }

        [ClaimsAuthorize("Fornecedor", "Excluir")]
        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<FornecedorViewModel>> Excluir(Guid id)
        {
            var forncedorViewModel = ObterFornecedorEndereco(id);

            if (forncedorViewModel   == null) return NotFound();

            await _fornecedorService.Remover(id);

            return CustomResponse(forncedorViewModel);
           
        }


        [HttpGet("obter-endereco/{id:guid}")]
        public async Task<EnderecoViewModel> ObterEnderecoPorId(Guid id)
        {
            return _mapper.Map<EnderecoViewModel>(await _enderecoRepository.ObterPorId(id));
        }

        [ClaimsAuthorize("Fornecedor", "Atualizar")]
        [HttpPut("atualizar-endereco/{id:guid}")]
        public async Task<IActionResult> AtualizarEndereco(Guid id, EnderecoViewModel enderecoViewModel)
        {
            if (id != enderecoViewModel.Id)
            {
                NotificarErro("O id informado não é o mesmo que foi passado na query");
                return CustomResponse(enderecoViewModel);
            }

            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await _fornecedorService.AtualizarEndereco(_mapper.Map<Endereco>(enderecoViewModel));

            return CustomResponse(enderecoViewModel);
        }

        private async Task<FornecedorViewModel> ObterFornecedorProdutosEndereco(Guid id)
        {
            return _mapper.Map<FornecedorViewModel>(await _fornecedorRepository.ObterFornecedorProdutosEndereco(id));
        }


        private async Task<FornecedorViewModel> ObterFornecedorEndereco(Guid id)
        {
            return _mapper.Map<FornecedorViewModel>(await _fornecedorRepository.ObterFornecedorEndereco(id));
        }
    }
}
