let xmark = document.getElementById("xmark");
let hamMenu = document.querySelector(".ham-menu");
let hamBar = document.getElementById("hambar");

hamBar.addEventListener("click", () => {
  hamMenu.style.left = "0%";
});

xmark.addEventListener("click", () => {
  hamMenu.style.left = "-50%";
});

let postButton = document.getElementById("post-complaint");
postButton.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let reason = document.getElementById("reason").value.trim();
  let suspectName = document.getElementById("suspect").value.trim();
  let location = document.getElementById("location").value.trim();
  let complaintType = document.getElementById("complainttype").value.trim();
  let description = document.getElementById("description").value.trim();

  if (
    !name ||
    !email ||
    !reason ||
    !suspectName ||
    !location ||
    !complaintType ||
    !description
  ) {
    alert("Please Fill Every Fields");
    return;
  }

  const complaintDetails =
    JSON.parse(localStorage.getItem("complaintDetails")) || [];

  let caseId = Math.floor(Math.random() * 10000);

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));


  if(!currentUser){
    alert("No User logged in")
    return
  }

  let newComplaint = {
    caseId,
    name,
    email,
    reason,
    suspectName,
    location,
    complaintType,
    description,
    userId: currentUser.userId,
  };

  complaintDetails.push(newComplaint);

  localStorage.setItem("complaintDetails", JSON.stringify(complaintDetails));

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("reason").value = "";
  document.getElementById("suspect").value = "";
  document.getElementById("location").value = "";
  document.getElementById("complainttype").value = "";
  document.getElementById("description").value = "";

  alert("Your Complaint has been posted successfully");
});

// function getLocalStorageUsage() {
//   let totalBytes = 0;

//   // Iterate through all keys in localStorage
//   for (let key in localStorage) {
//     if (localStorage.hasOwnProperty(key)) {
//       const item = localStorage.getItem(key);

//       // Calculate the size of the key and value in bytes
//       totalBytes += key.length + (item ? item.length : 0);
//     }
//   }

//   // Convert bytes to kilobytes (1 KB = 1024 bytes)
//   const totalKilobytes = (totalBytes / 1024).toFixed(2);

//   console.log(`LocalStorage usage: ${totalKilobytes} KB`);
//   return totalKilobytes;
// }

// // Call the function to check the storage usage
// getLocalStorageUsage();

// let checker = JSON.parse(localStorage.getItem("complaintDetails"));
// console.log(checker);

// <-----CONSOLE CHECKING --//-- CONSOLE CHECKING --//-- CONSOLE CHECKING-----> //


// const complaintDetails =JSON.parse(localStorage.getItem("complaintDetails")) || [];
// console.log(complaintDetails)

// let userDetailsStorage = localStorage.getItem("users");
//   let userDetails = JSON.parse(userDetailsStorage);

//   console.log(userDetails[0].userId)

// let userDetailsStorage = localStorage.getItem("users");
// let userDetails = JSON.parse(userDetailsStorage);

// console.log(userDetails)

