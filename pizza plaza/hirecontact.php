<?php
$username=$_POST['username'];
$phno=$_POST['phno'];
$pin=$_POST['pincode'];
$address=$_POST['address'];
$gender=$_POST['gender'];    
$city=$_POST['city'];
$exp=$_POST['experience'];
$role=$_POST['roles'];
if(!empty($username) && !empty($phno))
{
  $host="localhost";
  $user="root";
  $pass="";
  $db="hiredetails";
  $conn = new mysqli($host,$user,$pass,$db);
  if($conn->connect_errno)
  {
    die('connect error ');
  }
  else{
    $INSERT = "INSERT Into appliedemp(Name,Phone,Address,Pincode,Gender,Role,City,Experience) Values (?,?,?,?,?,?,?,?)";

    $stmt= $conn->prepare($INSERT);
    $stmt->bind_param('sssisssi',$username,$phno,$address,$pin,$gender,$role,$city,$exp);
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
