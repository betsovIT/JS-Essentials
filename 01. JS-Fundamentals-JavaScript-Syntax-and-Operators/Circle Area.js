function solve(input) {
    let token = input;
    let type = typeof(input);
    if (type === "number") {
        console.log((token**2*Math.PI).toFixed(2));      
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(token)}.`);
    }
}

solve(5);