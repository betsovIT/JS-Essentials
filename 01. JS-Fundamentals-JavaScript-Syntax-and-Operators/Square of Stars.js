function solve(param) {
    let input = param;
    if (typeof(input) == "undefined") {
        for (let index = 0; index < 5; index++) {
            console.log("* * * * *");     
        }
    }
    else if(typeof(input) == "number"){
        for (let index = 0; index < input; index++) {
            console.log("* ".repeat(input));            
        }
    }
}
solve(3);