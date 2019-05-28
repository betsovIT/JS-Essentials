function solve(input) {
    let arr = input;
    let sum = 0;
    let reverseSum = 0;
    let concatenation = "";

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        reverseSum += 1/arr[index];
        concatenation+=arr[index];
        
    }
    console.log(sum);
    console.log(reverseSum);
    console.log(concatenation);
}
solve([1, 2, 3]);
