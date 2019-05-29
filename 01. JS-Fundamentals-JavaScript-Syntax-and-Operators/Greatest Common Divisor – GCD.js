function solve(num1,num2) {
    let firstNumber = num1;
    let secondNumber = num2;
    for (let i = Math.min(firstNumber,secondNumber); i >= 1; i--) {
        if (firstNumber % i == 0 && secondNumber % i == 0) {
            console.log(i);
            break;
        }
        
    }
}
solve(2154, 458)