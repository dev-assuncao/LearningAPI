using System.Collections.Generic;
using Dev.Assuncao.Notificacoes;

namespace Dev.Assuncao.Intefaces
{
    public interface INotificador
    {
        bool TemNotificacao();
        List<Notificacao> ObterNotificacoes();
        void Handle(Notificacao notificacao);
    }
}