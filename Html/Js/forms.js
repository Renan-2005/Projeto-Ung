document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agendamentoForm');
    const mensagemObrigado = document.getElementById('mensagemObrigado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ocultar o formulário e exibir a mensagem de agradecimento
        form.style.display = 'none';
        mensagemObrigado.style.display = 'block';
    });
});
