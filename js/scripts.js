var price, crustPrice, toppingPrice;
let total = 0;

function getPizza(size, crust, topping, total) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}

$(document).ready(function () {
    $("button.addOrder").click(function (event) {
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        let pizzaTopping = $("topping option:selected").val();
    });
    switch (pizzaSize) {
        case "0":
            price = 0;
            break;
        case "small":
            price = 600;
            console.log(price);
            break;
        case "medium":
            price = 800;
            console.log(price);
            break;
        case "large":
            price = 1000;
        default:
            console.log("error");
    }
})