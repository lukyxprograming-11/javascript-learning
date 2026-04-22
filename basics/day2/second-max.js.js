// Úkol:
// 1. projít pole čísel (for cyklus)
// 2. vytvořit proměnné pro:
//    - největší číslo (max)
//    - druhé největší číslo (secondMax)
// 3. pro každé číslo:
//    - pokud je větší než max:
//         → posunout max do secondMax
//         → nastavit nové max
//    - jinak pokud je větší než secondMax:
//         → nastavit secondMax
// 4. na konci vypsat secondMax



const numbers = [3, 7, 2, 9, 4, 6, 8];
let max = numbers[0]
let secondMax = numbers[0]

 for (let i = 0 ; i < numbers.length; i++)
     {
        if(numbers[i] > max) {

             secondMax =  max
            max = numbers [i] 
        } else if (numbers[i] > secondMax && numbers[i]!= max) {
            secondMax = numbers[i]

        }
}

console.log(secondMax)