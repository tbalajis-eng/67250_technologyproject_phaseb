/* ------------------------------------------------------------
   INC 3: Console Practice
   ------------------------------------------------------------ */
var x = 5; var y = 7; var z = x + y;
console.log(z);
var A = "Hello "; var B = "world!"; var C = A + B;
console.log(C);
function sumnPrint(x1, x2) { console.log(x1 + x2); }
sumnPrint(x, y); sumnPrint(A, B);
if (C.length > z) { console.log(C); }
else { if (C.length < z) { console.log(z); } else { console.log("good job!"); } }


/* ------------------------------------------------------------
   INC 3: Time-Based Greeting (index.html only)
   ------------------------------------------------------------ */
var now = new Date(); var hour = now.getHours();
function greeting(h) {
  var greetEl = document.getElementById("greeting");
  if (!greetEl) return;
  var msg;
  if      (h < 5 || h >= 20) msg = "Good night — MonoMuse is waiting for your next visit.";
  else if (h < 12)            msg = "Good morning! Welcome to MonoMuse.";
  else if (h < 18)            msg = "Good afternoon! Welcome to MonoMuse.";
  else                        msg = "Good evening! Welcome to MonoMuse.";
  greetEl.innerHTML = msg;
}
greeting(hour);


/* ------------------------------------------------------------
   INC 3: Dynamic Footer Year
   ------------------------------------------------------------ */
function addYear() {
  var el = document.getElementById("copyYear");
  if (!el) return;
  el.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
}


/* ------------------------------------------------------------
   INC 4: Active Navigation Bar
   ------------------------------------------------------------ */
function ActiveNav() {
  var links = document.querySelectorAll('nav a');
  links.forEach(function(link) {
    if (window.location.href === link.href) link.classList.add("active");
  });
}
ActiveNav();


/* ------------------------------------------------------------
   INC 4: jQuery Read More / Read Less (index.html only)
   ------------------------------------------------------------ */
if (typeof $ !== 'undefined') {
  $("#readMore").click(function() {
    $("#longIntro").show(); $("#readLess").show(); $("#readMore").hide();
  });
  $("#readLess").click(function() {
    $("#longIntro").hide(); $("#readLess").hide(); $("#readMore").show();
  });
}


/* ------------------------------------------------------------
   INC 4: Buy Tickets — reveal hidden purchase form
   ------------------------------------------------------------ */
function showForm(btn) {
  var form = document.getElementById("purchaseForm");
  if (!form) return;
  form.style.display = "block";
  form.scrollIntoView({ behavior: "smooth", block: "start" });
  var dateField = document.getElementById("visitDate");
  if (dateField && btn && btn.dataset.date) dateField.value = btn.dataset.date;
}
function handlePurchase() { alert("Redirecting to payment system."); }


/* ------------------------------------------------------------
   INC 5: Hamburger Nav Toggle
   ------------------------------------------------------------ */
function toggleNav() {
  var navbar = document.querySelector('.nav_bar');
  if (!navbar) return;
  navbar.classList.toggle('responsive');
}

/* ------------------------------------------------------------
   INC 5: Leaflet Map
   ------------------------------------------------------------ */
