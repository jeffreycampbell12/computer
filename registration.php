<?php
//get data from form  

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$genderchioce1 = $_POST['genderchioce1'];
$genderchioce2 = $_POST['genderchioce2'];
$genderchioce3 = $_POST['genderchioce3'];
$email= $_POST['email'];
$month= $_POST['month'];
$day= $_POST['day'];
$date= $_POST['date'];
$education= $_POST['education'];
$training= $_POST['training'];
$agree= $_POST['agree'];

$to = "timohhopemugri@gmail.com";

$subject = "Mail From website";
$txt ="Firstname = ". $firstname . "\r\n  Lastname = " . $lastname . "\r\n  Genderchioce1 = " . $genderchioce1 . "\r\n Genderchioce2  = " . $genderchioce2 .
 "\r\n  Genderchioce3 = " . $genderchioce3 . "\r\n  Email = " . $email . "\r\n  Month = " . $month . "\r\n  Day = " . $day .  "\r\n Date = " . $date . 
  "\r\n  Education = " . $education . "\r\n training =" . $training. " \r\n Agree =". $agree;
  
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: jeffreycampbellthomson@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>