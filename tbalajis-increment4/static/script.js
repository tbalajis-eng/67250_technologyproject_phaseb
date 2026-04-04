/* ============================================================
   MonoMuse - script.js
   Increment 4: Active Nav, jQuery Toggle, Buy Tickets Interaction
   (Includes all Increment 3 code)
   ============================================================ */


/* ------------------------------------------------------------
   INCREMENT 3: Console Practice (kept from previous increment)
   ------------------------------------------------------------ */
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
  var result = x1 + x2;
  console.log(result);
}
sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
  console.log(C);
  if (C.length > 20) { console.log("C is very long"); }
} else {
  if (C.length < z) { console.log(z); }
  else { console.log("good job!"); }
}

// findTheBanana — commented out so alerts don't fire on page load
// var L1 = ["Watermelon","Pineapple","Pear","Banana"];
// var L2 = ["Apple","Banana","Kiwi","Orange"];
// function findTheBanana(arr) {
//   arr.forEach(function(item) {
//     if (item === "Banana") { alert("Found Banana!"); }
//   });
// }
// findTheBanana(L1);
// findTheBanana(L2);


/* ------------------------------------------------------------
   INCREMENT 3: Time-Based Greeting (index.html only)
   ------------------------------------------------------------ */
var now  = new Date();
var hour = now.getHours();

function greeting(h) {
  var greetEl = document.getElementById("greeting");
  if (!greetEl) return;
  var message;
  if      (h < 5 || h >= 20) message = "Good night — MonoMuse is waiting for your next visit.";
  else if (h < 12)            message = "Good morning! Welcome to MonoMuse.";
  else if (h < 18)            message = "Good afternoon! Welcome to MonoMuse.";
  else                        message = "Good evening! Welcome to MonoMuse.";
  greetEl.innerHTML = message;
}
greeting(hour);


/* ------------------------------------------------------------
   INCREMENT 3: Dynamic Footer Year (all pages)
   ------------------------------------------------------------ */
function addYear() {
  var yearEl = document.getElementById("copyYear");
  if (!yearEl) return;
  yearEl.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
}


/* ------------------------------------------------------------
   INCREMENT 4: Active Navigation Bar
   Dynamically adds class="active" to the link matching current URL.
   Replaces the hard-coded id="navselected" from previous increments.
   ------------------------------------------------------------ */
function ActiveNav() {
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    if (window.location.href === link.href) {
      link.classList.add("active");
    }
  });
}
ActiveNav();


/* ------------------------------------------------------------
   INCREMENT 4: Read More / Read Less Toggle (jQuery — index.html)
   jQuery is included via CDN only on index.html.
   ------------------------------------------------------------ */

// Guard: only run jQuery code if $ is defined on this page
if (typeof $ !== 'undefined') {

  // When "Read More" is clicked
  $("#readMore").click(function() {
    $("#longIntro").show();   // show the long paragraph
    $("#readLess").show();    // show the Read Less button
    $("#readMore").hide();    // hide the Read More button
  });

  // When "Read Less" is clicked
  $("#readLess").click(function() {
    $("#longIntro").hide();   // hide the long paragraph
    $("#readLess").hide();    // hide the Read Less button
    $("#readMore").show();    // show the Read More button again
  });

}


/* ------------------------------------------------------------
   INCREMENT 4: Buy Tickets — reveal hidden purchase form
   ------------------------------------------------------------ */

// Called by each "Buy Now" button via onclick="showForm(this)"
function showForm(btn) {
  var form = document.getElementById("purchaseForm");
  if (!form) return;
  form.style.display = "block";
  // Scroll smoothly to the form
  form.scrollIntoView({ behavior: "smooth", block: "start" });

  // If a date button was clicked, pre-fill the date field
  var dateField = document.getElementById("visitDate");
  if (dateField && btn && btn.dataset.date) {
    dateField.value = btn.dataset.date;
  }
}

// Submit button on buytickets.html shows the redirect alert
function handlePurchase() {
  alert("Redirecting to payment system.");
}
