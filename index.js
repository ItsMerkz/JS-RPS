const prompt = require("prompt-sync")();

function random_item(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function airesult() {
    var ai = ["Rock", "Paper", "Scissors"]
    return random_item(ai)
}

function rps() {
    const userinp = prompt("Rock / Paper / Scissors: ")
    let res = airesult()
    console.log(`You: ${userinp} | AI: ${res}`)
    if(userinp === "Rock" && res === "Paper") {
        console.log("AI Won...")
    } else if(userinp === "Paper" && res === "Rock") {
        console.log("You Won!")
    } else if(userinp === "Scissors" && res === "Paper") {
        console.log("You Won!")
    } else if(userinp === "Paper" && res === "Scissors") {
        console.log("AI Won...")
    } else if(userinp === "Rock" && res === "Scissors") {
        console.log("You Won!")
    } else if(userinp === "Scissors" && res === "Rock") {
        console.log("AI Won...")
    } else if(userinp === "Rock" && res === "Rock") {
        console.log("You Drew...")
    } else if(userinp === "Scissors" && res === "Scissors") {
        console.log("You Drew...")
    } else if(userinp === "Paper" && res === "Paper") {
        console.log("You Drew...")
    } else {
        console.log("An Error Occured!")
    }
}

rps()
