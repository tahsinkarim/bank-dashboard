// Step 1: Add event while clicking Submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Get Email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //Get Password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // Check Email and password
    if( email === 'yourmail@gmail.com' && password === 'yourpassword'){
        window.location.href = 'bank.html'
    } else {
        alert('Invalid User')
    }

})