//Snack 1
//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
//la somma degli elementi è minore di 50.

console.log("Here they are below the numbers you have chosen:")
const container = [];
let sum = 0;
//
while (sum < 50) {
  const n = parseInt(prompt("Insert a number:"));
  container.push(n);
  sum += n;
  console.log(sum);
  console.log("Pushed number:" + " " + n);
  console.log(container);
}

//If sum > 50
if (sum > 50) {
  console.log("Your sum is > 50" + ", " + "which is " + sum)
  const sub = sum - 50;
  //Let's substract the difference from the sum
  console.log("Let's substract the difference from the sum:" + " " + sum + "-" + sub);
  console.log("Your sum is now:" + " " + (sum - sub));
}



