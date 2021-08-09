
<?php
// We've created an index.php file
// In the following two lines, we are calling the two dependacies within the Slim which we are going to use of later 
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
echo "done";
require './vendor/autoload.php';// This is compulsory for our framework to work, but don't worry too much about how it works

$app = new \Slim\App;// We create an object of the Slim framework main app

// Define app routes
$app->get('test', function ($request, $response, $args) {
    return $response->write("Hello " . $args['name']);
});
// Run app
$app->run();

// Running the Slim framework, Get Method
/*$app->get('/test', function (Request $request, Response $response, array $args) {
    echo "text";
    require_once 'script/connect.php';// Calling the database connection file
    $sql = "select * from products where id = '4'";
    // SQL query
    $result = $conn->query($sql);

    if (!$result->connect_error) {
           echo 'Error: '.$result->connect_error;
           echo '<br>';
           echo 'Error: '.$result->connect_error;
           exit();
          };


    while ($row = $result->fetch_assoc()){// Loop through each field in the library table
        echo $row;
        $data[] = $row;// Store each field in an array
    }
    var_dump($data);
    return json_encode($data);// Translate this array into JSON
});
echo "this is also done";
$app->run();



/*
require_once "script/connect.php";

$sql = "select * from products WHERE id = 4";
$products = $mysqli->query ($sql);

if (!$products)die("Database access failed :" . $mysqli->error());

header('Content-Type: text/plain');

$tempNum = 0;

if ($products->num_rows > 0) {
    $row = $products->fetch_assoc();
    return json_encode($row);
     
    }



// Send the data back.

?>