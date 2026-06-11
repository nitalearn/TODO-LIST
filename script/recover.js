
document.addEventListener("DOMContentLoaded",()=> {
  const loginForm = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const submitBtn = document.getElementById("submitBtn");


  loginForm.addEventListener("submit", (e) => { 
    e.preventDefault();

    // پاک کردن خطاها
    emailError.style.display = "none"
    email.classList.remove("invalid");

    const emailValue = email.value.trim();

    let hasError = false;

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
    } else{ 
      console.log("Ok");
    }

    if (!hasError) {
      console.log("اطلاعات معتبر هستند، آماده ارسال...");
      // مثلاً می‌تونی اینجا ریدایرکت کنی یا فرم رو بفرستی
    }
  });

})
