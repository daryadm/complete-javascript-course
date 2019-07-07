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
/*
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
*/
/*
*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
let john = {
    bills: [124, 48, 268, 180, 42],
    tip : function (bills) {
        this.tips = [];
        this.totals = [];
        for (let i = 0; i < this.bills.length; i++) {
            let percent;
            let bill = this.bills[i];
               if (bill < 50) {
                percent = 0.2;
               } else if (bill >= 50 && bill < 200) {
                   percent = 0.15;
               } else {
                percent = 0.1;
               }
            this.tips.push(Math.round(bill * percent,1));
            this.totals.push(bill + bill * percent);
        };
    return this.tips, this.totals;
    },
    
};


johnTips = john.tip();

aveTips = function(tipsarray) {
    let sumTips = 0
    for (let i = 0; i < tipsarray.length; i++) {
        sumTips = sumTips + tipsarray[i];
    };
    console.log("Tips average = " + sumTips/tipsarray.length);
    return sumTips/tipsarray.length;
};
aveJohn = aveTips(john.tips);
console.log(aveJohn);
