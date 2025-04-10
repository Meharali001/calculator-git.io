let sign = '';
let result = [];  // We'll assume this array holds values for the calculation
let finalresult = 0;  // To store the calculated result

function addvalue(){
    result.reduce((acc,e)=>

  acc + parseFloat(e) ,0);
}

function clear() {

    
    // Clear the result and final result
    result = [];
    finalresult = 0;

    // Reset the display
    document.querySelector(".display").innerText = 0;  // Assuming your display element has class "display"
}

function clearvalue() {
    result = [];  // Reset the result array
    finalresult = 0;  // Reset the final result to zero
    
    // Reset the display
    document.querySelector(".display").innerText = 0;  // Assuming your display element has class "display"
}

function getsign(newvalue) {
  sign = newvalue;
  result.push(sign)

  

  // Get current display value from the result array
  let data = result.join("");

  // Append the sign to the current data string
  // data += sign;

  // Show it on the display
  document.querySelector(".display").innerText = data;


}


function calculate() {
  alert('Calculating: ' + sign);  


  if (sign == '+') {

    let remove = '+'
    let data = result.filter(value => value !== remove );
    finalresult = data.reduce((acc, e) => acc + parseFloat(e), 0);
    result = [];
    result.push(finalresult);
  } else if (sign == '-') {
    let remove = '-'
    let data = result.filter(value => value !== remove );
    finalresult = data.slice(1).reduce((acc, e) => acc - parseFloat(e), parseFloat(result[0]));
    result = [];
    result.push(finalresult);

    
    result = [];
    result.push(finalresult);

  } else if (sign == '*') {
    // Multiply numbers in the result array
    let remove = '*'
    let data = result.filter(value => value !== remove );
    
    finalresult = data.reduce((acc, e) => acc * parseFloat(e), 1);
    result = [];
    result.push(finalresult);

  } else if (sign == '/') {
    let remove = '/'
    let data = result.filter(value => value !== remove );
    // Division example
    finalresult = data.reduce((acc, e) => acc / parseFloat(e), result[0]);
    result = [];
    result.push(finalresult);

  } else {
    console.log('Empty or invalid operation');
    
  }

  // After calculation, display the result
  document.querySelector(".display").innerText = finalresult;
}
function getvalue(value) {
     // Add the value to the result array
  
    // Show the updated array in console
    console.log("Result Array:", result);
    if(result[0] !== 0){
    result.push(value); 

    }
  
    // Update display
    document.querySelector(".display").innerText = result.join("");
  }
  
