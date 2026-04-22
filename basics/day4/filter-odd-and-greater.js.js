//čísla větší než 3 a zároveň lichá
const numbers = [2, 5, 8, 1, 9, 4];
const result = []

for(let i = 0 ; i < numbers.length; i++){

    if(numbers[i] > 3 && numbers[i] % 2 === 1 ){
        result.push(numbers[i])
    }
}
console.log(result)