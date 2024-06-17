const btnCadastrar = document.getElementsByClassName('btn-cadastrar')[0];
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const cpfInput = document.getElementById('cpf');

btnCadastrar.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();
  const cpf = cpfInput.value.trim();

  if (email === '' || senha === '' || cpf === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  if (cpf.length !== 11 || isNaN(cpf)) {
    alert('CPF inválido. O CPF deve conter exatamente 11 dígitos numéricos.');
    return;
  }
  if (validateEmail(email)) {
    window.location.href = '../home-pag/index.html';
  } else {
      alert('E-mail inválido, tente novamente.');
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}