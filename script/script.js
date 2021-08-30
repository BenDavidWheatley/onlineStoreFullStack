// The two tables on the database should really be consolidated into one 
// as this has caused a lot of doubling up on functions


/**************************** Variables ****************************/

//The following variables are the trigger points for the background image on the main index.html

let scrollTrigger = 200;
let scrollTriggerTwo = 1800;
let scrollTriggerThree = 3300;
let scrollTriggerFour = 5700;

//targets the header and allows for change of color on click and scroll

let pinkHeader = document.getElementsByClassName('mainHeader');
let whiteHeader = document.getElementsByClassName('headerColor');

//Checks URL

let url = window.location.href;
let lastPart = url.substr(url.lastIndexOf('/') + 1);

// targets the back to the top button

let backToTop = document.getElementsByClassName('scrollImage');

//The following variables target areas that need expanding or moving into view, i.e the menu.

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
let bioInfoDrop = document.getElementsByClassName('aboutStaffMember');
let seeMoreStaffInfo = document.getElementsByClassName("staffViewMore");


/****************************   FUNCTIONS   ****************************/


//The following function changes the background image of the index.html and runs on scrolls

window.onscroll = function() {
    
        if (window.scrollY >= scrollTriggerFour  && lastPart === 'index.html' ){
            document.getElementById('heroImage').src= "./assets/logos/socialBanner.jpg";        
        } 
        else if (window.scrollY >= scrollTriggerThree  && lastPart === 'index.html' ){
            document.getElementById('heroImage').src= "./assets/products/heroBanners/threeTierOffice.jpg";
        } 
        else if (window.scrollY >= scrollTriggerTwo  && lastPart === 'index.html' ){
            document.getElementById('heroImage').src= "./assets/products/heroBanners/threeTierDinning.jpg";
        } 
        else if (window.scrollY >= scrollTrigger && lastPart === 'index.html' ) {
            pinkHeader[0].classList.add('pinkHeader');    
            document.getElementById('logoBlack').style.display = 'none';
            document.getElementById('logoWhite').style.display = 'block';
            document.getElementById('heroImage').src= "./assets/products/heroBanners/twoTierWhite.jpg";
            backToTop[0].classList.add('scrollBackShow');     
        }
        else if (window.scrollY >= scrollTrigger && lastPart !== 'index.html' ){
            whiteHeader[0].classList.add('white');
            backToTop[0].classList.add('scrollBackShow');      
        } 
        else if (window.scrollY <= scrollTrigger && lastPart !== 'index.html' ){
            whiteHeader[0].classList.remove('white');
            backToTop[0].classList.remove('scrollBackShow');
        }
        else {
            backToTop[0].classList.remove('scrollBackShow');
            pinkHeader[0].classList.remove('pinkHeader');
            document.getElementById('logoBlack').style.display = 'block';
            document.getElementById('logoWhite').style.display = 'none';  
    }
    }   
;


// The following three functions create a transition that expands elements or brings them into, i.e the menu
// It does this by toggling a class

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

const openBio = (value) => {
    let num = value;
    console.log (bioInfoDrop[num]);
    bioInfoDrop[num].classList.toggle("expandAbout");

    const expanded = bioInfoDrop[num].classList.contains("expanded");
    if (expanded) {
        seeMoreStaffInfo[num].innerHTML = "view more";
    } else {
        seeMoreStaffInfo[num].innerHTML = "View less";
    }
}


// These two function switches the large image with the small, when clicking the small image on the productSetDetails.html and productDetails.html

const switchImage = (id) => {
    let switchTo = document.getElementById(id).src;
    let alt = document.getElementById(id).alt;
    document.getElementById('setImageOne').src = switchTo;
    document.getElementById('setImageOne').alt = alt;
}

const switchProductImage = (id) => {
    let switchTo = document.getElementById(id).src;
    let alt = document.getElementById(id).alt;
    document.getElementById('mainCloseupImage').src = switchTo;
    document.getElementById('mainCloseupImage').alt = alt;
}


// This creates a smooth scroll to the top of the page when the back to top button is clicked.

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'}); 
    }


// These two functions swap the recommended products image on the productSetDetails.html and productDetails.html pages
//It is too long and needs automating with the database. But it does work for now.

