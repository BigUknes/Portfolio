function somme() {
  var a = document.getElementById("t1").value;
  var b = document.getElementById("t2").value;

  var c = Number(a) + Number(b);

  document.getElementById("t3").value = c;
}



function soustraction() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
  
    var c = Number(a) - Number(b);
  
    document.getElementById("t3").value = c;
}



  function multiplication() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
  
    var c = Number(a) * Number(b);
  
    document.getElementById("t3").value = c;
  }




  function division() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
  
    var c = Number (a) / Number (b);
  
    if (Number(b) === 0) 

      document.getElementById("t3").value = "Erreur : on ne divise pas par 0";

    else 

      document.getElementById("t3").value = c;
    
  }




  function paire() {

    var a = document.getElementById("t1").value;
    var d = undefined;

    if (a %2==0)
    var d = "Paire";

    else
    var d = "Impaire";
  
    document.getElementById("t4").value = d;
  }



function permute() {
  var a = document.getElementById("t1").value;
  var b = document.getElementById("t2").value;
  document.getElementById("t2").value = a;
  document.getElementById("t1").value = b;
  }



function  effacer() {

  document.getElementById("t1").value = "";
  document.getElementById("t2").value = "";
  document.getElementById("t3").value = "";
  document.getElementById("t4").value = "";

  }



