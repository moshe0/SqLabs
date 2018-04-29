main();

function main() {
    try {
        var list = [];

        for (var i = 0; i < 1000; i++) {
            var value = Math.floor(Math.random() * 10000);

            var found = list.find(function(element) {
                return element === value;
            });

            if(found === undefined)
                add(list, value);

            else
                i--;
        }

        assert("Validating collection count", sortedListGetCount(list), 1000);

        var valueToFind = 999;
        var actualIndex = sortedListSearch(list, valueToFind);
        var arr = sortedListGetRawArray(list);
        var expectedIndex = arr.indexOf(valueToFind);
        assert("Validating search", actualIndex, expectedIndex);

        console.log("PASS");
    }
    catch (err) {
        console.log("FAIL: " + err.message);
    }
}

function assert(message, actual, expected) {
    if (actual != expected) {
        throw new Error(message);
    }
}

function add(list, value){
    list.push(value);
    list.sort(function(a, b){return a-b});
}

function sortedListGetCount(list){
    return list.length;
}


function sortedListSearch(list, valueToFind){
    var start = 0;
    var end = list.length;
    var corrent = end/2;

    while(start != corrent && end != corrent){
        if(list[corrent] < valueToFind){
            start = corrent;
            corrent += Math.floor( (end - start) / 2 );
        }
        else if(list[corrent] > valueToFind){
            end = corrent;
            corrent = Math.floor( (end - start) / 2 );
        }
        if(list[corrent] === valueToFind)
            return corrent;
    }
    return -1;
}


function sortedListGetRawArray(list){
    return list;
}

