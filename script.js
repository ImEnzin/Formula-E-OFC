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
  <li><a href="../timeMahindra-pag/timeMahindra.html">Time Mahindra</a></li>
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