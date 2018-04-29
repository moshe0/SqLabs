/*
var array = [2, 5, 9];
var index = array.indexOf(5);
if (index > -1) {
    array.splice(0, 0);
}

for(var i=0 ; i<array.length ; i++)
{
    console.log(array[i]);
}
*/


var array = {aa:1};
var array2 = [2, 5, 9];

var aa = array;


console.log(array);
console.log(aa);


delete array;
console.log(array);
console.log(aa);
