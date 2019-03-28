'use strict';

var userName = prompt('Hello, what is your name?');
console.log( 'user input name')

var mySport = prompt(userName+', do you think that I play baseball?').toLowerCase();
  if(mySport === 'n' || mySport === 'no'){
    alert('You are correct');
    console.log('user answered correctly with no');
  } else if ( mySport === 'yes' || mySport === 'Yes' || mySport === 'YES'){
    alert('You are incorrect');
    console.log('user chose incorrectly with yes');
  } else{ 
    alert('please say YES or NO');
    console.log('user answered incorrectly');
    }

var car = prompt(userName+', do you think that I own a car?').toUpperCase();
  if(car === 'NO' || car === 'N'){
    alert('You are correct');
    console.log('user answered correctly');
  } else{
    alert("You are incorrect.");
    console.log('user answered incorrectly');
  }

var marine = prompt(userName+', do you think that I am a Marine?').toLowerCase();
  if(marine === 'yes' || marine === 'y'){
    alert('You are correct');
    console.log('user guessed right');
  } else{
    alert('You are incorrect.');
    console.log('user guessed wrong');
  }

var dogs = prompt(userName+', do you think that I own dogs?').toLowerCase();
  if(dogs === 'yes' || dogs ==='y'){
    alert('You are correct');
    console.log('user guessed correctly that I have dogs')
  } else if(dogs === 'no' || dogs === 'n'){
    alert('You are incorrect.');
    console.log('user guessed incorrectly that I had no dogs')
  } else 

var cook = prompt(userName+', do you think I can cook?').toLowerCase();
  if(cook === 'yes' || cook === 'y'){
    alert('You are correct');
    console.log('user guessed correctly that I can not sing');
  } else {
    alert('You are incorrect.');
    console.log('user guessed incorrectly that I could sing');
  }
var jerseyNum = '';
var limit=3;
var guesses=0
  while(jerseyNum !== '4' && guesses<limit){
    jerseyNum=prompt('Can you guess my Jersey number in rugby?');
    guesses++;
  } console.log('user guessed jersey number');

  var limitOconnus=6
  var countries = ['colombia','japan', 'afghanistan'];
  
  var score=0;
  var userInput='';
      while(userInput !== countries && guesses<limitOconnus){
        userInput= prompt('Can you guess what countries I have been to?').toLowerCase()
        guesses++;
        score++;
      }alert('All the possible answers were Colombia, Japan, and Afghanistan. You got ' + score + ' out of 3 countries.');
     console.log( userInput);


//recieved guidance and collaborated with Tim Busch, Chaitanya Narukulla, David Marchante