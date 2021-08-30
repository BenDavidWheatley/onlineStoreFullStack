
// These functions take the value of the button (value represents the id of the product on the database) and sends
// the value (as an attribute) and user to the new page. One function for product, the other for product sets

function sendId(value) {
    window.location.href = "productDetails.html?id=" + value;     
}
function sendSetId(value) {
    window.location.href = "productSetDetails.html?id=" + value;     
} 


// The next two functions run onload. They take the attribute from the URL (The id sent from the above functions) and sent that
// to the relevant endpoint.

function loadDoc() {

        // These variables take the id from the URL and concatenates full URL of the end point
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let id = urlParams.get('id');
        let url = "http://localhost:8888/projects/OnlineStoreFullStack/api/products/" + id;

        //Creates a new XMLHttpRequest and outputs the results of the endpoint.
        const xhr = new XMLHttpRequest();     
        xhr.open("GET", url, true);  
            xhr.onreadystatechange = function () {
                var DONE = 4;
                var OK = 200;
                if (xhr.readyState === DONE) {
                    if (xhr.status === OK) {
                        let array = xhr.responseText; 
                        let data = JSON.parse(array);                                                               
                        document.getElementById('productTitle').innerHTML = data[0]['product_name'];
                        document.getElementById('productCost').innerHTML = data[0]['cost'];
                        document.getElementById('productDescription').innerHTML = data[0]['product_description'];
                        document.getElementById('productWidth').innerHTML = data[0]['width'];                         
                        document.getElementById('productDepth').innerHTML = data[0]['depth'];
                        document.getElementById('productHeight').innerHTML = data[0]['height'];
                        document.getElementById('productStockLevels').innerHTML = data[0]['depth'];

                        document.getElementById('mainCloseupImage').src =  './assets/products/productImages/' + data[0]['image_one'];
                        document.getElementById('mainCloseupImage').alt = data[0]['alt_image_one'];

                        document.getElementById('detailImageOne').src = './assets/products/productImages/' + data[0]['image_one'];
                        document.getElementById('detailImageOne').alt = data[0]['alt_image_one'];
                        document.getElementById('detailImageTwo').src = './assets/products/productImages/' + data[0]['image_two'];
                        document.getElementById('detailImageTwo').alt = data[0]['alt_image_two'];
                        document.getElementById('detailImageThree').src = './assets/products/productImages/' + data[0]['image_three'];
                        document.getElementById('detailImageThree').alt = data[0]['alt_image_three'];
                        document.getElementById('detailImageFour').src = './assets/products/productImages/' + data[0]['image_four'];
                        document.getElementById('detailImageFour').alt = data[0]['alt_image_four'];
                        document.getElementById('detailImageFive').src = './assets/products/productImages/' + data[0]['image_five'];
                        document.getElementById('detailImageFive').alt = data[0]['alt_image_five'];                     
                        console.log(data[0]['image_four']);
                        document.getElementById('addToCart').id = id;
                    } else {
                        console.log('Error: ' + xhr.status);
                    }
                }
            };        
            xhr.send();    
        return id;          
    }      
function loadSetDoc() {

    // These variables take the id from the URL and concatenates full URL of the end point

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id');
    let url = "http://localhost:8888/projects/OnlineStoreFullStack/api/productSets/" + id;

    //Creates a new XMLHttpRequest and outputs the results of the endpoint.

    const xhr = new XMLHttpRequest();     
    xhr.open("GET", url, true);  
        xhr.onreadystatechange = function () {
            var DONE = 4;
            var OK = 200;
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    let array = xhr.responseText; 
                    let data = JSON.parse(array); 
                    document.getElementById('productSetTitle').innerHTML = data[0]['name'];
                    document.getElementById('productSetCost').innerHTML = data[0]['cost'];
                    document.getElementById('productSetDescription').innerHTML = data[0]['description'];
                    document.getElementById('productSetWidth').innerHTML = data[0]['width'];                         
                    document.getElementById('productSetDepth').innerHTML = data[0]['depth'];
                    document.getElementById('productSetHeight').innerHTML = data[0]['height'];
                    document.getElementById('productSetStockLevels').innerHTML = data[0]['stock'];                  
                    document.getElementById('setImageOne').src = './assets/products/productImages/' + data[0]['image_one'];
                    document.getElementById('setImageOne').alt = data[0]['alt_set_one'];
                    document.getElementById('detailSetImageOne').src = './assets/products/productImages/' + data[0]['image_one'];
                    document.getElementById('detailSetImageOne').alt = data[0]['alt_set_two'];
                    document.getElementById('detailSetImageTwo').src = './assets/products/productImages/' + data[0]['image_two'];
                    document.getElementById('detailSetImageTwo').alt = data[0]['alt_set_two'];
                    document.getElementById('detailSetImageThree').src = './assets/products/productImages/' + data[0]['image_three'];
                    document.getElementById('detailSetImageThree').alt = data[0]['alt_set_three'];
                    document.getElementById('detailSetImageFour').src = './assets/products/productImages/' + data[0]['image_four'];
                    document.getElementById('detailSetImageFour').alt = data[0]['alt_set_four'];
                    document.getElementById('detailSetImageFive').src = './assets/products/productImages/' + data[0]['image_five'];
                    document.getElementById('detailSetImageFive').alt = data[0]['alt_set_five'];
                    document.getElementById('addToCart').id = id;
                } else {
                    console.log('Error: ' + xhr.status);
                }
            }
        };        
        xhr.send();    
    return id;          
} 


