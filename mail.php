<?php
  if(isset($_POST['CSubmit'])){
      $FullName=$_POST['FullName'];
      $Email=$_POST['Email'];
      $ContactNo=$_POST['ContactNo'];
      $ServiceType=$_POST['ServiceType'];
      $Message=$_POST['Message'];
      
      $to='dsatish65@gmail.com';
      $subject='Form Submission';
      $message="FullName: ".$Fullname."\n"."ContactNo: ".$ContactNo."\n"."Wrote the following: "."\n\n".$Message;
      $headers="Form: ".$Email;
      
      if(mail($to, $subject, $message, $headers)){
          echo "<h1>Sent Successfully! To MR.SATISH DHAR DUBEY, THANK YOU"." ".$FullName.",We will contact you shortly!<h1>";
      }
      else{
          echo "Something went wrong!";
          
      }


?>