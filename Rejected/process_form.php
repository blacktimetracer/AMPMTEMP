<?php if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    //this is a checker
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        //if data is invalid
        echo "invalid input. please go back adn try again.";
        exit;
    }

    //recipient email
    $recipient = "medo.blackbusiness@gmail.com";

    //email subject
    $email_subject = "new contact from $name AMPM website";
    
    //email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message: \n$message\n";
    //headers
    $email_headers = "from: $name <$email> AMPM Website";
    

    //email sending
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        // If mail is sent, display a success message
        echo "Thank you! Your message has been sent.";
    } else {
        // If mail fails to send, display an error message
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    // If not a POST request, redirect to the form
    header("Location: index.html");
    exit;
}