betterLogging('log', 1);

function betterLogging(log, level, extra) {
    var error = 'just in error';
    if(level === 1){
        error = 'level1';
    }
    else if(level === 2) {
        error = 'level2';
    }

    console.log(log, error, extra);
}


function betterLogging2(...args) { //spred
    var error = 'just in error';
    if(level === 1){
        error = 'level1';
    }
    else if(level === 2) {
        error = 'level2';
    }

    console.log(log, error, extra);
}

/*
console.log('Hello world', name);

function betterLogging(log, level, extra) {
    var error = 'just in error';
    if(level === 1){
        error = 'level1';
    }
    else if(level === 2) {
        error = 'level2';
    }

    console.log(log, error);
}

*/





