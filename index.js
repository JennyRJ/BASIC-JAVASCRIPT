/*console.log("Hello World!");

//Data type
var a;
a = 2;
console.log(a);
var myName = "Jenny";
myName = "Lexie";
console.log(myName);
var b = "I am ";
var correctCamelCase = "cute";
var c;
c = b + correctCamelCase;
console.log(c);
var sum = 4 + 4;
var difference = 56 - 23;
var product = 4 * 3;
var divide = 45 / 9;
console.log(sum);
var aboutMe = 'I am good girl but i can also be a "bitch" when forced';
console.log(aboutMe);
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
var myFirstNamelength = 0;
var myFirstName = "Jeniffer";
myFirstNamelength = myFirstName.length;
console.log(myFirstNamelength);
var myArray = ["jenny", 45];
//.push - adds items at the end of an array
myArray.push(["lexie", "Kevin"]);
//.pop removes the first in the array
myArray.pop();
//shift - removes the first item in an array
myArray.shift();
//unshift - adds an item to the front of an array
myArray.unshift("baby");
console.log(myArray);
//functions

function myFirst(a, b) {
    console.log(a + b);
}
myFirst(3, 1);

function jayR() {
    var clothes = "Dungaree";
    console.log(clothes);
}
jayR();*/

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After" + JSON.stringify(testArr));