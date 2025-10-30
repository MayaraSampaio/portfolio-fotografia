document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contato form');
  const modalEl = document.getElementById('contactModal');

  // se não achar o form OU o modal, para aqui
  if (!form || !modalEl) return;

  // cria o modal só uma vez
  const modal = new bootstrap.Modal(modalEl);

  // escuta o envio do formulário
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    modal.show(); // abre o modal
    form.reset(); // limpa o form
  });
});
