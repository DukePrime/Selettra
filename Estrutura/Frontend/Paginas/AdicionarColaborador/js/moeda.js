function formatarMoeda() {
    var elemento = document.getElementById('txtSalario');
    var valor = elemento.value;

    valor = parseInt(valor.replace(/[\D]+/g,''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");
  
    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }
  
    elemento.value = 'R$:  ' + valor;
  }

function acessoSistema(){
  const  acesso = document.querySelector('#acesso');
  console.log("teste");

  if (acesso.value == 1){
    document.getElementById("nivAcesso").disabled = false;
    document.getElementById("txtSenha").disabled = false;
  }
  else {
    document.getElementById("nivAcesso").disabled = true;
    document.getElementById("nivAcesso").value = 0;
    document.getElementById("txtSenha").disabled = true;
    document.getElementById("txtSenha").value = null;
  }

}