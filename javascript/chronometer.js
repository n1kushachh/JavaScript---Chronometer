class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if(callback){
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000)
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000)
    }
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
  }

  getSeconds() {
    
    //convert currentTime to minutes
    let minutes = Math.floor(this.currentTime / 60);
    //convert currrentTime to seconds
    let seconds = this.currentTime - minutes * 60;
    return seconds
    
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let splitMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let splitSeconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${splitMinutes}:${splitSeconds}`
  }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
