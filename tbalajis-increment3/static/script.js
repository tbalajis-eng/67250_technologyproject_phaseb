/* ============================================================
   MonoMuse - script.js
   Increment 3: Foundations of JavaScript
   ============================================================ */


/* ------------------------------------------------------------
   PART 2: JavaScript Basics (Console Practice)
   ------------------------------------------------------------ */

// Numeric addition
var x = 5;
var y = 7;
var z = x + y;
console.log(z);           // 12

// String concatenation
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);           // Hello world!

// Basic function: sum or concatenate two values, print result
function sumnPrint(x1, x2) {
  var result = x1 + x2;
  console.log(result);
}

sumnPrint(x, y);   // 12
sumnPrint(A, B);   // Hello world!

// Conditional: compare C.length to z
if (C.length > z) {
  console.log(C);
  if (C.length > 20) {
    console.log("C is very long");
  }
} else {
  if (C.length < z) {
    console.log(z);
  } else {
    console.log("good job!");   // C.length === z → prints "good job!"
  }
}

// Arrays + Loops (alerts)
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// Using a for loop
// function findTheBanana(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Banana") {
//       alert("Found Banana!");
//     }
//   }
// }

// Rewritten with forEach
// function findTheBanana(arr) {
//   arr.forEach(function(item) {
//     if (item === "Banana") {
//       alert("Found Banana!");
//     }
//   });
// }

// findTheBanana(L1);
// findTheBanana(L2);
// (Commented out so alerts don't fire on every page load)


/* ------------------------------------------------------------
   PART 3: Time-Based Greeting (DOM Manipulation)
   Only runs on index.html where id="greeting" exists.
   ------------------------------------------------------------ */

var now  = new Date();
var hour = now.getHours();

function greeting(h) {
  var greetEl = document.getElementById("greeting");
  // Guard: only run if the element exists on this page
  if (!greetEl) return;

  var message;
  if (h < 5 || h >= 20) {
    message = "Good night — MonoMuse is waiting for your next visit.";
  } else if (h < 12) {
    message = "Good morning! Welcome to MonoMuse.";
  } else if (h < 18) {
    message = "Good afternoon! Welcome to MonoMuse.";
  } else {
    message = "Good evening! Welcome to MonoMuse.";
  }

  greetEl.innerHTML = message;
}

// Call greeting — safe because we guard inside the function
greeting(hour);


/* ------------------------------------------------------------
   PART 4: Dynamic Footer Year (All Pages)
   ------------------------------------------------------------ */

function addYear() {
  var yearEl = document.getElementById("copyYear");
  if (!yearEl) return;
  var currentYear = new Date().getFullYear();
  yearEl.innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
}
