/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

*/
var getRandom = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var Question = {
    addQuestion: function (question, ans0, ans1, ans2, numOfCorrectAns) {
        var q = {}
        var answers = {}
        q.question = question;
        answers[0] = ans0;
        answers[1] = ans1;
        answers[2] = ans2;
        q.ansCorrect = numOfCorrectAns;
        q.answers = answers;
        return q
    },

    printRandomQuestion : function(arrayOfQs) {
        var qNum = getRandom(arrayOfQs.length);
        return arrayOfQs[qNum];
    }, 

    checkUserAnswer : function(userAnswer) {
        if (parseInt(userAnswer) == q.ansCorrect) { 
        alert("Senya you are right!");
        } else {
            alert("Wrong answer!");
        }
    }
}

var lifeIsGood = Question.addQuestion("Life is good?", "yes", "no", "get off", 0)
var jypsyIsTheBest = Question.addQuestion("Jypsy is the best poodle in the world?", "who is this?", "my cat is better", "YES!!!", 2)
var mamaCanCode = Question.addQuestion("Can my mama code?", "mama can only sleep", "I don't have mama", "of course", 2);
var senyaCanRead = Question.addQuestion("Can Senya read?", "no, he is a baby", "yes, he can!", "he also can read in Spanish", 1)
/*
2. Create a couple of questions using the constructor

3. Store them all inside an array

*/
var qs = []; 
qs.push(lifeIsGood); 
//qs.push(jypsyIsTheBest);
qs.push(mamaCanCode);
qs.push(senyaCanRead);
//console.log(qs);
//console.log(Question.printRandomQuestion(qs))
var q = Question.printRandomQuestion(qs);
/*

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
*/
var userAnswer = prompt(q.question + JSON.stringify(q.answers));
Question.checkUserAnswer(userAnswer);

/*

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/