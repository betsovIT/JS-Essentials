function solve(num1, num2) {
    let n = Number(num1);
    let m = Number(num2);
    let sum = 0;

    for (let index = n; index < m+1; index++) {
        sum += index;        
    }

    console.log(sum);
    
}