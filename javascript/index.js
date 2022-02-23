const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  //chronometer minutes
  let cMinute = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = cMinute[0];
  minUniElement.innerHTML = cMinute[1];
}

function printSeconds() {
  //chronometer seconds
  let cSecond = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = cSecond[0];
  secUniElement.innerHTML = cSecond[1];
  return cSecond
}

// ==> BONUS
function printMilliseconds() {
  let cMillisecond = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  console.log(cMillisecond * 1000)
}


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if(btnLeftElement.className == "btn start"){
    chronometer.start();
    btnLeftElement.className = "btn stop";
    btnLeftElement.innerHTML = "STOP";
    btnRightElement.innerHTML = "SPLIT";
    btnRightElement.className = "btn split";
    setInterval(printSeconds, 1000);
    setInterval(printMinutes, 1000);
    setInterval(printMilliseconds, 1000)
    
  

  } else if(btnLeftElement.className == "btn stop"){
    chronometer.stop();
    chronometer.reset();
    while (splitsElement.hasChildNodes()) {
      splitsElement.removeChild(splitsElement.firstChild);
    }
    btnLeftElement.className = "btn start";
    btnLeftElement.innerHTML = "START";
    btnRightElement.innerHTML = "RESET";
    btnRightElement.className = "btn reset";
  }
  
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className == "btn split"){
    splitsElement.appendChild(document.createElement("li"))
    if(splitsElement.childNodes.length == 1){
      splitsElement.childNodes[0].innerHTML = chronometer.split()
    } else {
      splitsElement.childNodes[splitsElement.childNodes.length-1].innerHTML = chronometer.split()
    }
   
    
  }
});
