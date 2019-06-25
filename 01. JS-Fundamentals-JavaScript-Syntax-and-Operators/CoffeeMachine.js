function solve(arr) {
    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }
    let income = 0;
    for (let i = 0; i < arr.length; i++) {

        let str = String(arr[i]);
        let order = str.split(", ");

        let money = Number(order[0]);
        let drink = String(order[1]);

        if (drink == "coffee") {
            let coffeeType = String(order[2]);
            let sugar = 0;
            let milk = "none";

            if (order[3] == "milk") {
                milk = "yes";
                sugar = Number(order[4]);
            } else {

                sugar = Number(order[3]);
            }

            let price = 0;

            if (coffeeType == "caffeine") {
                price = 0.8;
            } else {
                price = 0.9;
            }

            if (sugar > 0) {
                price = price + 0.1;
            }

            if (milk == "yes") {
                price = price * 1.1;
            }

            if (price <= money) {
                console.log(`You ordered ${drink}. Price: $${round(price,1).toFixed(2)} Change: $${round((money-price),1).toFixed(2)}`);
                income = income + price;
            } else {
                console.log(`Not enough money for ${drink}. Need $${round((price-money),1).toFixed(2)} more.`);
            }

        } else {
            let sugar = 0;
            let milk = "none";

            if (order[2] == "milk") {
                milk = "yes";
                sugar = Number(order[3]);
            } else {

                sugar = Number(order[2]);
            }

            let price = 0.8;

            if (sugar > 0) {
                price = price + 0.1;
            }

            if (milk == "yes") {
                price = price * 1.1;
            }

            if (price <= money) {
                console.log(`You ordered ${drink}. Price: $${round(price,1).toFixed(2)} Change: $${round((money-price),1).toFixed(2)}`);
                income = income + price;
            } else {
                console.log(`Not enough money for ${drink}. Need $${round((price-money),1).toFixed(2)} more.`);
            }
        }
    }
    console.log(`Income Report: $${round((income),1).toFixed(2)}`);
}


solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0'])