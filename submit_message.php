<?php
// Include the database connection
include("connection.php");

// Check if the form is submitted via POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data and sanitize it
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the form data (basic validation)
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Prepare the SQL query to insert the data into the database
        $sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";

        // Prepare the statement
        $stmt = $database->prepare($sql);

        // Bind parameters to the SQL query
        $stmt->bind_param("sss", $name, $email, $message);

        // Execute the query
        if ($stmt->execute()) {
            // echo "Message sent successfully!";
        } else {
            echo "Failed to send the message.";
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Please fill in all fields and provide a valid email.";
    }
}
?>
