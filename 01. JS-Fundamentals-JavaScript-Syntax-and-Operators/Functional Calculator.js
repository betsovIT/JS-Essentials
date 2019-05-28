function solve(num1, num2, inputOperator) {
    let a = num1;
    let b = num2;
    let operator = inputOperator;

    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        default:
            break;
    }
}