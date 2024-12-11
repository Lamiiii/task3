
//birinci usul

// const collection=(a,b)=>{
//  const firstNumber=Number(prompt("Ilk ededi daxil edin:"))
//  const secondNumber=Number(prompt("Ikinci ededi daxil edin:"))
// const operators=prompt("Herhansi operator daxil et('+', '-' ,'/', '*')")
    
// return firstNumber+secondNumber
// }

// console.log(collection());

// const multiplication=(a,b)=>{
// const firstNumber=Number(prompt("Ilk ededi daxil edin:"))
// const secondNumber=Number(prompt("Ikinci ededi daxil edin:"))
// const operators=prompt("Herhansi operator daxil et('+', '-' ,'/', '*')")    
// return firstNumber*secondNumber
// }

// console.log(multiplication());

// const division=(a,b)=>{
// const firstNumber=Number(prompt("Ilk ededi daxil edin:"))
// const secondNumber=Number(prompt("Ikinci ededi daxil edin:"))
// const operators=prompt("Herhansi operator daxil et('+', '-' ,'/', '*')")
    
// return firstNumber /secondNumber
// }

// console.log(division());

// const subrtaction=(a,b)=>{
// const firstNumber=Number(prompt("Ilk ededi daxil edin:"))
// const secondNumber=Number(prompt("Ikinci ededi daxil edin:"))
// const operators=prompt("Herhansi operator daxil et('+', '-' ,'/', '*')")
    
// return firstNumber-secondNumber
// }

// console.log(subrtaction());





//ikinci usul

// const firstNumber=Number(prompt("Ilk ededi daxil edin:"))
// const secondNumber=Number(prompt("Ikinci ededi daxil edin:"))
// const operators=prompt("Herhansi operator daxil et('+', '-' ,'/', '*')")


// const calculator=(a=0,b=0)=>{
//     if(operators==='+'){
//     return firstNumber+secondNumber
//     }else if(operators==='-'){
//     return firstNumber-secondNumber
//     }else if(operators==='*'){
//     return firstNumber*secondNumber
//     }else if(operators==='/'){
//     return firstNumber/secondNumber
//     }
// }

// console.log(calculator(firstNumber,secondNumber,operators));





//ucuncu usul


const firstNumber = Number(prompt("İlk ededi daxil edin:"));
const secondNumber = Number(prompt("İkinci ededi daxil edin:"));
const operator = prompt("Herhansi operator daxil et('+', '-', '/', '*')");

const toCalculateFunc=(operator)=>{
    switch (operator) {
        case '+':
        return firstNumber+secondNumber
         break;
         case '-':
        return firstNumber-secondNumber
        break;
        case '*':
        return firstNumber*secondNumber
         break;
         case '/':
         return firstNumber/secondNumber
        break;
        default:
       console.log("Bu emeliyyat yoxdur");
       
    }
}

console.log(toCalculateFunc(operator));

