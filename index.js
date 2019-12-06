// Variables
var happyFaceBtn = document.querySelector('.happy');
var sillyFaceBtn = document.querySelector('.silly');
var cryingFaceBtn = document.querySelector('.crying');
var message = document.querySelector('.message');
var lastRandNum = null;
var randNumber = null;

// Event Listeners
happyFaceBtn.addEventListener('click', happyFace);
sillyFaceBtn.addEventListener('click', sillyFace);
cryingFaceBtn.addEventListener('click', cryingFace);

// Functions
function happyFace() {
  var prompts = ['YAY!', 'You go!', 'Your smile just cheered me up.'];

  // Display previous random number.
  console.log(`last random number : ${lastRandNum}`);
  // Set Random number.
  randNumber = randNum(3);

  console.log(`New random number : ${randNumber}`);

  while(randNumber == lastRandNum) {
    console.log('generating new random number....');
    randNumber = randNum(3);
  }
  console.log(`Used random number : ${randNumber}`);
  // Set diff random number to index of prompt
  message.innerHTML = prompts[randNumber];

  // Reassign the random number used to lastRandNum
  lastRandNum = randNumber;
  console.log(`New last random number : ${lastRandNum}`);
}

function sillyFace() {
  var prompts = ['Me too.', 'Sounds... good?', 'Ok!', 'Interesting response'];

  // Set Random number.
  randNumber = randNum(4);

  while(randNumber == lastRandNum) {
    randNumber = randNum(4);
  }

  // Set diff random number to index of prompt
  message.innerHTML = prompts[randNumber];
  // Reassign the random number used to lastRandNum
  lastRandNum = randNumber;
}

function cryingFace() {
  var prompts = ['What can I do?', 'Keep your head up.', 'Do you want to talk?', 'We can cry together!'];

  // Set Random number.
  randNumber = randNum(4);

  while(randNumber == lastRandNum) {
    randNumber = randNum(4);
  }

  // Set diff random number to index of prompt
  message.innerHTML = prompts[randNumber];

  // Reassign the random number used to lastRandNum
  lastRandNum = randNumber;
}

function randNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
