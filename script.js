
// const btnHireMe = document.getElementById('btnHireMe');
document.addEventListener('DOMContentLoaded', function() {

const x = document.getElementById('btnHireMe')
const btnContactBtn = document.getElementById('btnContact');
const experienceBtn = document.getElementById('experienceBtn');
const btnSendMessage = document.getElementById('btnSendMessage');
const contactForm = document.getElementById('contactForm');

console.log(contactForm)

x.addEventListener('click', function() {
    alert('Thank you for your interest! Please send me an email at: arianne@example.com');
});


btnContactBtn.addEventListener('click', function() {
    alert('Contact form will be opened here!');

});


// experienceBtn.addEventListener('click', function() {
//     alert('Here are some of my experiences...');

// });


// contactForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Message sent! Thank you for contacting me.');
//     contactForm.reset(); 
// });

})      