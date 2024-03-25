"use strict"

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        string += `...${arr[i]} degree celcius in ${[i + 1]} days `
    }

    return string;
}

console.log(printForecast(data1))