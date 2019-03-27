'use strict';

var mySport = prompt('Do you think that I play baseball?');
  if(mySport === 'No' || mySport === 'no' || mySport === 'NO'){
    alert('You are correct');
    console.log('user answered correctly with no')
  } else if ( mySport === 'yes' || mySport === 'Yes' || mySport === 'YES'){
    alert('Sorry, but that\'s incorrect');
    console.log('user chose incorrectly with yes');
  } else { 
    alert('please say YES or NO');
    console.log('user answered incorrectly')
    }

var smart = prompt('Do you think that I\'m smart?').toUpperCase();
  if(smart === 'YES' || 'Y'){
    alert('OH, why thank you. You are very perceptive');
    console.log('user answered correctly');
  } else{
    alert('Really? it\'s like that.')
    console.log('user answered incorrectly')
  }

var marine = prompt('Am I a Marine?').toLowerCase();
if(marine ==='yes' || marine === 'y'){
  alert('You are correct');
  console.log('user guessed right');
} else{
  alert('sorry, you are the weakest link')
  console.log('user guessed wrong');
}
