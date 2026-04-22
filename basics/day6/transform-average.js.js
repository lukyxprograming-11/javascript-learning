//průměr upravených hodnot

//Pravidla:

//čísla > 5
//sudé → *2
//liché → *3

const numbers = [3, 12, 7, 20, 5, 18, 1];

let count = 0;
let sum = 0;
let average = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        count++;

        let value;
        if (numbers[i] % 2 === 0) {
            value = numbers[i] * 2;
        } else {
            value = numbers[i] * 3;
        }

        sum += value;
    }
}

if (count > 0) {
    average = sum / count;
} else {
    average = 0;
}

console.log(average);


