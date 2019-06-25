function Solve(steps, widthOfStep, speed) {
    let distance = steps * widthOfStep;
    let additionalTime = parseInt(distance / 500);
    let timeAsHours = (distance/1000)/speed + additionalTime/60;
    
    let hours = Math.floor(timeAsHours);
    let minutes = Math.floor((timeAsHours-hours)*60);
    let seconds = Math.ceil((timeAsHours-hours-minutes/60)*3600);
    console.log(`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`)
}

Solve(4000, 0.6, 5)