console.log("Hello World!");

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
jayR();

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
//logical && and ||
function testAndLogic(age) {
    if (age >= 20 && age <= 35) {
        return "You are a youth";
    }
    return "Not identified";
}
console.log(testAndLogic(24));

function testOrLogic(marks) {
    if (marks >= 400 || marks <= 500) {
        return "You are a national school material";
    }
    return "You are a provisional school material";
}
console.log(testOrLogic(450));

function testElse(val) {
    if (val > 10) {
        return "Over 10";
    } else return "Under 10";
}
console.log(testElse(5));

function testElseIf(val) {
    if (val > 10) {
        return "More than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(6));
//chained if else statement
function chainedIfElse(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    }
    return "Change Me";
}
console.log(chainedIfElse(7));
var names = [
    "Hole-in-one!",
    "Birdie",
    "Eagle",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go home",
];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes == par + 3) {
        return names[6];
    }
}
console.log(golfScore(5, 8));
//Switch statements
function caseInSwitch(val) {
    var answers = "";

    switch (val) {
        case 1:
            answer = "apha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
    }
    return answer;
}
console.log(caseInSwitch(2));

function caseInSwitch(val) {
    var answers = "";

    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "orange";
            break;
        case "c":
            answer = "melon";
            break;
        case "d":
            answer = "mango";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(caseInSwitch("a"));

function isLess(a, b) {
    return a < b;
}
console.log(isLess(10, 15));
//objects

var myObject = {
    name: "Lexie",
    parents: 2,
};
var nameValue = myObject.name;
var parentsValue = myObject.parents;

console.log(myObject.name);
console.log(myObject.parents);
//updating object properties
var ourDog = {
    name: "camper",
    legs: 4,
    tails: 1,
    friends: ["Everything"],
};

ourDog["bark"] = "woof!";
ourDog.name = "Happy camper";
ourDog.friends = ["Freecode campers"];
console.log(ourDog.name);
console.log(ourDog.friends);
console.log(ourDog);
//delete properties from objects
var ourDog = {
    name: "camper",
    legs: 4,
    tails: 1,
    friends: ["Everything"],
};

ourDog["bark"] = "woof!";
ourDog.name = "Happy camper";
ourDog.friends = ["Freecode campers"];
delete ourDog.legs;
console.log(ourDog);