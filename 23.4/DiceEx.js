function getDiceNumber(){
    return Math.floor((Math.random() * 6) + 1);
}


function getDiceString(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}



function getDiceGame() {
    rl.question("Are you want additional card?\n", processInput);
}


function processInput(answer) {
    if (answer === "n" || times >= 5 || res > 21)
    {
        console.log(res);
        process.exit(0);
    }
    else if (answer === "y") {
        times++;
        res += Math.floor((Math.random() * 14) + 1);
        getDiceGame();
    }
}



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var res = 0;
var times = 0
getDiceGame();
