
// -------- Question 01 -------

document.write("<h4> Question 01 </h4>")
let positiveNum = +prompt("Q 1: Enter a positive floating point number");
let roundNum = Math.round(positiveNum);
let floorNum = Math.floor(positiveNum);
let ceilNum = Math.ceil(positiveNum);


document.write("Number: " + positiveNum + "<br> Round Off Value: " + roundNum + "<br> Floor Value: " + floorNum + "<br> Ceil Value: " + ceilNum);

document.write("<br><br>");



// -------- Question 02 -------

document.write("<h4> Question 02 </h4>")
let negativeNum = +prompt("Q 2: Enter a negative floating point number");
let roundNeg = Math.round(negativeNum);
let floorNeg = Math.floor(negativeNum);
let ceilNeg = Math.ceil(negativeNum);

document.write("Number: " + negativeNum + "<br> Round Off Value: " + roundNeg + "<br> Floor Value: " + floorNeg + "<br> Ceil Value: " + ceilNeg);


// -------- Question 03 -------

document.write("<h4> Question 03 </h4>")

let negAbsNum = +prompt("Q 3: Enter a negative number");
let absNum = Math.abs(negAbsNum);

document.write("The absolute value of " + negAbsNum + " is " + absNum);

document.write("<br><br>");



// -------- Question 04 -------

document.write("<h4> Question 04 </h4>")

let dice = Math.ceil(Math.random()*6);

document.write("Random Dice Value: " + dice);

document.write("<br><br>");



// -------- Question 05 -------

document.write("<h4> Question 05 </h4>")

let toss = Math.round(Math.random()*1+1);

if (toss == 1) {
  document.write(toss+ " Random coin value: Heads");
} else {
  document.write(toss + " Random coin value: Tails");
}

document.write("<br><br>");

  

// -------- Question 06 -------

document.write("<h4> Question 06 </h4>")

let rand1to100 = Math.round(Math.random()*100);

document.write("Random number between 1 & 100: " + rand1to100);

document.write("<br><br>");



// -------- Question 07 -------

document.write("<h4> Question 07 </h4>");

let weight= prompt("Enter your weight");

let parse = parseFloat(weight);

document.write("Your weight is " + parse + " Kilograms");

document.write("<br> <br>");


// -------- Question 08 -------

document.write("<h4> Question 08 </h4>")

let rand1to10 = Math.round(Math.random()*10);

let guess = +prompt("Guess a number between 1 & 10");

if (guess == rand1to10) {
  document.write("You guessed the number!" + rand1to10);
} else {
  document.write("Try again!. The number was " + rand1to10);
}

document.write("<br><br>");

