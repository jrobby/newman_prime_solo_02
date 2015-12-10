// I realized there was something wrong with Bonus.
// And that what was wrong with bonus had to do with 
//getBaseSTI or with reviewScore.
///Then I did some other stuff. 

// ! ! !
// Three Bugs

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'


for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);

 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }

  return basePercent;
}

function calculateSTI(array1){
  var newArray = [];

  newArray[0] = array1[0];

  var employeeNumber = array1[1];
  //console.log('employee number ' + employeeNumber)
  var baseSalary = array1[2];
 //console.log('baseSalary ' + baseSalary)
  var reviewScore = array1[3];

  // console.log('review score ' + reviewScore)

// console.log(array1);
// console.log('getBaseSTI ' + getBaseSTI(Number(reviewScore)));
  
  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);


// console.log(newArray[0]);
// console.log(newArray[1]);
//   console.log(newArray[2]);
//   console.log(newArray[3]);

  console.log(newArray[0] + "  " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  
  return newArray;
}



function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}




function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}

// console.log('getincomeadjust 65001' + getIncomeAdjustment(65001));
// console.log('getYearAdjustment 4 digits' + getYearAdjustment('4444'));
// console.log('getYearAdjustment not 4 digits ' + getYearAdjustment('44'));