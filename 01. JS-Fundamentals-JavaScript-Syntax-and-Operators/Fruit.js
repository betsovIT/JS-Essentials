function solve(str,num1,num2) {
    let fruit = str;
    let kilos = num1/1000;
    let price = num2;

    console.log(`I need $${(kilos*price).toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80)