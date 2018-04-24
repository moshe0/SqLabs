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
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Are you want additional card?\n" , (answer) => {

        if(answer == "y") {
            res += Math.floor((Math.random() * 14) + 1);
            getDiceGame();
        }
        else(answer == "n")
            return "no";
        rl.close();
    });
    /*
    var num1 = Math.floor((Math.random() * 14) + 1);
    console.log("r u want additional card?")
    Readline;
    var num2 = Math.floor((Math.random() * 14) + 1);
    return num1 + num2;
    */
}


//console.log(getDiceNumber());
//console.log(getDiceString());
console.log(getDiceGame());

/*
var res = 0;
for(var i=0 ; i<21 ; i++)
{
    var tmp = getDiceGame();
    if (tmp == "no")
        break;
    res += tmp;
}
console.log(res);
*/


var res = 0;
getDiceGame();
console.log(res);