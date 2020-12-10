//function declaration for making a hollands broodje
const makeBrood = function(brood, kaas, sauce){
    console.log('Knip het ' + brood + ' in half, leeg de ' + kaas + ' erop, ' + sauce + ' brengt het op smaak');
}
//function for making a hollands broodje

//function declaration for showing ingredients, nooit geroept
const boterham = (brood, kaas, topping) => {
    console.log('Ingredients for your sandwich: ', brood, kaas, topping);
}
//function for showing ingredients

//function declaration for making a sandwich
const makeSandwich = (topping) => {
    makeBrood('meerzadenbroodje', 'jongbelegen kaas', topping); //function call
}
//function for making a sandwich

//kortingsactie declaration
const calculateDiscountedPrice = function(totalAmount, discount){
    return totalAmount-discount;
}
//kortingsactie declaration

//declaration meer dan 25 euro
const isKortingGeldig = function(totalAmount, discount){
    if (totalAmount>25){
        return totalAmount-discount;
    }
    else {
        return totalAmount;
    }
}
//declaration meer dan 25 euro

//function call Deel A
makeBrood('kaiserbroodje', 'oudekaas', 'mustardsaus');

//function call Deel B
makeSandwich('mayo');

//function call Deel C
console.log(calculateDiscountedPrice(15, 2.5));

//function call Deel D
console.log(isKortingGeldig(27, 1.25));