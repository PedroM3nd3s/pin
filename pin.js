  function insert(num)
  {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
    

    if(numero.length>5){
      document.getElementById('resultado').innerHTML="PIN MUITO GRANDE"
      document.getElementById('resultado').style='border:solid 2px red; font-weight: bold'
      console.log("tem que ter pelomenos 6 caracteres")
      document.getElementById('resultado').innerHTML=""
      window.alert("senha muito longa")
    }

  }
  function clean()
  {
      document.getElementById('resultado').innerHTML=""
      document.getElementById('resultado').style='background-color:white'
  }
  function verificar(){
    var result= document.getElementById('resultado').innerHTML
    const senha="123456"
    if(result==senha){
      document.getElementById('resultado').innerHTML="senha correta"
      document.getElementById('resultado').style='border:solid 2px green'
      
    }
    else if(result.length<4){
      document.getElementById('resultado').innerHTML="senha muito curta"
      document.getElementById('resultado').style='border:solid 2px yellow'
    }
    else if(result.length!=senha){
      document.getElementById('resultado').innerHTML="senha incorreta"
      document.getElementById('resultado').style='border:solid 2px red'
    }
  }