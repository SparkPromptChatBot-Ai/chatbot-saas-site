// Simple form submit handler
document.querySelector('#contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    // Reset form
    e.target.reset();
});
