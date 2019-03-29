'use strict';

var yesResponseArray = ['yes', 'y','true','t'];
var noResponseArray = ['no', 'n', 'false','f'];
var answersArray = [false, true, true, false, true, '4',  countriesArray];
var countriesArray = ['colombia', 'japan', 'afghanistan'];
var questionsArray = [', do you think that I play baseball?', ', do you think that I own a car?', ', do you think that I am a Marine?', ', do you think that I own dogs?', ', do you think I can cook?','Can you guess my Jersey number in rugby?','Can you guess what countries I have been to?']

function checkAnswer (answer) {
  if(yesResponseArray.includes(answer.toLowerCase())){
    console.log('Input equates to true');
    return true;
  } else if(noResponseArray.includes(answer.toLowerCase())){
    console.log('Input equates to false');
    return false;
  } else {
    console.log('Unrecognized');
    return answer;
  }

}  



var userName = prompt('Hello, what is your name?');
console.log( 'user input name')

for (var i = 0; i < questionsArray.length; i++){
  var userAnswer = prompt(userName + questionsArray[i]);
  if(answersArray[i] === checkAnswer(userAnswer)){
    console.log('User answered correctly');
    alert('You are correct.');
  } else {
    alert('You are incorrect.');
  }
}


var jerseyNum = '';
var limit=3;
var guesses=0
  while(jerseyNum !== '4' && guesses<limit){
    jerseyNum=prompt(questionsArray[5]);
    guesses++;
  } console.log('user guessed jersey number');

  var limitOconnus=6
  var countries = ['colombia','japan', 'afghanistan'];
  
  var score=0;
  var userInput='';
      while(userInput !== countries && guesses<limitOconnus){
        userInput= prompt(questionsArray[6]).toLowerCase()
        guesses++;
        score++;
      }alert('All the possible answers were Colombia, Japan, and Afghanistan. You got ' + score + ' out of 3 countries.');
     console.log( userInput);

   

//recieved guidance and collaborated with Paula Thomas, Tim Busch, Chaitanya Narukulla, David Marchante