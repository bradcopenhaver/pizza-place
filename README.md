# Pizza Delivery Order Form

#### This page acts as a pizza delivery order form for a fictitious pizza place. Users can order multiple pizzas, customize toppings, and enter their delivery address. *Order confirmation is for display purposes only. You will not receive a pizza as a result of using this page.* {November 2016}

#### By **Brad Copenhaver**

## Description

This is a simple pizza-ordering application. The user chooses pizza size and toppings from a list of available choices. When a pizza is complete, it is added to the total order and the user has the option to add another pizza or check out. On checkout, the user is prompted to supply a name, address, and phone number, which is then associated with the order. When the name, address, and phone number fields have any values, the user can submit the order and a confirmation message is shown. Otherwise, the user is prompted to fill in those fields.

###Specifications
_This program will..._
* Remember what size pizza the user orders.
 * Input: 10"
 * Output: {10"}

* Allow the user to add multiple toppings to the pizza.
 * Input: pepperoni, extra cheese
 * Output: {10", pepperoni, extra cheese}

* Calculate a price for complete pizza.
 * Input: 10": pepperoni, extra cheese
 * Output: {10", pepperoni, extra cheese, $12.95}

* Keep track of multiple pizzas in the same order.
  * Input: 10": pepperoni, extra cheese, 12": artichoke, olives
  * Output: {10", pepperoni, extra cheese, $12.95}, {12", artichoke, olives, $15.00}

* Accept a delivery address for each order.
 * Input: Delivery: 123 Street, Town, State, ZIP
 * Output: 10": pepperoni, extra cheese, $12.95, deliver to 123 Street, Town, State, ZIP

###Possible future version features

* Allow users to edit any part of their order at any point before final submission.

## Setup/Installation Requirements

Source code available at https://github.com/bradcopenhaver/pizza-place

## Known Bugs

Name, address, and phone input fields will accept any input.

## Support and contact details

If you have questions or comments, contact the authors at bradcopenhaver@gmail.com

## Technologies Used

* jquery
* Bootstrap
* javascript
* html/css

### License

This project is licensed under the MIT license.

Copyright (c) 2016 **Brad Copenhaver**
