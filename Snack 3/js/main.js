console.log("Let's see how many arrays you decided to generate:")
const n = parseInt(prompt("How many arrays you want to generate?"))
//This external cycle will generate as many arrays as the user declares.
for (let i = 1; i <= n; i++) {
  console.log("Let's print the array number:" + " " + i);
  const container = [];
  //This internal cycle will generate the 10 numbers inside the arrays
  //The numbers will be generated from 1 to 100
  for (let x = 0; x < 10; x++) {
    const r = Math.floor(Math.random() * 100) + 1;
    //Pushing every generated number into the array that we're currently generating
    //with the external cycle.
    container.push(r);
  }
  //Let's stamp the arrays every time the internal cycle is done.
  console.log(container);
}
console.log("Congratz, you generated" + " " + n + " " + "arrays!")
