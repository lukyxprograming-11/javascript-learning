//Projít pole a vytvořit:

//nové pole (result)
//jen čísla větší než 5
//každé číslo:
//pokud je *sudé → 2
//pokud je *liché → 3
//zároveň spočítat součet těch upravených čísel

const numbers = [3, 12, 7, 20, 5, 18, 1];
const result = [];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        let value;

        if (numbers[i] % 2 === 0) {
            value = numbers[i] * 2;
        } else {
            value = numbers[i] * 3;
        }

        result.push(value);
        sum += value;
    }
}

console.log(result);
console.log(sum);