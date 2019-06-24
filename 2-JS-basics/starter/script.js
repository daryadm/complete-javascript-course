/*
BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/
/*
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
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
let john = {
    fullName : "John",
    mass : 90,
    height : 1.80,
    calcBMI : function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    } 
};
john.calcBMI();

let mark = {
    fullName : "Mark",
    massKG: 80,
    heighCM: 180,
    calcBMI: function (){
        this.BMI = this.massKG/ this.heighCM * this.heighCM
        return this.BMI
    }  
};
mark.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(mark.fullName +"'s " + "("+ mark.BMI + ") BMI is larger than " + john.fullName + "'s")
}
else if (john.BMI > mark.BMI) {
    console.log(john.fullName +"'s " + "("+ john.BMI + ") BMI is larger than " + mark.fullName + "'s")
}
else {
    console.log("same")
}