const changeSetRecommendation = () => {

    //variables for each section of the three recommendations.
    let recommendOneImageOne = document.getElementById('recommendOneImageOne');
    let recommendOneImageTwo = document.getElementById('recommendOneImageTwo');
    let recommendOneTitle = document.getElementById('recommendOneTitle');
    let recommendOneCost = document.getElementById('recommendOneCost');
    let buttonOne = document.getElementById('recommendOneButton');

    let recommendTwoImageOne = document.getElementById('recommendTwoImageOne');
    let recommendTwoImageTwo = document.getElementById('recommendTwoImageTwo');
    let recommendTwoTitle = document.getElementById('recommendTwoTitle');
    let recommendTwoCost = document.getElementById('recommendTwoCost');
    let buttonTwo = document.getElementById('recommendTwoButton');

    let recommendThreeImageOne = document.getElementById('recommendThreeImageOne');
    let recommendThreeImageTwo = document.getElementById('recommendThreeImageTwo');
    let recommendThreeTitle = document.getElementById('recommendThreeTitle');
    let recommendThreeCost = document.getElementById('recommendThreeCost');
    let buttonThree = document.getElementById('recommendThreeButton');

    let lastPartOfURL = url.substr(url.lastIndexOf('/') + 1);

    if (lastPartOfURL === 'productSetDetails.html?id=8') {
        recommendOneImageOne.src = './assets/products/productImages/DSC_9184.jpg';
        recommendOneImageTwo.src = './assets/products/productImages/DSC_9190.jpg';
        recommendOneTitle.innerHTML = 'The Forma Dining Room - Three Tier.';
        recommendOneCost.innerHTML = '£610';
        buttonOne.value = 4;
    }else if (lastPartOfURL === 'productSetDetails.html?id=9') {
        recommendTwoImageOne.src = './assets/products/productImages/DSC_9184.jpg';
        recommendTwoImageTwo.src = './assets/products/productImages/DSC_9190.jpg';
        recommendTwoTitle.innerHTML = 'The Forma Dining Room - Three Tier.';
        recommendTwoCost.innerHTML = '£610';
        buttonTwo.value = 4;
    }else if (lastPartOfURL === 'productSetDetails.html?id=6'){
        recommendThreeImageOne.src = './assets/products/productImages/DSC_9184.jpg';
        recommendThreeImageTwo.src = './assets/products/productImages/DSC_9190.jpg';
        recommendThreeTitle.innerHTML = 'The Forma Dining Room - Three Tier.';
        recommendThreeCost.innerHTML = '£610';
        buttonThree.value = 4;
    }
}
const changeProductRecommendation = () => {
    let recommendOneImageOne = document.getElementById('recommendOneImageOne');
    let recommendOneImageTwo = document.getElementById('recommendOneImageTwo');
    let recommendOneTitle = document.getElementById('recommendOneTitle');
    let recommendOneCost = document.getElementById('recommendOneCost');
    let buttonOne = document.getElementById('recommendOneButton');

    let recommendTwoImageOne = document.getElementById('recommendTwoImageOne');
    let recommendTwoImageTwo = document.getElementById('recommendTwoImageTwo');
    let recommendTwoTitle = document.getElementById('recommendTwoTitle');
    let recommendTwoCost = document.getElementById('recommendTwoCost');
    let buttonTwo = document.getElementById('recommendTwoButton');

    let recommendThreeImageOne = document.getElementById('recommendThreeImageOne');
    let recommendThreeImageTwo = document.getElementById('recommendThreeImageTwo');
    let recommendThreeTitle = document.getElementById('recommendThreeTitle');
    let recommendThreeCost = document.getElementById('recommendThreeCost');
    let buttonThree = document.getElementById('recommendThreeButton');

    let lastPartOfURL = url.substr(url.lastIndexOf('/') + 1);

    if (lastPartOfURL === 'productDetails.html?id=4') {
        recommendOneImageOne.src = './assets/products/productImages/DSC_9368.jpg' ;
        recommendOneImageTwo.src = './assets/products/productImages/DSC_9367.jpg';
        recommendOneTitle.innerHTML = 'The Forma adjustable display box.';
        recommendOneCost.innerHTML = '£105';
        buttonOne.value = 14;
    }else if (lastPartOfURL === 'productDetails.html?id=11') {
        recommendTwoImageOne.src = './assets/products/productImages/DSC_9368.jpg' ;
        recommendTwoImageTwo.src = './assets/products/productImages/DSC_9367.jpg';
        recommendTwoTitle.innerHTML = 'The Forma adjustable display box.';
        recommendTwoCost.innerHTML = '£105';
        buttonTwo.value = 14;
    }else if (lastPartOfURL === 'productDetails.html?id=19'){
        recommendThreeImageOne.src = './assets/products/productImages/DSC_9368.jpg' ;
        recommendThreeImageTwo.src = './assets/products/productImages/DSC_9367.jpg';
        recommendThreeTitle.innerHTML = 'The Forma adjustable display box.';
        recommendThreeCost.innerHTML = '£105';
        buttonThree.value = 14;
    }
}


// These two functions are converting the relevant data of the product and converting it into JSON
// saving it into the cart.json file
// Using two functions for each of the tables, products and productSets.


//Adding Sets

