/*
BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

var markMass, jonhMass, markH, johnH;
markMass = 80;
jonhMass = 80;
markH = 1.8;
johnH = 1.0;

var bmi = function(mass, height) {
    return mass / (height * height);
}

mBMI = bmi(markMass, markH);
jBMI = bmi(jonhMass, johnH);
console.log(mBMI, jBMI);

var markBigger = mBMI > jBMI; 

console.log("Is Mark's BMI higher than John's? " + markBigger);