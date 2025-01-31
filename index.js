 // Funksioni për të kontrolluar dhe dërguar formularin
 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Parandalon dërgimin e formularit

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Kontrollo nëse të gjitha fushat janë plotësuar
    if (name === '' || email === '' || message === '') {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    } else {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
    }
});