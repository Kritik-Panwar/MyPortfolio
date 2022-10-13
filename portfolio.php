<?php
$server = "localhost";
$username = "root";
$password = "";

$con = mysqli_connect($server,$username,$password);

// if(!$con){
//     die("Connection failed".mysqli_connect_error());
// }
// else{
//     echo "Successfully connected";
// }

$name = $_POST['myname'];
$email = $_POST['myemail'];
$query = $_POST['myquery'];

$sql = "INSERT INTO `portfolio`.`myportfolio`(`name`, `email`, `query`) VALUES ('$name','$email','$query')";

if($con ->query($sql) == true){
    
}
else{
    echo "ERROR: $sql <br> $con->error";
}
$con->close();
?>