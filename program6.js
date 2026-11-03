//Creating the array with the number
let inputNumber=[10, 20, 10, 30, 20, 40, 10]

//sorting the array with sort() method
inputNumber.sort((a,b)=>a-b);

//traversing the array using the loop
for(let i = 0; i < inputNumber.length; i++){

   if (inputNumber[i]===inputNumber[i+1] && (inputNumber[i]!==inputNumber[i+1]))
    {
   console.log(inputNumber[i]);
   }
    
}
