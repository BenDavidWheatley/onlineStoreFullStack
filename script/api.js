    function sendId(value) {
        window.location.href = "productDetails.html?id=" + value;     
    }
    function sendSetId(value) {
        window.location.href = "productSetDetails.html?id=" + value;     
    } 

    function loadDoc() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            let id = urlParams.get('id');
            console.log(id);
            let url = "http://localhost:8888/projects/OnlineStoreFullStack/api/products/" + id;
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

                            document.getElementById('detailImageOne').src = './assets/products/productImages/' + data[0]['image_one'];
                            document.getElementById('detailImageTwo').src = './assets/products/productImages/' + data[0]['image_two'];
                            document.getElementById('detailImageThree').src = './assets/products/productImages/' + data[0]['image_three'];
                            document.getElementById('detailImageFour').src = './assets/products/productImages/' + data[0]['image_four'];
                            document.getElementById('detailImageFive').src = './assets/products/productImages/' + data[0]['image_five'];
                           
                            console.log( data[0]['image_four']);
                            //
                        } else {
                            console.log('Error: ' + xhr.status);
                        }
                    }
                };        
                xhr.send();    
            return id;          
        } 
       
        function loadSetDoc() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            let id = urlParams.get('id');
            console.log(id);
            let url = "http://localhost:8888/projects/OnlineStoreFullStack/api/productSets/" + id;
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
                            document.getElementById('productSetDescription').innerHTML = data[0]['product_description'];
                            document.getElementById('productSetWidth').innerHTML = data[0]['width'];                         
                            document.getElementById('productSetDepth').innerHTML = data[0]['depth'];
                            document.getElementById('productSetHeight').innerHTML = data[0]['height'];
                            document.getElementById('productSetStockLevels').innerHTML = data[0]['depth'];

                            document.getElementById('detailSetImageOne').src = './assets/products/productImages/' + data[0]['image_one'];
                            document.getElementById('detailSetImageTwo').src = './assets/products/productImages/' + data[0]['image_two'];
                            document.getElementById('detailSetImageThree').src = './assets/products/productImages/' + data[0]['image_three'];
                            document.getElementById('detailSetImageFour').src = './assets/products/productImages/' + data[0]['image_four'];
                            document.getElementById('detailSetImageFive').src = './assets/products/productImages/' + data[0]['image_five'];
                            //
                        } else {
                            console.log('Error: ' + xhr.status);
                        }
                    }
                };        
                xhr.send();    
            return id;          
        } 
