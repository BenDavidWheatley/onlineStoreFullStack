
class SiteInteractions {
    /*class for all the sites interactions */
}

let scrollTrigger = 200;
let scrollTriggerTwo = 1600;
let scrollTriggerThree = 3300;
let scrollTriggerFour = 5700;

let pinkHeader = document.getElementsByClassName('mainHeader');
let whiteHeader = document.getElementsByClassName('headerColor');

let url = window.location.href;
let lastPart = url.substr(url.lastIndexOf('/') + 1);
console.log(lastPart);


window.onscroll = function() {
    if (window.scrollY >= scrollTriggerFour  && lastPart === 'index.html' ){
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/logos/socialBanner.jpg";        
    } 
    else if (window.scrollY >= scrollTriggerThree  && lastPart === 'index.html' ){
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/products/heroBanners/threeTierOffice.jpg";
    } 
    else if (window.scrollY >= scrollTriggerTwo  && lastPart === 'index.html' ){
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/products/heroBanners/threeTierDinning.jpg";
    } 
    else if (window.scrollY >= scrollTrigger && lastPart === 'index.html' ) {
        pinkHeader[0].classList.add('pinkHeader');    
        document.getElementById('logoBlack').style.display = 'none';
        document.getElementById('logoWhite').style.display = 'block';
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/products/heroBanners/twoTierWhite.jpg";
    }
    else if (window.scrollY >= scrollTrigger && lastPart !== 'index.html' ){
        whiteHeader[0].classList.add('white');
    } 
    else if (window.scrollY <= scrollTrigger && lastPart !== 'index.html' ){
        whiteHeader[0].classList.remove('white');
    }
    else {
        pinkHeader[0].classList.remove('pinkHeader');
        
        document.getElementById('logoBlack').style.display = 'block';
        document.getElementById('logoWhite').style.display = 'none';  
  }
};

let menu = document.getElementsByClassName("menuButton");
let seeMore = document.getElementsByClassName("viewMoreInfo");
let article = document.getElementsByClassName("hiddenInformation");
let dropdown = document.getElementsByClassName("dropdown");
let dropdownTwo = document.getElementsByClassName("dropdownTwo");
let closeMenu = document.getElementsByClassName('closeMenu');
let menuOne = document.getElementsByClassName('menuOne');
let menuTwo = document.getElementsByClassName('menuTwo');
let menuThree = document.getElementsByClassName('menuThree');
let menuFour = document.getElementsByClassName('menuFour');
let menuFive = document.getElementsByClassName('menuFive');
let menuSix = document.getElementsByClassName('menuSix');
let menuSeven = document.getElementsByClassName('menuSeven');



const openSpec = () => {
    article[0].classList.toggle("expanded");
    const expanded = article[0].classList.contains("expanded");
    if (expanded) {
        seeMore[0].innerHTML = "See Less";
    } else {
        seeMore[0].innerHTML = "See More";
    }
}; 

const openMenu = () => {
    if (lastPart !== 'index.html'){
        whiteHeader[0].classList.add('white');
    
    } else {
        pinkHeader[0].classList.toggle('white');
    }
    dropdown[0].classList.toggle("dropdownMenu");  
    dropdownTwo[0].classList.toggle("dropdownTwoMenu");
    closeMenu[0].classList.toggle("spinIn");
    menuOne[0].classList.toggle('menuIn');
    menuTwo[0].classList.toggle('menuIn');
    menuThree[0].classList.toggle('menuIn');
    menuFour[0].classList.toggle('menuIn');
    menuFive[0].classList.toggle('menuIn');
    menuSix[0].classList.toggle('menuIn');
    menuSeven[0].classList.toggle('menuIn');
};

const switchImage = (id) => {
    let switchTo = document.getElementById(id).src;
    document.getElementById('setImageOne').src = switchTo;
}