//The following function sends the subscribers email to the end point. The API will check to see if the 
//  subscriber already exists. If they don't, then they are added to the database else an error ,message is returned.

function subscriber() {
    // Variables that get the email and concatenates it to the endpoint string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let email = urlParams.get('email');
    let url = "http://localhost:8888/projects/OnlineStoreFullStack/api/subscribe/" + email;

    //Creates a new XMLHttpRequest and outputs the results of the endpoint.  
    const xhr = new XMLHttpRequest();   
    xhr.open("GET", url, true);  
        xhr.onreadystatechange = function () {
            var DONE = 4;
            var OK = 200;
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    let email = xhr.responseText; 
                    console.log(email);
                    if (email === 'Subscriber already exists') {
                        document.getElementById('preExists').innerHTML = email;
                        document.getElementById('preExistMessage').innerHTML = 'Our records show that this email address is already a subscriber';
                    }else {
                        document.getElementById('email').innerHTML = email;
                    }    
                } else {
                    console.log('Error: ' + xhr.status);
                }
            }
        };        
    xhr.send();           
} 

//This function is for a new user. It will send the username to the endpoint and update the DOM.
//If the username already exists then a message will appear and the 'create account' button will be disabled

function checkUser() { 
    // Variables that get the username and concatenates it to the endpoint string
    const email = document.getElementById('newUserEmail').value;
    const url = "http://localhost:8888/projects/OnlineStoreFullStack/api/checkUser/" + email;

    //Creates a new XMLHttpRequest and outputs the results of the endpoint.  
    const xhr = new XMLHttpRequest();  
    xhr.open("GET", url, true);  
    xhr.onreadystatechange = function () {
        var DONE = 4;
        var OK = 200;

        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                let response = xhr.responseText; 
                let button = document.getElementById('newUserButton');

                //If else to determine if the button needs to be disabled.
                if (response === 'Username already exists') {                 
                    button.disabled = true;
                    button.style.backgroundColor = 'lightgrey';
                } else {
                    button.disabled = false;
                    button.style.backgroundColor = '#E8A69D';
                }              
                    console.log(response);           
                    document.getElementById('serverResponse').innerHTML = response;       
            } else {
                console.log('Error: ' + xhr.status);
            }
        }
    };        
    xhr.send();  
}


//If username is available, this function will take the information of the new user and send it to
//the endpoint which will then add them to the database

function newUser() {

    //Variables that capture the users information
    const firstName = document.getElementById('newUserName').value;
    const surname = document.getElementById('newUserSurname').value;
    const email = document.getElementById('newUserEmail').value;
    const password = document.getElementById('newUserPassword').value;
    const values = 'firstName=' + firstName + '&surname=' + surname +'&email=' + email +'&password=' + password;  
    const url = "http://localhost:8888/projects/OnlineStoreFullStack/api/newUser" 

    const xhr = new XMLHttpRequest(); 
    xhr.open("POST", url);  
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(values)      
} 


//Login function that sends the users information to the endpoint which checks the database for the correct username and
// password. If invalid the user will be notified.

