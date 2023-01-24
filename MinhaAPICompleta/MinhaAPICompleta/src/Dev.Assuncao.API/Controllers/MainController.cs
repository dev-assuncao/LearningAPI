using Dev.Assuncao.API.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dev.Assuncao.API.Controllers
{
    [ApiController]
    public abstract class MainController : ControllerBase
    {
        //validacoes de notificaçoes de erros

        //validação de modelstate

        //validacao da operacao de negocios
    }


    [Route("api/fornecedores")]
    public class FornecedoresController : MainController
    {
        public async Task<ActionResult<IEnumerable<FornecedorViewModel>>> ObterTodos()
        {





            return Ok();
        }
    }
}
