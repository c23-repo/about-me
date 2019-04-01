'use strict';

// Array bank for questions, answers, and responses
var yesResponseArray = ['yes', 'y', 'true', 't'];
var noResponseArray = ['no', 'n', 'false', 'f'];
var answersArray = [false, false, true, true, true, '4', countriesArray];
var countriesArray = ['colombia', 'japan', 'afghanistan'];
var questionsArray = [', do you think that I play baseball?', ', do you think that I own a car?', ', do you think that I am a Marine?', ', do you think that I own dogs?', ', do you think I can cook?', ' Can you guess my Jersey number in rugby? (you only get 3 guesses)', 'Can you guess what countries I have been to?'];
var userAnswer= [];
var correctAmnt = 0;


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

    // Help the user with to high/low and check if correct
    while(userAnswer[5] !== answersArray[5] && guesses < limit){
      userAnswer[5] = prompt(hotCold(userAnswer[5]) + 'is incorrect, you have ' + (limit - guesses) + ' guesses left');
      guesses++;
    } console.log(guesses);
    if(userAnswer[5] === answersArray[5]){
      correctAmnt++;
    } else{
      console.log(userAnswer[5]);
    }
    // Guess which country
  } else if( questionsArray[i] === questionsArray[6]){
    while(!countriesArray.includes(userAnswer[6].toString().toLowerCase()) && oconnusGuess < limitOconnus){
      userAnswer[6] = prompt('Incorrect, choose another country. You have ' + (limitOconnus - oconnusGuess) + ' guesses left.');
      oconnusGuess++;
    }
    if(countriesArray.includes(userAnswer[6].toString().toLowerCase())){
      correctAmnt++;
    } else{
      console.log(userAnswer[6]);
    }
  }
  if(answersArray[i] === checkAnswer(userAnswer[i])){
    alert('You are correct!');
    correctAmnt++;
  }else{
    alert('You are incorrect.');
  }
}
alert('You got ' + correctAmnt + ' out of ' + questionsArray.length + ' questions. Thank you for playing.');

// check answers from the arrays
function checkAnswer(userAnswer) {
  if (yesResponseArray.includes(userAnswer.toLowerCase())) {
    console.log('Input equates to true');
    return true;
  } else if (noResponseArray.includes(userAnswer.toLowerCase())) {
    console.log('Input equates to false');
    return false;
  } else {
    console.log('Unrecognized');
  }
  return userAnswer;
}
// helps the user guess number
function hotCold(userAnswer){
  if(userAnswer < 4){
    alert('number is to low');
  } else if(userAnswer > 4){
    alert('number is to high');
  }
  return userAnswer;
}

/*recieved guidance and/or collaborated with Paula Thomas, Tim Busch, Chaitanya Narukulla, David Marchante, Liz Mahoney.*/
