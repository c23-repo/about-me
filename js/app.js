'use strict';

// Array bank for questions, answers, and responses
var yesResponseArray = ['yes', 'y', 'true', 't'];
var noResponseArray = ['no', 'n', 'false', 'f'];
var answersArray = [false, false, true, false, true, '4', countriesArray];
var countriesArray = ['colombia', 'japan', 'afghanistan'];
var questionsArray = [', do you think that I play baseball?', ', do you think that I own a car?', ', do you think that I am a Marine?', ', do you think that I own dogs?', ', do you think I can cook?', ' Can you guess my Jersey number in rugby? (you only get 3 guesses)', 'Can you guess what countries I have been to?'];
var userAnswer= [];
var questionsTracker = 0;
var correctAmnt = 0;
var incorrectAmnt = 0;

function checkAnswer(userAnswer) {
  if (yesResponseArray.includes(userAnswer.toLowerCase())) {
    console.log('Input equates to true');
    return true;
  } else if (noResponseArray.includes(userAnswer.toLowerCase())) {
    console.log('Input equates to false');
    return false;
  } else {
    console.log('Unrecognized');
    return userAnswer;
  }
}



var userName = prompt('Hello, what is your name?');
console.log('user input name');

//For loop set to ask questions

for (var i = 0; i < questionsArray.length; i++) {
  // Local variables
  var limit = 3;
  var limitOconnus = 6;
  var guesses = 1;
  var oconnusGuess = 1;

  userAnswer[i] = prompt(userName + questionsArray[i]);

  //Guess Jersey number
  if(questionsArray[i] === questionsArray[5]){
    // new variable since not reading the array index properly
    var question5 = 4;
    var userNumber = '';

    // Help the user with to high/low and check if correct
    while(userNumber.toString() !== question5.toString() && guesses < limit){
      userNumber = prompt('Sorry ' + hotCold(userNumber) + ', you have ' + (limit - guesses) + ' guesses left');
      guesses++;
    } console.log(guesses);
    if(userNumber.toString() === question5.toString()){
      alert( 'You are correct!');
      correctAmnt++;
    } else{
      incorrectAmnt++;
    }
    // Guess which country
  } /*else if( questionsArray[i] === questionsArray[6]){

      while(userAnswer !== questionsArray[6] && oconnusGuess < limitOconnus){

      }*/
}



function hotCold(userNumber){
  if(userNumber < 4){
    alert('number is to low');
  } else if(userNumber > 4){
    alert('number is to high');
  }
  return userNumber;
}
/*
var limitOconnus = 6;
var countries = ['colombia', 'japan', 'afghanistan'];

var score = 0;
var userInput = '';
while (userInput !== countries && guesses < limitOconnus) {
  userInput = prompt(questionsArray[6]).toLowerCase();
  guesses++;
  score++;
} alert('All the possible answers were Colombia, Japan, and Afghanistan. You got ' + score + ' out of 3 countries.');
console.log(userInput);


//recieved guidance and/or collaborated with Paula Thomas, Tim Busch, Chaitanya Narukulla, David Marchante, Liz Mahoney*/
