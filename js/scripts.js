var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container button");

var canYouSeeMainNav = false;

console.log(burgerBtn);


//var sectionTags = document.querySelectorAll("section");



function showNav(){
    console.log("button clicked");
    if(canYouSeeMainNav === false){
        //this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");
        canYouSeeMainNav = true;
    }else{
        mainNav.classList.remove("showMainNav");
        //this will remove the class of showMainNav to the id mainNav
        canYouSeeMainNav = false;
    }
    

}

//add a event listener
burgerBtn.addEventListener("click", showNav);


//will call a function
//showNav();