let hamMenu = document.querySelector(".ham-menu");
let hamBar = document.getElementById("hambar");
let xmark = document.getElementById("xmark");

hamBar.addEventListener("click", () => {
  hamMenu.style.left = "0%";
});

xmark.addEventListener("click", () => {
  hamMenu.style.left = "-40%";
});

// User Options
let newCase = document.querySelector(".new-case-div");
let caseStatus = document.querySelector(".case-status-div");
let userProfile = document.querySelector(".user-profile-div");
let adminInfo = document.querySelector(".admin-info-div");
let userFeedback = document.querySelector(".feedback-div");

newCase.addEventListener("click", () => {
  window.location.href = "newcase.html";
});

caseStatus.addEventListener("click", () => {
  window.location.href = "complaintstatus.html";
});

userProfile.addEventListener("click", () => {
  window.location.href = "user-profile.html";
});

adminInfo.addEventListener("click", () => {
  window.location.href = "admin-info.html";
});

let overlay = document.querySelector(".overlay");
let feedbackPopup = document.querySelector(".feedback-popup");
userFeedback.addEventListener("click", () => {
  overlay.style.display = "flex"; // Display the overlay and center the popup
  feedbackPopup.style.display = "block"; // Show the feedback popup
  feedbackPopup.innerHTML = `
    <div class="feedback-content">
      <p><strong>We value your feedback</strong></p>
      <input type="text" id="username" placeholder="Enter your name" />
      <textarea id="feedback-text" placeholder="Write your feedback here..."></textarea>
      <div class="buttons">
        <button class="submit-btn">Submit</button>
        <button class="close-btn">Close</button>
      </div>
    </div>
  `;

  // Select buttons and text area
  let submitBtn = document.querySelector(".submit-btn");
  let closeBtn = document.querySelector(".close-btn");
  let feedbackText = document.getElementById("feedback-text");
  let usernameInput = document.getElementById("username");

  // Handle the submit button click
  submitBtn.addEventListener("click", () => {
    let feedbackMessage = feedbackText.value;
    let userName = usernameInput.value.trim();

    if (feedbackMessage && userName) {
      // Save feedback along with user name to localStorage
      let feedbackData = JSON.parse(localStorage.getItem("feedback")) || [];
      feedbackData.push({ userName, feedbackMessage });
      localStorage.setItem("feedback", JSON.stringify(feedbackData));

      // Optionally, clear the feedback text and username input after submission
      feedbackText.value = "";
      usernameInput.value = "";

      // Optionally, show a confirmation message or alert
      alert("Thank you for your feedback!");
      overlay.style.display = "none"; // Hide the overlay
      feedbackPopup.style.display = "none"; // Hide the popup
    } else {
      alert("Please enter both your name and feedback before submitting.");
    }
  });

  // Handle the close button click
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none"; 
    feedbackPopup.style.display = "none"; 
  });
});
