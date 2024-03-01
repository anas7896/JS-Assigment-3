// Chapter NO; 1

//Q NO: 1

var character = prompt("Enter a character:");

if (!isNaN(character)) {
    document.write("The input is a number.");
}
else if (character >= 'A' && character <= 'Z') {
    document.write("The input is an uppercase letter.");
}
else if (character >= 'a' && character <= 'z') {
    document.write("The input is a lowercase letter.");
}
else {
    document.write("The input is neither a number nor a letter.");
}

// Q NO: 2

var num1 = +prompt("Enter the first integer:");
var num2 = +prompt("Enter the second integer:");

if (num1 === num2) {
    document.write("The two integers are equal.");
} 
else {
    if (num1 > num2) {
        document.write("The larger integer is: " + num1);
    } else {
        document.write("The larger integer is: " + num2);
    }
}

// Q NO: 3

var val = +prompt("Input a number:") 

if (val > 0) {
    document.write("The number is Positive")
}

else if (val < 0) {
    document.write("The number is Negative")
}

else {
    document.write("The number is Zero")
}

// Q NO: 4

var vowel = prompt("inter a character")

if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    document.write("True, its a vowel")
}
else{
    document.write("false, its not a vowel")
}

// Q NO: 5

var pass1 = "anas0092"
var pass = prompt("Enter your password")


if (pass === "") {
    document.write('Please enter your password')
}

else if (pass === pass1) {
    document.write('Correct Password')
}

else{
    document.write('Incorrect Password')
}

// Q NO: 6

var greeting;
var hour = prompt("Enter the hour (in 24-hour format):");

if (hour <= 12) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.write(greeting);

// Q NO: 7

var time = +prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):")

if (time >= 0 && time < 1200) {
    document.write('Good Morning!')
}
 else if (time >= 1200 && time < 1700) {
    document.write('Good Afternoon!')
 }
 else if (time >= 1700 && time < 2100) {
    document.write('Good evening!')
 }
 else if (time >= 2100 && time < 2359) {
    document.write('Good night!')
 }
 else {
    document.write("Invalid time entered!");
}

