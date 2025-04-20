//mascara de telefone
$("#phone").mask("(99) 9999-99999");

//lista de produtos
var prods = [
  { id: 1, name: "Batata com bife", price: 30.0 },
  { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
  { id: 3, name: "Carne de Panela", price: 22.0 },
  { id: 4, name: "Farofa", price: 10.0 },
  { id: 5, name: "Salada", price: 8.0 },
  { id: 6, name: "Torresmo", price: 12.0 },
];

function calc() {
  //inputs
  

  var quantities = document.getElementsByName("quantity");
  var total = 0;

  var output = document.getElementById("output");
  output.innerHTML = "";

  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  intro();

  for (var input of quantities) {
    var id = input.id;
    if (input.value > 0) {
      output.innerHTML += `Produto: ${prods[id - 1].name}  - Preço: ${
        prods[id - 1].price
      } - Quantidade: ${input.value} </br>`;
      total += prods[id - 1].price * parseFloat(input.value);
    }
  }
}

function intro(){
  var nome = document.getElementById("name").value;
  var intro = document.getElementById("intro");

  intro.innerHTML = `Caro <span>${nome}</span>`;
}