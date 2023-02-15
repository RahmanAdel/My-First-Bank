// step1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){

    // step2: get the email address inside the email input field
    // always remember to use .value to get text from input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DO NOT VERIFY EMAIL AND PASSWORD ON THE CLIENT SIDE
    // step4: verify email and password
    if (email === 'user@gmail.com' && password === 'user'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid credentials, Try again!')
    }
})