//největší upravenou hodnotu

//Pravidla:

//čísla > 5
//sudé → *2
//liché → *3

const numbers = [3, 12, 7, 20, 5, 18, 1];

let max = -Infinity;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        let value;

        if (numbers[i] % 2 === 0) {
            value = numbers[i] * 2;
        } else {
            value = numbers[i] * 3;
        }

        if (value > max) {
            max = value;
        }
    }
}

console.log(max);