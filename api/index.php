<?php

// I have chosen procedural programing for the ph due to the methods I used for prepared statements.
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
$wheatleyStore = new \Slim\App;

//The following function pulls the information form the products table in the database but using the sent ID
// in the URL

$wheatleyStore->get('/products/{id}', function (Request $request, Response $response, array $args) {
    require_once 'connect.php';
    //value of set taken from the attribute of the URL
    $id = $request->getAttribute('id'); 
     // created a template 
    $sql = "SELECT * FROM products WHERE id = ?;";
    // create a prepared statement
    $stmt = mysqli_stmt_init($mysqli);
     //Prepare the prepared statement, checking for failure first
    if(!mysqli_stmt_prepare($stmt, $sql)) {
        echo 'SQL statements failed';
    } else {
        // bind parameters to the placeholders
        mysqli_stmt_bind_param($stmt, "s", $id );
        //run parameters inside database
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        //While loop to put all the information into an object
        while ($row = mysqli_fetch_assoc($result)){
            $data[]= $row;           
        }
        //if the array has information in it then the object gets sent as JSON 
        if (isset($data)) {
            header('Content-Type: application/json');
            echo json_encode($data, JSON_PRETTY_PRINT);
        }  
    }
});

//The following function pulls the information form the products_sets table in the database but using the sent ID
// in the URL

$wheatleyStore->get('/productSets/{id}', function (Request $request, Response $response, array $args) {
    //For info about each of these sections, see the comments in the $wheatleyStore->get('/products/{id}' above
    require_once 'connect.php';
    $id = $request->getAttribute('id');   
    $sql = "SELECT * FROM product_sets WHERE id =?;";
    $stmt = mysqli_stmt_init($mysqli);

    if(!mysqli_stmt_prepare($stmt, $sql)) {
        echo 'SQL statements failed';
    } else {
        mysqli_stmt_bind_param($stmt, "s", $id );
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        while ($row = mysqli_fetch_assoc($result)){
            $data[]= $row;          
        }
        if (isset($data)) {
            header('Content-Type: application/json');
            echo json_encode($data, JSON_PRETTY_PRINT);
        }  
    }
});

// This function updates the subscribers table of the database. 
// If the user already exists then an error message will be returned

$wheatleyStore->get('/subscribe/{email}', function (Request $request, Response $response, array $args) {
    require_once 'connect.php';    
    $email = $request->getAttribute('email');
    $sql = "SELECT * FROM subscribers WHERE email = ?;";
    $stmt = mysqli_stmt_init($mysqli);

    if(!mysqli_stmt_prepare($stmt, $sql)) {
        echo 'SQL statements failed';
    } else {
        mysqli_stmt_bind_param($stmt, "s", $email );
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $existing = mysqli_fetch_assoc($result);

        if ($email === $existing['email'] ) {
            echo 'Subscriber already exists';
        } else { 
            $sqlTwo = "INSERT INTO subscribers (email) VALUE (?)";
            $stmtTwo = mysqli_stmt_init($mysqli);

            if (!mysqli_stmt_prepare($stmtTwo, $sqlTwo )) {
                echo "SQL Error";
            } else {
                mysqli_stmt_bind_param($stmtTwo, "s" , $email);
                mysqli_stmt_execute($stmtTwo);
            }
        } 
    }
});  

// This function adds a new user to the database. 
// It first checks to see if the user already exists before updated the table.
// Although we already have a function dedicated to updating the DOM, checking if the user already exists, this
// is here as a secondary measure

$wheatleyStore->post('/newUser', function (Request $request, Response $response, array $args) {
    require_once 'connect.php';    

    $name = $_POST['firstName'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];

    //We hash the password so that no one would be able to see if they hacked into the database
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $sql = "SELECT * FROM users WHERE email = ?;";
    $stmt = mysqli_stmt_init($mysqli);

    if(!mysqli_stmt_prepare($stmt, $sql)) {
        echo 'SQL statements failed';
    } else {
        mysqli_stmt_bind_param($stmt, "s", $email );
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $existing = mysqli_fetch_assoc($result);

        if ($email === $existing['email'] ) {
            echo 'User already exists';
        } else { 
            $sqlTwo = "INSERT INTO users (first_name, last_name, user_password, email) VALUES (?, ?, ?, ?);";
            $stmtTwo = mysqli_stmt_init($mysqli);

            if (!mysqli_stmt_prepare($stmtTwo, $sqlTwo )) {
                echo "SQL Error";
            } else {
                mysqli_stmt_bind_param($stmtTwo, "ssss" , $name, $surname, $password,  $email);
                mysqli_stmt_execute($stmtTwo);
                echo 'New account created, welcome to Wheatley Studios';  
            }
        } 
    }});

