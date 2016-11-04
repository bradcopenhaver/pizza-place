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
  this.phone = "";
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
  $("#summary").html("<h4>Order Summary:</h4>");
  for (var i=0; i<order.pies.length; i++) {
    $("#summary").append("<p>Pie "+(i+1)+": " + order.pies[i].size + ": $"+order.pies[i].price.toFixed(2) +"</p><ul id='pie'" + i +">")
    for (var j=0; j<order.pies[i].toppings.length; j++){
      $("#summary").append("<li>"+order.pies[i].toppings[j]+"</li>")
    }
    $("#summary").append("</ul>");
  }
  $("#summary").append("<p>Total price: $"+order.price.toFixed(2));
}
var clearToppings = function() {
  $("input:checkbox[name=toppings]:checked").each(function(){
    this.checked = false;
  });
}
var confirmationMessage = function() {
  if (order.pies.length>1) {
    $("#confirmName").text(order.name +"'s pies ");
  } else {
    $("#confirmName").text(order.name +"'s pie ");
  }
  if (order.address.apt) {
    $("#confirmAddress").text(order.address.street + " Apt # " + order.address.apt);
  } else {
    $("#confirmAddress").text(order.address.street);
  }
  $("#confirmPhone").text(order.phone);
  $("#confirmPrice").text(order.price.toFixed(2));
}
var validateAddress = function() {
  if (order.address.street && order.phone && order.name){
    return 1;
  }
}
$(document).ready(function(){

  $("#completePie").click(function(event) {
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
    $("#controlButtons").slideDown();
    $("#orderForm").slideUp();
  });

  $("#clearToppings").click(function(event){
    event.preventDefault();
    clearToppings();
  });

  $("#addAnother").click(function(){
    clearToppings();
    $("#orderForm").slideDown();
    $("#controlButtons").slideUp();
  });

  $("#orderComplete").click(function(){
    $("#controlButtons").slideUp();
    $("#addressInput").slideDown();
  });

  $("#addressSubmit").click(function(event){
    event.preventDefault();

    var address = new Address;

    address.street = $("#streetInput").val();
    address.apt = $("#aptInput").val();
    address.zip = $("#zipInput").val();

    order.address = address;
    order.name = $("#nameInput").val();
    order.phone = $("#phoneInput").val();

    var validate = validateAddress();
    if (validate){
      $("#invalidAddress").hide();
      $("#addressInput").slideUp();
      $("#orderConfirmation").slideDown();
      confirmationMessage();
    } else {
      $("#invalidAddress").show();
    }
  });
});
