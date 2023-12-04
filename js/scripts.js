/*------------------------------
      Navigation
-------------------------------*/





var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container button");

var signInUpButtons = document.querySelector("#sign-in-up-buttons");

var canYouSeeMainNav = false;

//console.log(burgerBtn);


//var sectionTags = document.querySelectorAll("section");



function showNav(){
    //console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        //this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");

        signInUpButtons.classList.add("showSignIn");

        canYouSeeMainNav = true;
    }else{
        console.log("hide menu")
        mainNav.classList.remove("showMainNav");
        //this will remove the class of showMainNav to the id mainNav
        signInUpButtons.classList.remove("showSignIn");
        canYouSeeMainNav = false;
    }
    

}

//add a event listener
burgerBtn.addEventListener("click", showNav);


//will call a function
//showNav();

/*------------------------------
      Sign In
-------------------------------*/

var signInBtn = document.querySelector("#sign-in-btn");

var signInContainer = document.querySelector("#sign-in-container");

var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");


function showSignInModal(){
    //console.log("show modal now");

    signInContainer.classList.add("show-signIn-container");

}

function hideSignInModal(){
    signInContainer.classList.remove("show-signIn-container");
}

signInBtn.addEventListener("click",showSignInModal);
closeSignUpModalBtn.addEventListener("click",hideSignInModal);