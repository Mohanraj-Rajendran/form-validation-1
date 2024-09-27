
// username & password check

var username= document.getElementById('Username');
var password= document.getElementById('Password');

var validUsername="Entri Elevate";
var vaildPassword="admin123";

function login(){

 if (username.value === validUsername && password.value === vaildPassword)
   {
        alert('Your Login Successfull');

        window.location.href='homepage.html';
        
   } 

   else {
    
    alert("Invalid username or password. Please try again.");   
    
  }   

}


//Forgot Password

function Fpass(){

    let Email=prompt('Enter Your Registered Mail');
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;

    if(emailPattern.test(Email)){
        alert('Verification code sent to your email');
    }

    else{
        alert('Entered Email is Incorrect "Please ENTER Valid Email"');
    }

}

//show & hide password

const togglePassword = document.getElementById('togglePassword');
const eyeIcon = togglePassword.querySelector('img');

togglePassword.addEventListener('click', function() {
    // Toggle the type attribute
    const type = password.type === 'password' ? 'text' : 'password';
    password.type = type;

    // Toggle the eye icon
    if (type === 'password') {
      eyeIcon.src = 'Closed eye icon.png'; // Closed eye icon
    } else {
      eyeIcon.src = 'Open eye icon.png'; // Open eye icon
    }
  });