function login() {
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('loginPassword').value;
    const values ='email=' + email + '&password=' + password;  
    const url = "http://localhost:8888/projects/OnlineStoreFullStack/api/login" 

    const xhr = new XMLHttpRequest(); 
    
    xhr.onreadystatechange = function () {
        var DONE = 4;
        var OK = 200;      
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    let response = xhr.responseText;    
                
                    if (response === 'Incorrect username or password') {
                        document.getElementById('returnLogin').innerHTML = response;
                    }   else {
                        //data is now an object and saved to session storage
                        let data = JSON.parse(response); 
                        sessionStorage.setItem('wheatleyUsers', data); 

                        //Checks last part of the URL, if logging in from the cart then it will 
                        //send the user to the checkout, else to the indexedDB.html
                        let url = window.location.href;
                        let lastPart = url.substr(url.lastIndexOf('/') + 1);
                        if (lastPart === 'loginCheckout.html') {
                            window.location.replace('http://localhost:8888/projects/OnlineStoreFullStack/checkout.html'); 
                        }else {
                            window.location.replace('http://localhost:8888/projects/OnlineStoreFullStack/index.html');  
                        } 
                    }
                }
            }  
        } 
    xhr.open("POST", url);  
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(values)      
} 


// displays all the items in the cart

//These variables will be updated and used to calculated grand total
let setTotal = 0;
let productTotal = 0

function cart () {
    let existingData = localStorage.getItem('wheatleyCart');

    // creates the array from the local storage
    let cartArray = existingData.split(',');
    // counting the array and determining the amount of products in local storage, there are only 3 bits of information saved for each product
    // dividing the length by 3 will give us the amount of products. The first value is always Null, math floor will remove this.
    let quantity = Math.floor(cartArray.length / 3);
    let id = 1;
    let amount = 2;
    let finish = 3;
    let prodId = 1;

    let prodAmount = 2;
    let prodFinish = 3;
    let cartListClass = 0;
        //loop through the array and query the database for the product information
        for (let x = 0; x < quantity; x++) { 
            
        let url = "http://localhost:8888/projects/OnlineStoreFullStack/api/productSets/" + cartArray[id];
    
        const xhr = new XMLHttpRequest();       
        // set to false so as to only go through next part of the loop once a response has happened.
        xhr.open("GET", url, false);  
        xhr.onreadystatechange = function () {
            var DONE = 4;
            var OK = 200;
            
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    // used to check which page we are on
                    let url = window.location.href;
                    let lastPart = url.substr(url.lastIndexOf('/') + 1);

                    let array = xhr.responseText; 
                    let data = JSON.parse(array); 

                    let prodCost = data[0]['cost'];
                    let prodName = data[0]['name'];                 
                    let prodImage = data[0]['image_one'];

                    // Get all the classes to update
                    let cartImage = document.getElementsByClassName('cartImage');
                    let cartProdTitle = document.getElementsByClassName('cartTitle');
                    let cartQuantity = document.getElementsByClassName('cartQuantity');
                    let cartCost = document.getElementsByClassName('cartCost');
                    let totalCost = document.getElementsByClassName('cartTotalCost');
                    let cartFinish = document.getElementsByClassName('cartFinish');
                    let updateCart = document.getElementsByClassName('updateSetCart');
                    let removeFromCart = document.getElementsByClassName('removeFromCart');

                    //update the DOM elements with date from the database and user input. Using the cartClassList to target 
                    // the index value of the class

                    
                    cartProdTitle[cartListClass].innerHTML = prodName;                
                    cartCost[cartListClass].innerHTML = prodCost;
                    cartCost[cartListClass].value = prodCost;
                    totalCost[cartListClass].innerHTML = prodCost * cartArray[prodAmount];
                    cartFinish[cartListClass].innerHTML = cartArray[prodFinish]

                    if (lastPart === 'cart.html') {
                        cartImage[cartListClass].src = './assets/products/productImages/' + prodImage;
                        updateCart[cartListClass].id = id;
                        removeFromCart[cartListClass].id = id;
                        cartQuantity[cartListClass].value = cartArray[prodAmount];
                    } else {
                        document.getElementById('checkoutButton').style.display = 'none';
                        cartQuantity[cartListClass].innerHTML = cartArray[prodAmount];
                    }
                    //update the setTotal before the clone resets the variables.
                    setTotal = setTotal + (prodCost * cartArray[prodAmount]);
                    //Create a clone of the container 
                    let divClone = document.getElementById('cartContainer'),
                    clone = divClone.cloneNode(true); // true means clone all childNodes and all event handlers
                    clone.id = 'cartContainer' + cartListClass;
                    document.getElementById('cloneCart').appendChild(clone);

                    //update the variables used to search through the cart array
                    prodId = prodId + 3;
                    prodAmount = prodAmount + 3;
                    prodFinish = prodFinish + 3;
                    
                    return setTotal;                
                } else {
                    console.log('Error: ' + xhr.status);
                }
            }
        };       
        xhr.send();  
        
        //update the variables used for the searching through the array
        id = id + 3;
        amount = amount + 3;
        finish = finish + 3;
        cartListClass = cartListClass + 1;     
    }          
}

