<?php

    $database= new mysqli("localhost","root","","appoinment");
    if ($database->connect_error){
        die("Connection failed:  ".$database->connect_error);
    }

?>