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

function isItTrue() {
    if (isItTrue) {
        return "Yes,its true";
    }
    return "No,its not true";
}
console.log(isItTrue(true));

function test(age) {
    if (age == 20) {
        return "You are a teenager";
    }
    return "You are an adult";
}
console.log(test(18));

function strictEqualOperator(e, f) {
    if (e === f) {
        return "Equals";
    }
    return "Not equal";
}
console.log(strictEqualOperator(10, "10"));

function notEqual(val) {
    if (val != 10) {
        return "Not equal";
    }
    return "Equal";
}
console.log(notEqual(4));

function greaterThan(sum) {
    if (sum > 10) {
        return "over 10";
    }
    if (sum > 100) {
        return "over 100";
    }
    return "Under both";
}
console.log(greaterThan(10));

function greaterThanOrEqual(age) {
    if (age >= 20) {
        return "You are an adult";
    }
    return "You are a teenager";
}
console.log(greaterThanOrEqual(17));

function lessThan(age) {
    if (age < 15) {
        return "You are a child";
    }
    if (age < 35) {
        return "You are a youth";
    }
    return "Your category is not specified";
}
console.log(lessThan(50));

function lessThanOrEqual(marks) {
    if (marks <= 250) {
        return "You are below average";
    }
    if (marks <= 100) {
        return "You failed";
    }
    return "You passed";
}

console.log(lessThanOrEqual(300));