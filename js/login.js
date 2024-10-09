const login = document.getElementById("aLogin");
const signup = document.getElementById("aSignUp");
const signUpButton = document.getElementById("signUpButton");

login.addEventListener("click", () => {
  switchDiv();
});

signup.addEventListener("click", () => {
  switchDiv();
});

signUpButton.addEventListener("click", () => {
  switchDiv();
});

function switchDiv() {
  const divSignUp = document.getElementById("signUp");
  const divLogin = document.getElementById("login");

  if (divSignUp.style.display === "none" || divSignUp.style.display === "") {
    divLogin.style.display = "none";
    divSignUp.style.display = "flex";
  } else {
    divSignUp.style.display = "none";
    divLogin.style.display = "flex";
  }
}
