<?php



// We've created an index.php file
// In the following two lines, we are calling the two dependacies within the Slim which we are going to use of later 
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';// This is compulsory for our framework to work, but don't worry too much about how it works

$app = new \Slim\App();// We create an object of the Slim framework main app

echo 'test two';
// Running the Slim framework, Get Method
$app->get('test', function (Request $request, Response $response, array $args) {
    echo 'test';
    $id = 4;

    echo $id;

    die;
    require_once 'connect.php';// Calling the database connection file

    
    $query = "select * from products WHERE id ='$id'";// SQL query
    $result = $conn->query($query);

    while ($row = $result->fetch_assoc()){// Loop through each field in the library table
        $data[] = $row;// Store each field in an array
    }
    
    echo json_encode($data);// Translate this array into JSON
});