const navbar = document.querySelector('.primary-navbar')
const footer = document.querySelector('footer')

navbar.innerHTML = `
<div class="nav-left">
<div class="logo-comp">
  <a href="../home-pag/index.html"><img src="../img/logo-navBar.png" alt="Logo mahindra" id="logo"/></a>
</div>
</div>
<!-- Lado direito da navbar -->
<div id="nav-right">
<ul>
  <li><a href="../formulaE-pag/formulaE.html">Fórmula E</a></li>
  <li><a href="../loja-pag/loja.html">Loja</a></li>
  <li><a href="../eGame-pag/eGame.html">E-game</a></li>
  <div class="profile-container">
    <li>
      <a href=""><img src="../img/profile-icon.png" alt="" /></a>
    </li>
    <div class="cad-log-container">
      <li><a href="../entrar-pag/entrar.html">Entrar</a></li>
      <li><a href="../cadastro-pag/cadastro.html">Cadastrar</a></li>
    </div>
  </div>
</ul>
</div>
`

footer.innerHTML = `
<h5 class="footer-text">@2024 - todos os direitos reservados</h5>
`

// Gerações de carros
const geracao1 = document.querySelector('.gen1')
const geracao2 = document.querySelector('.gen2')
const geracao3 = document.querySelector('.gen3')

geracao1.addEventListener('click', () =>{
  alterarConteudo('gen1')
})

geracao2.addEventListener('click', () =>{
  alterarConteudo('gen2')
})

geracao3.addEventListener('click', () =>{
  alterarConteudo('gen3')
})

function alterarConteudo(geracao) {
  const imagemCarro = document.querySelector('.imagem-carro');
  const ano = document.querySelector('.ano');
  const textoInicial = document.querySelector('.texto-inicial');
  const velocidadeMaxima = document.querySelector('#velocidade-max');
  const aceleracao = document.querySelector('#aceleracao');
  const textoMotor = document.querySelector('.texto-motor');
  const motorData = document.querySelector('.motor-conteiner');

  switch (geracao) {
    case 'gen1':
      imagemCarro.setAttribute('src', '../img/carro1.png');
      ano.textContent = `2014 - 2017`;
      textoInicial.innerHTML = `<p>Fabricado pela <span>Dallara</span> em parceria com a <span>Spark Racing Technology</span>.</p>`;
      velocidadeMaxima.textContent = `225 km/h`;
      aceleracao.innerHTML = `0 a 100 km/h <span>em 3 segundos</span>`;
      textoMotor.innerHTML = `Os motores foram feitos pela <span>McLaren Electronic Systems</span>, tinham três modos:`;
      motorData.innerHTML = `
      <div>
              <h2>normal</h2>
              <p>200kw</p>
            </div>
            <div>
              <h2>econômico</h2>
              <p>150kw</p>
            </div>
            <div>
              <h2>push to pass</h2>
              <p>230kw</p>
            </div>`;
      break;

    case 'gen2':
      imagemCarro.setAttribute('src', `../img/carro2.png`);
      ano.textContent = `2018 - 2021`;
      textoInicial.innerHTML = `<p>O carro manteve a <span>composição de fibra de carbono e alumínio</span>, mas ganhou um <span>design mais agressivo e futurista</span>.</p>
      <p>Itrodução do <span>Halo</span>, um dispositivo de segurança que protege a cabeça do piloto, inicialmente criticado, mas posteriormente reconhecido por sua eficácia em salvar vidas.</p>`;
      velocidadeMaxima.textContent = `280 km/h`;
      aceleracao.innerHTML = `0 a 100 km/h <span>em 2,8 segundos</span>`;
      textoMotor.innerHTML = `A partir da segunda temporada, cada equipe pôde escolher sua própria fornecedora de motores.`;
      motorData.innerHTML = `
      <div>
              <h2>normal</h2>
              <p>200kw</p>
            </div>
            <div>
              <h2>ataque</h2>
              <p>225kw</p>
            </div>
            <div>
              <h2>fan boost</h2>
              <p>250kw</p>
            </div>`;
      break;

    case 'gen3':
      imagemCarro.setAttribute('src', '../img/carro3.png');
      ano.textContent = `Geração atual`;
      textoInicial.innerHTML = `<p>A autonomia da bateria foi aprimorada, agora os carros possuem <span>dois motores</span>: um para funcionamento e outro para regeneração de energia. A meta é que <span>40% da eletricidade usada nas corridas seja gerada pelas freadas dos pilotos</span>, tornando o Gen 3 o carro elétrico mais eficiente do mundo.</p>`;
      velocidadeMaxima.textContent = `320 km/h`;
      aceleracao.innerHTML = `0 a 100 km/h <span>em 1,86 segundos</span>`;
      textoMotor.innerHTML = `Os motores foram feitos pela <span>McLaren Electronic Systems</span>, mas a partir da segunda temporada, cada equipe pôde escolher sua própria fornecedora de motores;`;
      motorData.innerHTML = `
      <div>
              <h2>normal</h2>
              <p>300kw</p>
            </div>
            <div>
              <h2>ataque</h2>
              <p>350kw</p>
            </div>`;
      break;
  
    default:
      break;
  } 
}