// This function checks the database to see if the username is available

$wheatleyStore->get('/checkUser/{email}', function (Request $request, Response $response, array $args) {
    //We are using this query to check if the user already exists, updated the create account page before submission
    require_once 'connect.php';    
    $email = $request->getAttribute('email');
    $sql = "SELECT * FROM users WHERE email = ?;";
    $stmt = mysqli_stmt_init($mysqli);

    if(!mysqli_stmt_prepare($stmt, $sql)) {
        echo 'SQL statements failed';
    } else {
        mysqli_stmt_bind_param($stmt, "s", $email );
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $existing = mysqli_fetch_assoc($result);

        if ($email != $existing['email']){
            echo 'Username is available';
        }else {
            echo 'Username already exists';
        }
    }
});

// This function checks the database against the input of the username and password

$wheatleyStore->post('/login', function (Request $request, Response $response, array $args) {
    require_once 'connect.php';    
    $email = $_POST['email'];
    $password = $_POST['password'];
    $sql = "SELECT * FROM users WHERE email = ?;";
    $stmt = mysqli_stmt_init($mysqli);

    if(!mysqli_stmt_prepare($stmt, $sql)) {
        echo 'SQL statements failed';
    } else {
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
       
       $existing = mysqli_fetch_assoc($result);
        
        //We verify the hashed password in the database with the one that the user is trying to login with.
        // It will return either a 0 or 1. We also will be unable to see what the password is.
        $DBPassword = $existing['user_password'];       
        $verify = password_verify($password, $DBPassword);
        if ($verify != 1) {
            echo 'Incorrect username or password';
        } else {  
            $userInfo = array();       
            //Saving the information in array in this manor instead of a while loop as before. When it is a while loop
            //there is a syntax error within the data and cannot be used on the client side, this works however.  
            array_push($userInfo, $existing['id'], $existing['email'], $existing['first_name'], $existing['last_name'], $existing['phone_number'], $existing['delivery_address'], $existing{'billing_address'});
    
            header('Content-Type: application/json');
            echo json_encode($userInfo, JSON_PRETTY_PRINT);
        }
    }
});

$wheatleyStore->post('/delivery', function (Request $request, Response $response, array $args) {
    require_once 'connect.php';  
    $id = $_POST['id'];  
    $delivery = $_POST['delivery'];
    $billing = $_POST['billing'];
    $sets = $_POST['sets'];
    $products = $_POST['products'];
  
    $sql = "SELECT * FROM users WHERE id = ?;";
    $stmt = mysqli_stmt_init($mysqli);



    if(!mysqli_stmt_prepare($stmt, $sql)) {
        echo 'SQL statements failed';
    } else {
        mysqli_stmt_bind_param($stmt, "s", $id );
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $existing = mysqli_fetch_assoc($result);

        $sqlTwo = "UPDATE users SET delivery_address = ?, billing_address = ? WHERE id = ?;";    
        $stmtTwo = mysqli_stmt_init($mysqli);

        if (!mysqli_stmt_prepare($stmtTwo, $sqlTwo )) {
            echo "SQL Error";
           
        } else {
            mysqli_stmt_bind_param($stmtTwo, "sss", $delivery, $billing, $id);
            mysqli_stmt_execute($stmtTwo);
            echo 'User updated';

            $sqlThree = 'INSERT INTO orders (users_id, product_sets, products) VALUES (?,?,?);';
            $stmtThree =  mysqli_stmt_init($mysqli);
            if(!mysqli_stmt_prepare($stmtThree, $sqlThree)) {
                echo 'error uploading order';
            } else {
                mysqli_stmt_bind_param($stmtThree, "sss", $id, $sets, $products);
                mysqli_stmt_execute($stmtThree);
                echo 'order created';
            }
        }
        
    }});

$wheatleyStore->run();



