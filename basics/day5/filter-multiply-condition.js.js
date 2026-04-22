//vytvoři pole, které obsahuje *čísla větší než 3, každé 2, a jen pokud je výsledek větší než 10

const numbers = [1, 4, 7, 2, 9, 6];
const result =  []

for(let i = 0; i < numbers.length; i++) {

    if(numbers[i] > 3){

        if (numbers[i] * 2 > 10){

            result.push(numbers[i] * 2)
        }
    }
}
console.log(result)