//funkce:

//vrátí true, pokud je číslo sudé
//jinak false



function isEven(num){
    
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
    
}



function transformNumber (num){

    if(isEven(num)){
        return num * 2 
    }else {
        return num * 3 
    }
}


function processNumbers(arr){

    const result = [];
    

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > 5){

            let value = transformNumber(arr[i])
            result.push(value)
        }
    }
    return result;
}





//funkce:

//vezme pole čísel a vrátí:

//result → pole upravených hodnot (> 5, transformované)
//sum → součet těch hodnot
//count → kolik jich je


function analyzeNumbers(arr, limit = 5, transformFn){
    const result = [];
    let sum = 0
    let count = 0 
    let average = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > limit){
            let value = transformFn(arr[i])
            result.push(value)
            sum = sum + value
            count++
        }
    }


     if(count === 0){
            average = 0;
    }else {
        average = sum / count
   }

    return { result, sum, count, average };
}


 const data = analyzeNumbers([3, 12, 7], transformNumber);
 
console.log(data.average);


function triple(num) {
    return num * 3;
}

const data2 = analyzeNumbers([3, 12, 7], 5, triple);

console.log(data2.result);

