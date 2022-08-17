const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".eye"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"), 
      logIn = document.querySelector(".login-text");



pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwFields =>{
            if(pwFields.type === "password"){
                pwFields.type = "text";
            }else{
                pwFields.type = "password";
            }
        })
    })
})


signUp.addEventListener("click", ( ) =>{
    container.classList.add("active");
});

logIn.addEventListener("click", ( ) =>{
    container.classList.remove("active");
});
