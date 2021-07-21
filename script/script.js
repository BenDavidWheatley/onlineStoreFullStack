
let scrollTrigger = 200;
let scrollTriggerTwo = 1450;
let scrollTriggerThree = 2800;
let scrollTriggerFour = 4800;

window.onscroll = function() {
    if (window.scrollY >= scrollTriggerFour){
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/logos/socialBanner.png";
        
    } 
    else if (window.scrollY >= scrollTriggerThree){
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/products/heroBanners/threeTierOffice.png";
        

    } else if (window.scrollY >= scrollTriggerTwo){
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/products/heroBanners/threeTierDinning.png";

    } else if (window.scrollY >= scrollTrigger) {
        document.getElementById('headerContainer').style.backgroundColor = '#E8A69D';
        document.getElementById('logoBlack').style.display = 'none';
        document.getElementById('logoWhite').style.display = 'block';
        document.getElementById('heroImage').src= "../OnlineStoreFullStack/assets/products/heroBanners/twoTierWhite.png";
    }
     else {
    document.getElementById('headerContainer').style.backgroundColor = 'transparent';
    document.getElementById('logoBlack').style.display = 'block';
    document.getElementById('logoWhite').style.display = 'none';  
  }
};
