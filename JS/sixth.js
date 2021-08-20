var largeScreen = document.querySelector('.mainLargeScreenList')
var mediumScreen = document.querySelector('.mainMediumScreenList')

function large() {
    
    largeScreen.style.display = 'flex'
    
}
function largeVanish() {
    
    largeScreen.style.display = 'none'
}


function mediumS() {
    
    mediumScreen.style.display = 'flex'
    
}
function mediumSVanish() {
    mediumScreen.style.display = 'none'
    
}

// ! for hamburger menu

var pageIcon = document.querySelector('.mainHeaderFirst')
var hamBurger = document.querySelector('.hamburgerIcon')
var hamburgerList = document.querySelector('.hamburgerMenu')

function hamburger() {
    pageIcon.style.display = 'none'
    // hamBurger.style.display = 'none'
    hamburgerList.style.display = 'flex'
}
function hamBurgerVanish() {
    hamburgerList.style.display = 'none'
    // hamBurger.style.display = 'block'
    pageIcon.style.display = 'block'
    
}

function hideHamburger(){
    // if (screen.width>760) {
    //     hamBurger.style.display = 'none'
    //     console.log("mausam");
    // }
}