const addToCart = (value) => {
    // saves the information of the item added to cart;
    console.log(value);
    let checkQuant = document.getElementById('quantity').value;

    // check if quantity has a value
    if (!checkQuant) {
        document.getElementById('pleaseAddQuantity').innerHTML = 'Please add a quantity';
    } else {
        let id = value;
        let quantity = document.getElementById('quantity').value;
        let finish = document.getElementById('finish').value; 

        //fetches the existing data from the local storage
        let existingData = localStorage.getItem('wheatleyCart');
    
        //adds the new data to the existing
        let updatedData = existingData + ',' + id + ',' + quantity + ',' + finish ;

        // saves the new data to local storage
        localStorage.setItem('wheatleyCart', updatedData);
        location.reload();
    }
}

//AddingProduct

const addProductToCart = (value) => {
    // see addToCart for comments;

    let checkQuant = document.getElementById('prodQuant').value;
    if (!checkQuant) {
        document.getElementById('pleaseAddQuantity').innerHTML = 'Please add a quantity';
    } else {
        let id = value;
        let quantity = document.getElementById('prodQuant').value;
        let finish = document.getElementById('finish').value; 
        let existingData = localStorage.getItem('wheatleyCartProducts');
        let updatedData = existingData + ',' + id + ',' + quantity + ',' + finish ;

        localStorage.setItem('wheatleyCartProducts', updatedData);
        location.reload();
    }
}


// these functions update the quantity in the cart 

const updateSetQuantity = (value) => {
    // gets the new value of quantity
    let productQuant = value.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value;
    // this will target the correct index for the quantity of this product
    let id = parseInt(value.nextElementSibling.id) + 1;
    let existingData = localStorage.getItem('wheatleyCart');
    let cartArray = existingData.split(',');

    //change the quantity
    cartArray[id] = productQuant;

    // update local storage
    localStorage.setItem('wheatleyCart', cartArray);
    // refreshes the page to update the DOM
    location.reload();
}

const updateQuantity = (value) => {
    // for comments see udpateSetQuantity
    let productQuant = value.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value;
    console.log(productQuant);
    let id = parseInt(value.nextElementSibling.id) + 1;
    let existingData = localStorage.getItem('wheatleyCartProducts');
    let cartArray = existingData.split(',');

    cartArray[id] = productQuant;

    localStorage.setItem('wheatleyCartProducts', cartArray);
    location.reload();
}


// These functions remove the items from the cart by updated the local storage

const removeFromCart = (value) =>{
    let productInfo = parseInt(value);
    let existingData = localStorage.getItem('wheatleyCart');
    let cartArray = existingData.split(',');

    //Splices the array at the id point and the next two places as these are associated with the product.
    cartArray.splice(productInfo, 3);

    localStorage.setItem('wheatleyCart', cartArray);
    // refreshes the page to update the DOM
    location.reload();
}

const removeProductFromCart = (value) =>{
    // see removeFromCart for comments

    let productInfo = parseInt(value);
    let existingData = localStorage.getItem('wheatleyCartProducts');
    let cartArray = existingData.split(',');
    cartArray.splice(productInfo, 3);
    localStorage.setItem('wheatleyCartProducts', cartArray);
    location.reload();
}


// This function adds the amount of products that are in the cart to the menu cart title

const numberInCart = () => {

    // pulls info in from local storage, divides it by 3 as each 3 items within the storage is part of the one product
    let existingData = localStorage.getItem('wheatleyCart');
    let existingProductData = localStorage.getItem('wheatleyCartProducts');
    let setArray = existingData.split(',');
    let productArray = existingProductData.split(',');
    let quantity = Math.floor(productArray.length / 3);
    let prodQuant = Math.floor(setArray.length / 3);

    console.log(quantity + prodQuant);

    //checks to see if there is more then 0 items in there 

    if (quantity !== 0) {
        console.log('block');
        document.getElementById('cartQuant').innerHTML = quantity + prodQuant;
        document.getElementById('cartQuant').style.display = 'block';
    } else {
        document.getElementById('cartQuant').style.display = 'none';
    }    
}


// This function checks to see if the cart is empty 

const emptyCart = () => {
    let existingData = localStorage.getItem('wheatleyCart').length;
    let existingProductData = localStorage.getItem('wheatleyCartProducts').length;
    let total = existingData + existingProductData;
    if (total < 9){
        document.getElementById('emptyCart').innerHTML = 'Your cart is empty';
        document.getElementById('checkoutButton').style.display = 'none';
    } else {
        document.getElementById('checkoutButton').style.display = 'block';
    }

}


//This function sends the user to the checkout when checkout button is clicked.
//If the user is not signed in then it will send them to the login page

const checkout = () => {
    let loggedIn = sessionStorage.getItem('wheatleyUsers');

    // Checks to see if logged in
    if (!loggedIn) {
        window.location.replace('http://localhost:8888/projects/OnlineStoreFullStack/loginCheckout.html');   
    }else {
        window.location.replace('http://localhost:8888/projects/OnlineStoreFullStack/checkout.html');   
    }
}

