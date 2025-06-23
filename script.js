const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const message = document.getElementById("message");

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    message.textContent = "Passwords do not match";
    message.style.color = "red";
  } else {
    message.textContent = "Passwords match";
    message.style.color = "green";
  }
});

form.addEventListener("submit", function (e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault(); 
    message.textContent = "Enter matching password";
    message.style.color = "red";
    confirmPassword.focus();
  } else {
    e.preventDefault(); 
    alert("🎉 Registered Successfully!");
    
    form.reset();
    message.textContent = "";
  }
});
