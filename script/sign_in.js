const password = document.getElementById("password");
const passwordSee = document.getElementById("passwordSee");
let visible = false;

passwordSee.addEventListener("click", () => { 
  visible = !visible;
  password.type = visible ? "text" : "password";
  passwordSee.innerHTML =  visible ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
});


// Login form
const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit", (e) => { 
  e.preventDefault();

  // پاک کردن خطاها
  usernameError.style.display = "none";
  passwordError.style.display = "none";
  username.classList.remove("invalid");
  password.classList.remove("invalid");

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  let hasError = false;

  if (!usernameValue) {
    usernameError.textContent = "Enter username.";
    usernameError.style.display = "block";
    username.classList.add("invalid");
    hasError = true;
  
  } else if  (!/^[a-zA-Z0-9_]{3,16}$/.test(usernameValue)) {
    usernameError.textContent = "Username must be 3 and 16 characters.";
    usernameError.style.display = "block";
    username.classList.add("invalid");
    hasError = true;

  }

  if (!passwordValue) {
    passwordError.textContent = "Enter password.";
    passwordError.style.display = "block";
    password.classList.add("invalid");
    hasError = true;
  } else if (passwordValue.length < 6 || passwordValue.length > 20) {
    passwordError.textContent = "The password must be between 6 and 20.";
    passwordError.style.display = "block";
    password.classList.add("invalid");
    hasError = true;
  }

  if (!hasError) {
    console.log("اطلاعات معتبر هستند، آماده ارسال...");
    // مثلاً می‌تونی اینجا ریدایرکت کنی یا فرم رو بفرستی
  }
});
