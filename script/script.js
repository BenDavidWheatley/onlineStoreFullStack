

var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementById('headerContainer').style.backgroundColor = '#E8A69D';
  } else {
    document.getElementById('headerContainer').style.backgroundColor = 'transparent';
  }
};


