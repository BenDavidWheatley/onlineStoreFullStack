<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
$product = new \Slim\App;

$product->get('/products/{id}', function (Request $request, Response $response, array $args) {
    require_once 'connect.php';
    $id = $request->getAttribute('id'); 
    $testSql = "SELECT * FROM products WHERE id = '$id'";
    $testConn = $mysqli->query($testSql);

    while ($row = $testConn->fetch_assoc()){
        $data[]= $row;
    }
    if (isset($data)) {
        header('Content-Type: application/json');
        echo json_encode($data, JSON_PRETTY_PRINT);
    }  
});

$product->get('/productSets/{id}', function (Request $request, Response $response, array $args) {
    require_once 'connect.php';
    $id = $request->getAttribute('id'); 
    $testSql = "SELECT * FROM product_sets WHERE id = '$id'";
    $testConn = $mysqli->query($testSql);

    while ($row = $testConn->fetch_assoc()){
        $data[]= $row;
    }
    if (isset($data)) {
        header('Content-Type: application/json');
        echo json_encode($data, JSON_PRETTY_PRINT);
    }  
});

$product->run();



