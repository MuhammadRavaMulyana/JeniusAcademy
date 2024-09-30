// Validation script
function validateForm() {
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
  
    let isValid = true;
  
    // First Name Validation
    let firstName = document.getElementById('firstName').value.trim();
    if (firstName === '') {
      document.getElementById('firstNameError').textContent = 'First name is required.';
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      document.getElementById('firstNameError').textContent = 'First name must contain only letters.';
      isValid = false;
    }
  
    // Surname Validation
    let surname = document.getElementById('surname').value.trim();
    if (surname === '') {
      document.getElementById('surnameError').textContent = 'Surname is required.';
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(surname)) {
      document.getElementById('surnameError').textContent = 'Surname must contain only letters.';
      isValid = false;
    }
  
    // Email Validation
    let email = document.getElementById('email').value.trim();
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('emailError').textContent = 'Email is invalid.';
      isValid = false;
    }
  
    // Phone Number Validation
    let phone = document.getElementById('phone').value.trim();
    if (phone === '') {
      document.getElementById('phoneError').textContent = 'Phone number is required.';
      isValid = false;
    } else if (isNaN(phone) || phone.length < 10 || phone.length > 15) {
      document.getElementById('phoneError').textContent = 'Phone number must be between 10 and 15 digits.';
      isValid = false;
    }
  
    // Password Validation
    let password = document.getElementById('password').value.trim();
    if (password === '') {
      document.getElementById('passwordError').textContent = 'Password is required.';
      isValid = false;
    } else if (password.length < 8) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
      isValid = false;
    }
  
    // Confirm Password Validation
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (confirmPassword === '') {
      document.getElementById('confirmPasswordError').textContent = 'Password confirmation is required.';
      isValid = false;
    } else if (confirmPassword !== password) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      isValid = false;
    }
  
    return isValid;
  }