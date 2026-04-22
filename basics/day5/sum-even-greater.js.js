//součet čísel větších než 3 a zároveň sudých

const numbers = [3, 7, 4, 8, 2];
let sum = 0 

for(let i = 0; i < numbers.length; i++) {

    if(numbers[i] > 3 && numbers[i] % 2 === 0){
        sum = sum + numbers[i]
    }
}

console.log(sum) 