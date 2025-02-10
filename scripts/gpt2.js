// Retrieving localStorage data from the downloaded JSON file
function importLocalStorageFromFile(event) {
    const file = event.target.files[0];
    
    if (file && file.name.endsWith('.json')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const fileContent = e.target.result;
        const data = JSON.parse(fileContent); // Parse JSON file content
        localStorage.setItem("users", JSON.stringify(data)); // Store the imported data in localStorage
        alert("User data imported successfully!");
      };
      reader.readAsText(file);
    } else {
      alert("Please select a valid JSON file.");
    }
  }
  
  // Trigger the file input dialog to upload the JSON file
  function triggerImportFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.style.display = 'none'; // Hide the file input
    input.addEventListener('change', importLocalStorageFromFile);
    document.body.appendChild(input); // Temporarily append input to the document
    input.click(); // Trigger the file input
  }
  
  // This will automatically trigger the file input dialog when the page loads
  window.onload = () => {
    triggerImportFile(); // This will open the file input dialog
  };
  
  // Sidebar menu functionality
  let hamMenu = document.querySelector(".ham-menu");
  let hamBar = document.getElementById("hambar");
  let xmark = document.getElementById("xmark");
  
  hamBar.addEventListener("click", () => {
    hamMenu.style.left = "0%";
  });
  
  xmark.addEventListener("click", () => {
    hamMenu.style.left = "-40%";
  });
  
  // Navigation for new case and case status
  let newCase = document.querySelector(".new-case-div");
  let caseStatus = document.querySelector(".case-status-div");
  
  newCase.addEventListener("click", () => {
    window.location.href = "newcase.html";
  });
  
  caseStatus.addEventListener("click", () => {
    window.location.href = "complaintstatus.html";
  });
  
  // You can now use the `users` data in localStorage for your needs, such as displaying user info
  let users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users); // You can now use the users data to populate the page or perform actions.
  