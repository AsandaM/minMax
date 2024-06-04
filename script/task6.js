// min and max
let input = document.querySelector('input')
let button = document.querySelector('button')
let minVal = document.querySelectorAll('p')[1]
let maxVal = document.querySelectorAll('p')[2]



function findVal() {

    let inputValues = input.value.split(',').map(Number) // Split input by comma and convert to numbers
    
   // Used the spread operator to pass the array elements as individual arguments
    let maxN = Math.max(...inputValues) 
    let minN = Math.min(...inputValues)

    minVal.innerText += ' ' +  minN
    maxVal.innerText += ' ' + maxN
}

button.addEventListener('click', findVal)

