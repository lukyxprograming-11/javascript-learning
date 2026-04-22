// Úkol: najít největší číslo v poli
const numbers = [3, 7, 2, 9, 4];
let max = numbers[0]
for ( let i = 0  ; i < numbers.length; i++)

    {

        if ( numbers[i] > max )
        {max = numbers[i]}
           

}

 console.log(max);