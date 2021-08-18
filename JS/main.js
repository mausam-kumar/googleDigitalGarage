// ! for headersecond and headerSecond2

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

    hamburgerList.style.display = 'flex'
    
}
function hamBurgerVanish() {

    hamburgerList.style.display = 'none'
    
}


