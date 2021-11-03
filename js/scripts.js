var sizes = {small: 100, medium: 200, large: 300}
var crusts = {stuffed: 10, glutenFree: 20, crispy: 50}
var toppings = {
    'Hawaii':{
        small: 10,
        medium: 15,
        large: 20
    },
    'Pepperoni':{
        small: 15,
        medium: 20,
        large: 25
    },
    'Barbecue':{
        small: 20,
        medium: 30,
        large: 50
    },
}

function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings
    this.sizePrice = sizes[this.size]
    this.crustPrice = crusts[this.crust]
    this.topPrice = 0

}
Pizza.prototype.getTopPrice = function() {
    this.toppings.forEach(Pizza,this.size) {
        
    });
        
    );
}
var jamalPizza = new Pizza('medium', 'glutenFree', ['Hawaii', 'Pepperoni'])
//console.log(jamalPizza.)


// console.log(toppings['Pepperoni'][size])

