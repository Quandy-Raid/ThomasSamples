var menu1 = "coffee";
var menu2= "tea"
var CoffeeMessage = "Great choice, would you like cream and sugar?";
var TeaMessage = "Excellent choice, would you like milk and sugar?";
var FailMessage = "Sorry, I don't know what that is.";
var order = prompt ("You have two choices, coffee or tea. Which would you like?");

if (order === menu1) {
    document.write(CoffeeMessage);
} else if (order === menu2) { 
    document.write(TeaMessage)
} else {
    document.write(FailMessage)
}

//document.write(order + " is an excellent choice.")
//console.log(order + " is an excellent choice.")