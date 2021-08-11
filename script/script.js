
class SiteInteractions {
    /*class for all the sites interactions */
}

let scrollTrigger = 200;
let scrollTriggerTwo = 1450;
let scrollTriggerThree = 2800;
let scrollTriggerFour = 4800;
let scrollTriggerFive = 6000;

window.onscroll = function() {
    if (window.scrollY >= scrollTriggerFive){
         
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/products/heroBanners/threeTierDinning.jpg";
    
    } 
    
    else if (window.scrollY >= scrollTriggerFour){
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
        document.getElementById('heroContainer').style.minHeight = "100vh";
    }
    else {
        document.getElementById('headerContainer').style.backgroundColor = 'transparent';
        document.getElementById('logoBlack').style.display = 'block';
        document.getElementById('logoWhite').style.display = 'none';  
  }
};
