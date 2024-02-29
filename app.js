var greeting;
var hour = prompt("Enter the hour (in 24-hour format):");

if (hour < 13) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);

