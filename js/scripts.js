function Pizza() {
  this.size = "large";
  this.toppings = [];
}


// function Order {
//   this.pizzas = [];
//   this.name = "";
//   this.address;
// }
//
// function Address {
//   this.street = "";
//   this.apt = "";
//   this.zip = "";
// }

Pizza.prototype.complete = function(size, toppings) {
  this.size=size;
  this.toppings= toppings;
}






///UI logic below here

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var pizza = new Pizza;
    var size = $("input:radio[name=size]:checked").val();

    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });

    pizza.complete(size, toppings);
    console.log(pizza);
  })

});
