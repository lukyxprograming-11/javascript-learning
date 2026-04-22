//vytvoř nové pole, které obsahuje jen sudá čísla

const numbers = [3, 6, 1, 8, 5];
const result = []

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] % 2 === 0){
        result.push(numbers[i])
    }
        
}

console.log(result)
