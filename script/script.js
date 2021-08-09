function loadDoc() {
    console.log('clicked');
// Initialize the HTTP request.
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'send.php');

    // Track the state changes of the request.
    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        console.log(DONE);
        console.log(OK);
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                document.getElementById('demo').innerHTML = this.responseText;
            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }
        }
    }
};










class SiteInteractions {
    /*class for all the sites interactions */
}

let scrollTrigger = 200;
let scrollTriggerTwo = 1450;
let scrollTriggerThree = 2800;
let scrollTriggerFour = 4800;

window.onscroll = function() {
    if (window.scrollY >= scrollTriggerFour){
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/logos/socialBanner.jpg";        
    } 
    else if (window.scrollY >= scrollTriggerThree){
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/products/heroBanners/threeTierOffice.jpg";
    } 
    else if (window.scrollY >= scrollTriggerTwo){
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/products/heroBanners/threeTierDinning.jpg";
    } 
    else if (window.scrollY >= scrollTrigger) {
        document.getElementById('headerContainer').style.backgroundColor = '#E8A69D';
        document.getElementById('logoBlack').style.display = 'none';
        document.getElementById('logoWhite').style.display = 'block';
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/products/heroBanners/twoTierWhite.jpg";
    }
    else {
        document.getElementById('headerContainer').style.backgroundColor = 'transparent';
        document.getElementById('logoBlack').style.display = 'block';
        document.getElementById('logoWhite').style.display = 'none';  
  }
};
