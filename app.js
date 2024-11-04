// use a template literal to say a greeting after player enters name let playerName = "name"; let greeting = `Dawning,`;
// let greeting = `Dawning, ${playerName}`

// create a function for the input of name and Age.*******
document.addEventListener("DOMContentLoaded", () => {
    let playerName = "";
    let flowerCount = 0;
//    Gettin the flower container element
    
const flowerContainer = document.getElementById('flower-Container');

    // Greeting function
    function greetingToPlayer() {
        console.log(`Hello Flowerchild ${playerName}`);
    }

    // Start Button execution
    document.getElementById('startButton').addEventListener('click', () => {
        playerName = document.getElementById('Name').value;
        greetingToPlayer();
        alert(`Hello Flowerchild ${playerName}! Start picking flowers.`);
    });
    const flowers = ['blurose.jpeg', 'rose.jpeg'];
    function pickFlower() {
        flowerContainer.innerHTML = '';
    }

    // Picking A Flower button event listener
    document.getElementById('pickFlower').addEventListener('click', () => {
        flowerCount++;
        document.getElementById('flowerCount').textContent = flowerCount;

        // Check if flowerCount is 5 to ask the question
        if (flowerCount === 5) {
            askQuestion();
        }

        // Check if flowerCount is 8 to display win message
        if (flowerCount === 8) {
            document.getElementById('winMessage').style.display = "block";

            // WE NEED TO STOP Now
            document.body.removedEventslistner("click", pickFlower);
            gameEnded = true;
        }
    });

    // Function to ask question
    function askQuestion() {
        let response = prompt("Have you hugged a tree before?");
        if (response && response.toLowerCase() === "no") {
            alert("Go ahead and pick a flower!");
        }
    }
});