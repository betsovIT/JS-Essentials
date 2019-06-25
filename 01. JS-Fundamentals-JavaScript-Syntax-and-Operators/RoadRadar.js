function solve(arr) {
    switch (arr[1]) {
        case "motorway":
            if (Number(arr[0]) - 130 >0 && Number(arr[0]) - 130 <= 20) {
                console.log("speeding")
            }
            else if (Number(arr[0]) - 130 >0 && Number(arr[0]) - 130 <= 40) {
                console.log("excessive speeding")
            }
            else if (Number(arr[0]) - 130 >40) {
                console.log("reckless driving ")
            }
            break;
        case "interstate":
            if (Number(arr[0]) - 90 >0 && Number(arr[0]) - 90 <= 20) {
                console.log("speeding")
            }
            else if (Number(arr[0]) - 90 >0 && Number(arr[0]) - 90 <= 40) {
                console.log("excessive speeding")
            }
            else if (Number(arr[0]) - 90 >40) {
                console.log("reckless driving ")
            }
            break;
        case "city":
            if (Number(arr[0]) - 50 >0 && Number(arr[0]) - 50 <= 20) {
                console.log("speeding")
            }
            else if (Number(arr[0]) - 50 >0 && Number(arr[0]) - 50 <= 40) {
                console.log("excessive speeding")
            }
            else if (Number(arr[0]) - 50 >40) {
                console.log("reckless driving ")
            }
            break;
        case "residential":
            if (Number(arr[0]) - 20 >0 && Number(arr[0]) - 20 <= 20) {
                console.log("speeding")
            }
            else if (Number(arr[0]) - 20 >0 && Number(arr[0]) - 20 <= 40) {
                console.log("excessive speeding")
            }
            else if (Number(arr[0]) - 20 >40) {
                console.log("reckless driving ")
            }
            break;
    
        default:
            break;
    }
    
}

solve([21,"residential"]);