const btnEntrar = document.getElementsByClassName('btn-entrar')[0];
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

btnEntrar.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  if (email === '' || senha === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  if (email === 'usuario@example.com' && senha === '123456') {
    window.location.href = '../home-pag/index.html';
  } else {
    alert('E-mail ou senha incorretos.');
  }
});