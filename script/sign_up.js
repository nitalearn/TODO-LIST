
const passwordSee = document.getElementById("passwordSee");
let visible = false;
passwordSee.addEventListener("click",()=> { 
  visible = !visible;

  password.type = visible ? "text" : "password";
  confirmPassword.type = visible ? "text" : "password";
  password.type = visible ? "text" : "password";
  passwordSee.innerHTML = visible ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
})


// Login form
document.addEventListener("DOMContentLoaded",()=> {
  const loginForm = document.getElementById("loginForm");
  const username = document.getElementById("username")
  const usernameError = document.getElementById("usernameError")
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const password = document.getElementById("password");
  const confirmpasswordInput = document.getElementById("confirmPassword");
  const passwordError = document.getElementById("passwordError");
  const submitBtn = document.getElementById("submitBtn");


  loginForm.addEventListener("submit", (e) => { 
    e.preventDefault();

    // پاک کردن خطاها
    usernameError.style.display = "none";
    emailError.style.display = "none"
    passwordError.textContent = "";
    username.classList.remove("invalid");
    email.classList.remove("invalid");
    password.classList.remove("invalid");
    confirmpasswordInput.classList.remove("invalid");

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpasswordInput.value.trim();

    let hasError = false;

    if (!usernameValue) {
      usernameError.textContent = "Enter username.";
      usernameError.style.display = "block";
      username.classList.add("invalid");
      hasError = true;
  
    } else if  (!/^[a-zA-Z0-9_]{3,16}$/.test(usernameValue)) {
      usernameError.textContent = "Username must be between 3 and 16 characters.";
      usernameError.style.display = "block";
      username.classList.add("invalid");
      hasError = true;

    }

    if (!emailValue) {
      emailError.textContent = "Enter email.";
      emailError.style.display = "block";
      email.classList.add("invalid");
      hasError = true;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
      emailError.textContent = "Please enter a valid email!";
      emailError.style.display = "block";
      email.classList.add("invalid");
      hasError = true;
    }


    if (!passwordValue || !confirmpasswordValue) {
      passwordError.textContent = "Enter password.";
      passwordError.style.display = "block";
      password.classList.add("invalid");
      hasError = true;

    } else if(passwordValue.length < 3 || passwordValue.length > 20){ 
      passwordError.textContent = "The password must be between 6 and 20.";
      passwordError.style.display = "block";
      password.classList.add("invalid");
      hasError = true;
    }else if(passwordValue !== confirmpasswordValue){ 
      passwordError.textContent = "The passwords do not match.";
      passwordError.style.display = "block";
      password.classList.add("invalid");
      hasError = true;

    } else{ 
      console.log("Passwords are match.");
    }
  

    if (!hasError) {
      console.log("اطلاعات معتبر هستند، آماده ارسال...");
      // مثلاً می‌تونی اینجا ریدایرکت کنی یا فرم رو بفرستی
    }
  });

})
