const numbers = [3, 7, 2, 9, 4, 6, 8, 1, 10];
const result = []
let count = 0 
let sum = 0 
let max = 0 

for (let i = 0  ; i < numbers.length; i++) {

            if (numbers[i] > 3 && numbers[i] < 9 ) {
                result.push(numbers [i])
                count = count +1 
                  sum = sum + numbers [i]

                  if (count === 1 )
                        max = numbers [i]
                    else {

                        if ( numbers [i] > max)
                                
                            {max = numbers[i]}
                    }

} 
}

            console.log(result)
            console.log(count)
            console.log(sum)
            console.log(max)