function initMap() {
  var mapEl = document.getElementById('map');
  if (!mapEl) return;
  var map = L.map('map').setView([36.37, -94.21], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([36.37, -94.21]).addTo(map)
    .bindPopup('<strong>MonoMuse</strong><br>600 Museum Way, Bentonville, AR 72712')
    .openPopup();
}
initMap();


/* ------------------------------------------------------------
   FINAL: Automatic Price Calculation (checkout.html)
   ------------------------------------------------------------ */
function calcPrice() {
  var typeEl = document.getElementById("ticketType");
  var qtyEl  = document.getElementById("ticketQty");
  var display = document.getElementById("priceDisplay");
  var totalEl = document.getElementById("totalPrice");
  if (!typeEl || !qtyEl || !display || !totalEl) return;

  var price = parseFloat(typeEl.value);
  var qty   = parseInt(qtyEl.value);

  if (typeEl.value && qty >= 1 && qty <= 10) {
    var total = price * qty;
    totalEl.textContent = "$" + total.toFixed(2);
    display.style.display = "block";
  } else {
    display.style.display = "none";
  }
}


/* ------------------------------------------------------------
   FINAL: Checkout Form Validation + Submit → Confirmation
   ------------------------------------------------------------ */
function submitOrder() {
  var name    = document.getElementById("visitorName");
  var date    = document.getElementById("visitDate");
  var type    = document.getElementById("ticketType");
  var qty     = document.getElementById("ticketQty");
  var email   = document.getElementById("visitorEmail");
  var zip     = document.getElementById("zipCode");
  var errorBox = document.getElementById("errorBox");

  // Clear previous errors
  ["err-name","err-date","err-type","err-qty","err-email","err-zip"].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.textContent = "";
  });
  errorBox.style.display = "none";
  errorBox.innerHTML = "";

  var errors = [];
  var valid = true;

  // Name
  if (!name.value.trim()) {
    document.getElementById("err-name").textContent = "Full name is required.";
    errors.push("Full name is required.");
    valid = false;
  }

  // Date
  if (!date.value) {
    document.getElementById("err-date").textContent = "Visit date is required.";
    errors.push("Visit date is required.");
    valid = false;
  }

  // Ticket type
  if (!type.value) {
    document.getElementById("err-type").textContent = "Please select a ticket type.";
    errors.push("Ticket type is required.");
    valid = false;
  }

  // Quantity
  var qtyVal = parseInt(qty.value);
  if (!qty.value || qtyVal < 1 || qtyVal > 10) {
    document.getElementById("err-qty").textContent = "Please enter a quantity between 1 and 10.";
    errors.push("Ticket quantity must be between 1 and 10.");
    valid = false;
  }

  // Email — format validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    document.getElementById("err-email").textContent = "Email address is required.";
    errors.push("Email address is required.");
    valid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    document.getElementById("err-email").textContent = "Please enter a valid email address.";
    errors.push("Email address is not valid.");
    valid = false;
  }

  // Zip code — optional but must be 5 digits if filled
  if (zip.value.trim() && !/^\d{5}$/.test(zip.value.trim())) {
    document.getElementById("err-zip").textContent = "Zip code must be exactly 5 digits.";
    errors.push("Zip code must be 5 digits.");
    valid = false;
  }

  // Show error summary if invalid
  if (!valid) {
    errorBox.innerHTML = "<strong>Please fix the following:</strong><ul>" +
      errors.map(function(e) { return "<li>" + e + "</li>"; }).join("") + "</ul>";
    errorBox.style.display = "block";
    errorBox.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  // Store order in sessionStorage for confirmation page
  var typeLabels = { "18": "Adult", "10": "Student", "15": "Member" };
  var total = (parseFloat(type.value) * qtyVal).toFixed(2);
  var order = {
    name:  name.value.trim(),
    date:  date.value,
    type:  typeLabels[type.value],
    qty:   qtyVal,
    email: email.value.trim(),
    total: "$" + total
  };
  sessionStorage.setItem("monoOrder", JSON.stringify(order));

  // Redirect to confirmation page
  window.location.href = "confirmation.html";
}


/* ------------------------------------------------------------
   FINAL: Load order data on confirmation.html
   ------------------------------------------------------------ */
function loadConfirmation() {
  var data = sessionStorage.getItem("monoOrder");
  if (!data) return;
  var order = JSON.parse(data);
  var set = function(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  set("conf-name",  order.name);
  set("conf-date",  order.date);
  set("conf-type",  order.type);
  set("conf-qty",   order.qty);
  set("conf-email", order.email);
  set("conf-total", order.total);
  sessionStorage.removeItem("monoOrder");
}


/* ------------------------------------------------------------
   FINAL: Interactive Image Gallery (exhibitions.html)
   ------------------------------------------------------------ */
var currentSlide = 0;

function updateGallery() {
  var imgs = document.querySelectorAll('.gallery-img');
  var dots = document.querySelectorAll('.dot');
  if (!imgs.length) return;
  imgs.forEach(function(img, i) {
    img.classList.toggle('active', i === currentSlide);
  });
  dots.forEach(function(dot, i) {
    dot.classList.toggle('active', i === currentSlide);
  });
}

