<?php
function loginBd(){
  {
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "nwi";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
  }

?>