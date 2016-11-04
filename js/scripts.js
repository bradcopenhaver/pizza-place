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

function Address() {
  this.street = "";
  this.apt = "";
  this.zip = "";
}

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
  this.price = 0;
  for (var i = 0; i<this.pies.length; i++){
    this.price += this.pies[i].price;
  }
};
Order.prototype.deliverTo = function () {
  this.address
};

var order = new Order;




///UI logic below here

var updateSummary = function() {
  $("#summary").html("<h5>Order Summary:</h5>");
  for (var i=0; i<order.pies.length; i++) {
    $("#summary").append("<p>Pie "+(i+1)+": " + order.pies[i].size + ": $"+order.pies[i].price +"</p><ul id='pie'" + i +">")
    for (var j=0; j<order.pies[i].toppings.length; j++){
      $("#summary").append("<li>"+order.pies[i].toppings[j]+"</li>")
    }
    $("#summary").append("</ul>")
  }
}



$(document).ready(function(){

  $(".newPie").submit(function(event) {
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
    updateSummary();
    console.log(pizza);
    console.log(order);
  });

  $("#addressInput").submit(function(event){
    event.preventDefault();

    var address = new Address;

    address.street = $("#streetInput").val();
    address.apt = $("#aptInput").val();
    address.zip = $("#zipInput").val();

    order.address = address;
    order.name = $("#nameInput").val();

  });
});
