<?php
    $errors = '';
    $myemail = 'hello@riyad.ninja';
    if(empty($_POST['name']) ||
       empty($_POST['email'])  ||
       empty($_POST['message']))
    {
    $errors .= "\n Error: Required Field";
    }
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    if( empty($errors)){
        $to = $myemail;
        $email_budget = "A New Message Awaits: {$name}";
        $email_body='<h3>You have received a new message. Details are given below.</h3>
        <table width="100%" border="1" cellspacing="1" cellpadding="1">
        <tr><td style="padding:10px;">Email: </td><td style="padding:10px;">'.$email.'</td></tr>
        <tr><td style="padding:10px;">Looking For: </td><td style="padding:10px;">'.$looking_op.'</td></tr>
        <tr><td style="padding:10px;">Budget: </td><td style="padding:10px;">'.$budget.'</td></tr>
        <tr><td style="padding:10px;">Name: </td><td style="padding:10px;">'.$name.'</td></tr>
        <tr><td style="padding:10px;">Message: </td><td style="padding:10px;">'.$message.'</td></tr>
        </table>';

        $headers = "From: " . $email. "\r\n";
        $headers .= "Reply-To: ". strip_tags($_POST['req-email']) . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        mail($to, $email_budget, $email_body, $headers);
    }
?>