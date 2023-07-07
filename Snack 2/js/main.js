const numbers = [];
console.log("Let's generate the numbers and push them in the array:")
for (let n = 0; n < 20; n++) {
  //Let's generate a random number between 1 and 50 
  const randomNumber = Math.floor(Math.random() * 50) + 1;
  //Let's see which one it is
  console.log(randomNumber);
  //Let's push it in the array
  numbers.push(randomNumber);
  //Let's see if they get pushed in the array:
  console.log("It got pushed in the array:")
  console.log(numbers);
  //Now, what I want is:
  if (randomNumber % 2 === 0) { //If the number is an even number
    //Let's put it in the div with "even" id. It will have a GREEN colour.
    document.getElementById("even").innerHTML += ` ${randomNumber}; `;
  } else if (randomNumber % 2 !== 0) { //else if the number is an odd one
    //Let's pèut it in the div with "odd" id. It will have a RED colour.
    document.getElementById("odd").innerHTML += ` ${randomNumber}; `;
  }
}
console.log("We now have an array with 20 random numbers freshly generated:");
console.log(numbers);
console.log("What we wanted was to put the odd numbers in a div and the even numbers in another.")
console.log("So I did what was requested and now they're printed in the html with their colours.")

