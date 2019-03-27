'use strict';

var userInput = " ";
//Arrays set for the yes/no awnsers, questions and their responses
var yesResponse = ['yes', 'YES', 'Yes', 'y'];
var noResponse = ['no','NO', 'No', 'n'];
var questions = [
  'Hello, do you want to play a game?',
  'Do you think that I play baseball?',
  'Do you think that I am smart?',
  'Do you think that I am a Marine?',
  'Is it true that I own 3 dogs?',
  'Do you think that I am a great cook?',
  'What is my number in Rugby?',
  'What countries have I visited?'
]
console.log(questions)
var answers = [
'true',
'false',
'true',
'true',
'false',
'true',
'4',
['Colombia','Japan']
];
console.log(answers)

// var guessGame = prompt('Hello, do you want to play a game?');
// if(guessGame === 'Yes' || guessGame === 'yes' || guessGame === 'YES'){
//   alert('Cool, let\'s play.');
//   console.log('user answered correctly with yes');
// } else if ( guessGame === 'no' || guessGame === 'No' || guessGame === 'NO'){
//   alert('OK, well, we\'re going to play anyway.');
//   console.log('user chose incorrectly with no');
// } else { 
//   alert('please say YES or NO');
//   console.log('user answered incorrectly');
//   }

var mySport = prompt('Do you think that I play baseball?');
  if(mySport === 'No' || mySport === 'no' || mySport === 'NO'){
    alert('You are correct');
    console.log('user answered correctly with no');
  } else if ( mySport === 'yes' || mySport === 'Yes' || mySport === 'YES'){
    alert('Sorry, but that\'s incorrect');
    console.log('user chose incorrectly with yes');
  } else{ 
    alert('please say YES or NO');
    console.log('user answered incorrectly');
    }

var smart = prompt('Do you think that I\'m smart?').toUpperCase();
  if(smart === 'YES' || smart === 'Y'){
    alert('OH, why thank you. You are very perceptive');
    console.log('user answered correctly');
  } else{
    alert("Really? it\'s like that.");
    console.log('user answered incorrectly');
  }

var marine = prompt(' Do you think that I am a Marine?').toLowerCase();
  if(marine === 'yes' || marine === 'y'){
    alert('Is that why you guessed I wasn\'t smart?');
    console.log('user guessed right');
  } else{
    alert('sorry, you are the weakest link');
    console.log('user guessed wrong');
  }

var dogs = prompt('Do you think that I own dogs?').toLowerCase();
  if(dogs === 'yes' || dogs ==='y'){
    alert('I do have dogs!');
    console.log('user guessed correctly that I have dogs')
  } else{
    alert('sorry, I have two dogs');
    console.log('user guessed incorrectly that I had no dogs')
  }

var singer = prompt('Do you think I can sing?').toLowerCase();
  if(singer === 'no' || singer === 'n'){
    alert('Yeah, I can\'t sing at all.');
    console.log('user guessed correctly that I can not sing');
  } else {
    alert('Sorry to disappoint you.');
    console.log('user guessed incorrectly that I could sing');
  }

  //recieved guidance and collaborated with Tim Busch, Chaitanya Narukulla, David Marchante