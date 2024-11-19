<script>let randomInt = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let makeSecret = () => {
  let digit0 = randomInt(1, 9);
  let digit1 = randomInt(1, 9);
  let digit2 = randomInt(1, 9);
  while(digit0 == digit1 || digit0 == digit2 || digit2 == digit1){
    digit0 = randomInt(1, 9);
    digit1 = randomInt(1, 9);
    digit2 = randomInt(1, 9);
  }
  let secret = [digit0,  digit1,  digit2];
  return secret;
}
let retrieveGuess = () => {
  let guess = ''
  while (guess.length != 3){
    guess = prompt("Please make a 3-digit guess!");
  }
  guess = guess.split("");
  return guess;
}
let calculateFeedback = (secret, guess) => {
  let index = 0;
  let feedback = '';
  let hitIndexes = [];
  while(index < guess.length){
    if(guess[index] == secret[index]){
      feedback += '+';
      hitIndexes.push(index);
    }
    index ++
  }
  let index1 = 0;
  while(index1 < guess.length){
    let index2 = 0;
    while (index2 < secret.length){
      if(guess[index1] == secret[index2] && index1 != index2 && !hitIndexes.includes(index2) ){
        feedback += '-'
        hitIndexes.push(index2);
        break;
      }
      index2++;
    }
    index1++;
  }
  return feedback;
}
let game = () => {
  let player = prompt("Please tell me your name");
  let secret = makeSecret();
  let guess = retrieveGuess();
  let steps = 1;
  let feedback = calculateFeedback(secret, guess);
  while(feedback != "+++") {
    if (feedback.length == 0) {
      alert("Feedback for your input: no correct digit");
    } else if (feedback != "+++") {
      alert("Feedback for your input is "+ feedback);
    }
    guess = retrieveGuess();
    steps++;
    feedback = calculateFeedback(secret, guess);
  }
  alert("Congrats "+ player +", You WIN! Total attempts: "+steps+ " Secret is "+secret[0]+secret[1]+secret[2]);
}
</script>
