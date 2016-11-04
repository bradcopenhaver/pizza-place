function Pizza() {
  this.size = "large";
  this.toppings = [];
  this.price = 0;
}
function Order() {
  this.pies = [];
  this.price = 0;
  this.name = "";
  this.address;
}
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
Pizza.prototype.calculatePrice = function () {
  if (this.size === "small") {
    this.price = 8 + this.toppings.length * 0.75;
  }else if (this.size === "medium") {
    this.price = 10 + this.toppings.length;
  }else {
    this.price = 13 + this.toppings.length * 1.25;;
  }
};
Order.prototype.addPie = function (pie) {
  this.pies.push(pie);
};
Order.prototype.calculatePrice = function() {
  debugger;
  this.price = 0;
  for (var i = 0; i<this.pies.length; i++){
    this.price += this.pies[i].price;
  };
}

var order = new Order;




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
    pizza.calculatePrice();
    order.addPie(pizza);
    order.calculatePrice();
    console.log(pizza);
    console.log(order);
  })

});
