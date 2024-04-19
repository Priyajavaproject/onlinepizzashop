// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// script.js
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var pizzaSize = document.getElementById('pizza-size').value;
    var toppings = [];
    var checkboxes = document.getElementsByName('toppings');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        toppings.push(checkboxes[i].value);
      }
    }
    
    // Display booking message
    var message = "Thank you, " + name + "! Your booking for a " + pizzaSize + " pizza ";
    if (toppings.length > 0) {
      message += "with " + toppings.join(", ") + " ";
    }
    message += "has been confirmed. We will contact you at " + email + " or " + phone + " for further details.";
    document.getElementById('booking-message').innerText = message;
  });
  
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})