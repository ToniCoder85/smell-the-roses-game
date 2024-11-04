// use a template literal to say a greeting after player enters name let playerName = "name"; let greeting = `Dawning,`;
// let greeting = `Dawning, ${playerName}`

// create a function for the input of name and Age.*******


let playerName = "";
let flowerCount = 0;
// greeting to player
  function greetingToPlayer() {
    console. log(`Hello Flowerchild ${playerName}`);
  }
//   Start Button execution
    document.getElementById('start button').addEventListener('click',() => {
        playerName = document.getElementById('Name').value;
        greetingToPlayer();
        alert(`Hello Flowerchild ${playerName}! Start picking flowers.`);
        });

//    greetingToPlayer();
    // let flowerCount = 0;

// Picking A Flower button event listner
document.getElementById('pickFlower').addEventListener('click',() => {
    flowerCount++; 

 document.getElementById('flowerCount').textContent = flowerCount;
    if (flowerCount ===12) {
    document.getElementById('winMessage').style.display = "block";
}
});

function askQuestion(){
    if (flowercount === 5) {
        let reponse = prompt("Have you  hugged a tree before?");
        if(Response.toLowercase() === "no") {
            alert("Go ahead and pick a flower!");
        }    }