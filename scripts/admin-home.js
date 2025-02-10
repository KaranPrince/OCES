let hamMenu = document.querySelector(".ham-menu")
let hamBar = document.getElementById("hambar")
let xmark = document.getElementById("xmark")

hamBar.addEventListener("click",()=>{
   hamMenu.style.left="0%"
})

xmark.addEventListener("click",()=>{
    hamMenu.style.left="-40%"
})

//Admin Options
// let verifyPolice = document.querySelector(".verify-police-div")
let viewPolice = document.querySelector(".view-police-div")
let viewUsers = document.querySelector(".view-users-div")
let assignPolice = document.querySelector(".assign-police-div")
let userFeedback = document.querySelector(".user-feedback-div")


// verifyPolice .addEventListener("click",()=>{
//     window.location.href=""
// })


viewUsers.addEventListener("click",()=>{
    window.location.href="view-users.html"
})

viewPolice.addEventListener("click",()=>{
    window.location.href="view-police.html"
})

assignPolice.addEventListener("click",()=>{
    window.location.href = "assign-police.html"
})

userFeedback.addEventListener("click",()=>{
    window.location.href = "user-feedback.html"
})




