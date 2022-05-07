function openNav() {
    document.getElementById("meuMenu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("img-menu").style.width = "200px";
    document.getElementById("meuMenu").style.fontSize = "1.3rem";
    document.getElementById("img-menu").src = "/Recursos/img/Logo_Selettra_Branco.png";
    document.getElementById("img-menu").setAttribute('onclick','closeNav()');

  }
  
  
  function closeNav() {
    document.getElementById("meuMenu").style.width = "80px";
    document.getElementById("main").style.marginLeft = "80px";
    document.getElementById("img-menu").style.width = "70px";
    document.getElementById("meuMenu").style.fontSize = "0";
    document.getElementById("img-menu").src = "/Recursos/img/Logo_Selettra_Vertical_Branco.png";
    document.getElementById("img-menu").setAttribute('onclick','openNav()');
  }

  