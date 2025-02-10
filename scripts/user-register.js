document.getElementById("number").addEventListener("input", (e) => {
  if (e.target.value.length > 10) {
    e.target.value = e.target.value.slice(0, 10);
  }
});

let overlay = document.querySelector(".overlay");
let loginPopup = document.querySelector(".login-popup");
let loginHere = document.getElementById("loginhere");

loginHere.addEventListener("click", () => {
  overlay.style.display = "block";
  loginPopup.style.display = "block";
});

let closeButton = document.getElementById("closebutton");
closeButton.addEventListener("click", () => {
  overlay.style.display = "none";
  loginPopup.style.display = "none";
});

let idCreate = document.getElementById("id-create");
idCreate.addEventListener("click", () => {
  overlay.style.display = "none";
  loginPopup.style.display = "none";
});

// Hamburger menu 
let xmark = document.getElementById("xmark");
let hamMenu = document.querySelector(".ham-menu");
let hamBar = document.getElementById("hambar");

hamBar.addEventListener("click", () => {
  hamMenu.style.left = "0%";
});

xmark.addEventListener("click", () => {
  hamMenu.style.left = "-50%";
});

// Registration 
let registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", (e) => {
  e.preventDefault(); 

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("number").value.trim();
  let password = document.getElementById("password").value.trim();
  let city = document.getElementById("city").value.trim();
  let ans1 = document.getElementById("ans1").value.trim();
  let ans2 = document.getElementById("ans2").value.trim();

  if (!name || !email || !mobile || !password || !city || !ans1 || !ans2 ) {
    alert("Please fill all the fields.");
    return;
  }


  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the email is already registered
  let existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    alert("This is an existing account. Please use another email or log in.");
    return;
  }

  // unique userId
  let userId = "USER" + Date.now();

 

  // Save new user to localStorage
  const newUser = { name, email, mobile, password, city, ans1, ans2, userId };
  users.push(newUser);
    
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users)
 


  // To clear registration page
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("password").value = "";
  document.getElementById("ans1").value = "";
  document.getElementById("ans2").value = "";
  document.getElementById("city").value = "";

  alert("Registration successful!");

  // login popup
  overlay.style.display = "block";
  loginPopup.style.display = "block";
});

// Login
let loginButton = document.getElementById("loginbutton");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  let loginEmail = document.querySelector("#login-email").value.trim();
  let loginPassword = document.querySelector("#login-password").value.trim();

  // check existing users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user alraedy exists
  const user = users.find(
    (user) => user.email === loginEmail && user.password === loginPassword
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert(`Welcome, ${user.name}! Login successful.`);
    overlay.style.display = "none";
    loginPopup.style.display = "none";
    window.location.href = "userhome.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});


// forgot password QnA

let QnA = document.querySelector(".QnA");
let forgotPassword = document.getElementById("forgot-password");
forgotPassword.addEventListener("click", () => {
  loginPopup.style.display = "none";
  QnA.style.display = "block";
});

// QnA X-Mark
let QnaCloseButton = document.getElementById("QnA-xmark");
QnaCloseButton.addEventListener("click", () => {
  overlay.style.display = "none";
  QnA.style.display = "none";
});

// QnA submit Button
let QnAsubmitButton = document.getElementById("QnA-submit-button");
QnAsubmitButton.addEventListener("click", () => {
  let QnAname = document.getElementById("QnA-name").value.trim();
  let QnAans1 = document.getElementById("QnA-ans1").value.trim();
  let QnAans2 = document.getElementById("QnA-ans2").value.trim();

  if (!QnAname || !QnAans1 || !QnAans2) {
    alert("Please fill in all fields.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let QnAchecking = users.find(
    (user) =>user.name === QnAname && user.ans1 === QnAans1 && user.ans2 === QnAans2
  );

  if (QnAchecking) {
    window.location.href = "userhome.html";
  } else {
    alert("The Answers you enter was Wrong");
  }
});

let users = JSON.parse(localStorage.getItem("users")) || []
console.log("Users",users)








