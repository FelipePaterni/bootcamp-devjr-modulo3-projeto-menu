//mascara de telefone
$("#phone").mask("(99) 9999-99999");



function calc() {
  var nome = document.getElementById("name").value;
  var telefone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  output = document.getElementById("output");
  output.innerHTML = "";

  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",



  });
}
