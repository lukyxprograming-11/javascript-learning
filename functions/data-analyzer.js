//Data Analyzer s funkcí 

// V jednom průchodu zjistit:

// pole čísel větších než 5
// pole upravených hodnot:
// sudé → *2
// liché → *3
// součet upravených hodnot
// počet těchto čísel
// max upravená hodnota
// min upravená hodnota
// průměr upravených hodnot

const numbers = [3, 12, 7, 20, 5, 18, 1, 25, 30, 2];
const result = [];

let count = 0;
let sum = 0;
let max = -Infinity;
let min = Infinity;
let average = 0;

// transformace čísla
function transformNumber(num) {
    if (num % 2 === 0) {
        return num * 2;
    } else {
        return num * 3;
    }
}

// hlavní logika
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        const value = transformNumber(numbers[i]);

        result.push(value);
        count++;
        sum += value;

        if (value > max) max = value;
        if (value < min) min = value;
    }
}

// výpočet průměru
if (count > 0) {
    average = sum / count;
} else {
    average = 0;
}

// výpis
console.log(result);
console.log(count);
console.log(sum);
console.log(max);
console.log(min);
console.log(average);