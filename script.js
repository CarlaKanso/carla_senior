const form = document.querySelector('form');

function validation() {
  const emailInput = document.getElementById("email_input").value;
  const passwordInput = document.getElementById("pass_input").value;
  const confirmpass = document.getElementById("pass_confirm").value

  // Check if email and password inputs are valid
  if (!validateEmail(emailInput)) {
    alert('Please enter a valid email address.');
    document.getElementById("email_input").focus();
    return false;
  }

  if (!validatePassword(passwordInput)) {
    alert('Please enter a password that is at least 6 characters long.');
    document.getElementById("pass_input").focus();
    return false;
  }
  if (passwordInput !== confirmpass) {
    alert("Your passwords don't match");
    document.getElementById("pass_confirm").focus();
    return false;
  }

  // If inputs are valid, show welcome message and redirect to home page
  alert('Welcome!'); // Show welcome message
  window.location.href = 'home.html'; // Redirect to home page
}


  function validateEmail(email) {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

