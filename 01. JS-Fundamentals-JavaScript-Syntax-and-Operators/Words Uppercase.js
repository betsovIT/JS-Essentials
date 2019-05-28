function solve(str) {
    let pattern = new RegExp(/\w+/g);
    let input = str;
    let result = input.match(pattern);
    let arrResults = [];
    result.forEach(word => {
        arrResults.push(word.toUpperCase());
        
    });
    

    console.log(arrResults.join(', '));
}
solve('Hi, how are you?');