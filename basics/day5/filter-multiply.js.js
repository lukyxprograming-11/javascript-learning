//vytvořit pole, které obsahuje: čísla větší než 3, každé vynásobené 2

const numbers = [1, 4, 7, 2, 9];
const result = []


for(let i = 0 ; i < numbers.length; i++){

    if(numbers[i] > 3){
        result.push(numbers[i] * 2)

    }
}

console.log(result)
