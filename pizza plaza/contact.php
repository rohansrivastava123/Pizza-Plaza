<?php
$username=$_POST['username'];
$phno=$_POST['phno'];
$pin=$_POST['pin'];
$address=$_POST['address'];
$order=$_POST['order'];    
if(!empty($username) && !empty($phno))
{
  $host="localhost";
  $user="root";
  $pass="";
  $db="pizzaplaza_orders";
  $conn = new mysqli($host,$user,$pass,$db);
  if($conn->connect_errno)
  {
    die('connect error ');
  }
  else{
    $INSERT = "INSERT Into order_detail(name,phno,pincode,address,orders) Values (?,?,?,?,?)";

    $stmt= $conn->prepare($INSERT);
    $stmt->bind_param('siiss',$username,$phno,$pin,$address,$order);
    $stmt->execute();
    $stmt->close();
    $conn->close();
    
  }
}
else
{
  echo "all fields are required";
  die();
}
?>
