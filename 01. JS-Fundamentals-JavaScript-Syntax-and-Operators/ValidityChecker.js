function solve(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    let dist1 = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
    let dist2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
    let dist3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (Number.isInteger(dist1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(dist2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(dist3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

solve([2, 1, 1, 1])