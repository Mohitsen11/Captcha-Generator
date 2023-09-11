const captchaTextBox = document.querySelector(".captcha_box input");
    const refreshButton = document.querySelector(".input_field i");
    const captchaInputBox = document.querySelector(".captcha_input input");
    const message = document.querySelector(".message");
    const submitButton = document.querySelector(".button");

    //variable to store captcha text
    let captchaText = null;

    //generate random Captcha Text
    let captchaGenerator = () =>{

      let randomString = Math.random().toString(36).substring(2,7);
      let randomStringArray = randomString.split("");
      let changeString = randomStringArray.map(char => Math.random() > 0.5 ? char.toUpperCase() : char);
      captchaText = changeString.join("   ");

      captchaTextBox.value = captchaText;
      console.log(captchaText);
    }

    const refreshBtnClick = () => {
      captchaGenerator();
      captchaInputBox.value = "";
      captchaKeyUpValidate();
    }

    const captchaKeyUpValidate = () => {
      submitButton.classList.toggle("disabled" , !captchaInputBox.value);

      if(captchaInputBox.value === ""){
        message.classList.remove("active");
      }
    }

    const submitBtnClick = () => {

      captchaText = captchaText.split("")
      .filter(char => char !== " ")
      .join("");

      message.classList.add("active");
      if(captchaInputBox.value === captchaText){
        messgae.innerText = "Entered captcha is correct";
      }
      else{
        message.innerText = "Entered captcha is not correct";
        message.style.color = "#ED2B2A"
      }
    }

    //adding eventlistener for refreshButton
    refreshButton.addEventListener("click" , refreshBtnClick);
    captchaInputBox.addEventListener("keyup" , captchaKeyUpValidate);
    submitButton.addEventListener("click" , submitBtnClick);


    //generate a random captcha when page loads
    captchaGenerator();