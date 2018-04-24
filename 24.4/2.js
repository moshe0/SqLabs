var options = [
    'hummus', //1
    'hamutzim', //2
    'salat', //4
    'chips' //8
];

var bitwiseOptions = {
    'hummus': 1,
    'hamutzim': 2,
    'salat': 4,
    'chips': 8
};

function buildOptions() {
    for (var i=0; i<options.length; i++){
        bitwiseOptions[options[i]] = 1 << i;
    }
}


var pita = 0;
console.log(is(pita, 'hummus')); // false
pita = 1;
console.log(is(pita, 'hummus')); // true
pita = 15;
console.log(is(pita, 'hummus')); // true

function is(obj, option) {
    return !!(obj & bitwiseOptions[option]);
}



console.log('set:');
var p = 0;
p = set(p, 'hummus');
console.log(p);
p = set(p, 'hamutzim');
console.log(p);
p = set(p, 'salat');
console.log(p);
p = set(p, 'chips');
console.log(p);

function set(obj, option) {
    return (obj | bitwiseOptions[option]);
}
