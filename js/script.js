'use strict';

function generateOddNumber(min, max) {
    if (max < min) {
        let temp = min;
        min = max;
        max = temp;
    }

    let arr = [];

    if (min % 2 === 0) {
        arr[0] = min + 1;
        for (let i = 1; i <= (max - min-1) / 2; i++) {
            arr[i] = arr[i-1] + 2;
        }
    } else {
        arr[0] = min;
        for (let i = 1; i <= (max - min) / 2; i++) {
            arr[i] = arr[i-1] + 2;
        }
    }

    let randResult = arr[Math.floor(Math.random()*arr.length)];

    return randResult;
}

console.log(generateOddNumber(1, 100));
console.log(generateOddNumber(0, -10));
console.log(generateOddNumber(-7, -3));
console.log(generateOddNumber(-100, 100));
console.log(generateOddNumber(1, -1));

/*
console.log('В интервале от 1 до 100: ' + generateOddNumber(1, 100));
console.log('В интервале от 0 до -10: ' + generateOddNumber(0, -10));
console.log('В интервале от -7 до -3: ' + generateOddNumber(-7, -3));
console.log('В интервале от -100 до 100: ' + generateOddNumber(-100, 100));
console.log('В интервале от 1 до -1: ' + generateOddNumber(1, -1));*/