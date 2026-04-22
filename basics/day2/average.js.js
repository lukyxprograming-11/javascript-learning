// Úkol:
// 1. vybrat čísla větší než 5
// 2. spočítat jejich počet (count)
// 3. spočítat jejich součet (sum)
// 4. vypočítat průměr (average)
// 5. ošetřit případ, kdy count = 0

const numbers = [3, 7, 2, 9, 4, 6, 8];
let count = 0 
let sum = 0
let average = 0
for (let i =0 ; i < numbers.length; i++) {

        if (numbers [i] > 5) {

                count = count + 1
                sum = sum + numbers[i]
        }

}

if (count > 0) {

             average = sum / count
        }

        else {
    console.log(0)
}
 

console.log(average)