function productCart () {

    //for comments see cart

    let existingData = localStorage.getItem('wheatleyCartProducts');

    let cartArray = existingData.split(',');
    let quantity = Math.floor(cartArray.length / 3);
    let id = 1;
    let amount = 2;
    let finish = 3;
    let prodId = 1;

    let prodAmount = 2;
    let prodFinish = 3;
    let cartListClass = 0;

        for (let x = 0; x < quantity; x++) {        
            let url = "http://localhost:8888/projects/OnlineStoreFullStack/api/products/" + cartArray[id];
        
            const xhr = new XMLHttpRequest();       
            xhr.open("GET", url, false);  
            xhr.onreadystatechange = function () {
            var DONE = 4;
            var OK = 200;
            
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    let url = window.location.href;
                    let lastPart = url.substr(url.lastIndexOf('/') + 1);

                    let array = xhr.responseText; 
                    let data = JSON.parse(array); 

                    let prodCost = data[0]['cost'];
                    let prodName = data[0]['product_name'];  
                    console.log(prodName);               
                    let prodImage = data[0]['image_one'];           

                    let cartImage = document.getElementsByClassName('cartProdImage');
                    let cartProdTitle = document.getElementsByClassName('cartProdTitle');
                    let cartQuantity = document.getElementsByClassName('cartProdQuantity');
                    let cartCost = document.getElementsByClassName('cartProdCost');
                    let totalCost = document.getElementsByClassName('cartProdTotalCost');
                    let cartFinish = document.getElementsByClassName('cartProdFinish');
                    let updateCart = document.getElementsByClassName('updateProdCart');
                    let removeFromCart = document.getElementsByClassName('removeProdFromCart');

                    
                    cartProdTitle[cartListClass].innerHTML = prodName;
                    cartQuantity[cartListClass].value = cartArray[prodAmount];
                    cartCost[cartListClass].innerHTML = prodCost;
                    cartCost[cartListClass].value = prodCost;
                    totalCost[cartListClass].innerHTML = prodCost * cartArray[prodAmount];
                    cartFinish[cartListClass].innerHTML = cartArray[prodFinish]

                    if (lastPart === 'cart.html') {
                        cartImage[cartListClass].src = './assets/products/productImages/' + prodImage;
                        updateCart[cartListClass].id = id;
                        removeFromCart[cartListClass].id = id;
                        cartQuantity[cartListClass].value = cartArray[prodAmount];
                    } else {
                        document.getElementById('checkoutButton').style.display = 'none';
                        cartQuantity[cartListClass].innerHTML = cartArray[prodAmount];
                    }

                    productTotal = productTotal + (prodCost * cartArray[prodAmount]) ;
                 
                    let divClone = document.getElementById('cartProdContainer'),
                    clone = divClone.cloneNode(true);
                    clone.id = 'cartProdContainer' + cartListClass;
                    document.getElementById('cloneProdCart').appendChild(clone);

                    prodId = prodId + 3;
                    prodAmount = prodAmount + 3;
                    prodFinish = prodFinish + 3;
 
                    return productTotal;            
                } else {
                    console.log('Error: ' + xhr.status);
                }
            }
        };       
        xhr.send();     
        id = id + 3;
        amount = amount + 3;
        finish = finish + 3;
        cartListClass = cartListClass + 1;           
    }           
}


//Function calculates the grand total

const grandTotal = () => { 
    let grandTotal = setTotal + productTotal;
    document.getElementById('grandTotal').innerHTML = grandTotal;
}





