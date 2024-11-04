// use a template literal to say a greeting after player enters name let playerName = "name"; let greeting = `Dawning,`;
// let greeting = `Dawning, ${playerName}`

// create a function for the input of name and Age.*******


let playerName = "";
let flowerCount = 0;
// greeting to player
  function greetingToPlayer() {
    console. log(`Hello Flowerchild ${playerName}`);
  }
// Start Button execution
document.getElementById('startButton').addEventListener('click', () => {
    playerName = document.getElementById('Name').value;
    greetingToPlayer();
    alert(`Hello Flowerchild ${playerName}! Start picking flowers.`);
});

// Picking A Flower button event listener
document.getElementById('pickFlower').addEventListener('click', () => {
    flowerCount++;
    document.getElementById('flowerCount').textContent = flowerCount;

    // Check if flowerCount is 5 to ask the question
    if (flowerCount === 5) {
        askQuestion();
    }