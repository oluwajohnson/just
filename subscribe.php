<?php
// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the submitted email address and sanitize it
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

    // Validate the email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code
        http_response_code(400);
        echo "Invalid email address. Please try again.";
        exit;
    }

    // Set the recipient email address
    $recipient = "nep@rea.gov.ng"; // Replace with your email address

    // Set the email subject
    $subject = "New Newsletter Subscription";s

    // Build the email content
    $email_content = "You have a new subscriber:\n\nEmail: $email";

    // Build the email headers
    $email_headers = "From: Newsletter Signup <rea.gov.ng.com>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (OK) response code
        http_response_code(200);
        echo "Thank you for subscribing to our newsletter!";
    } else {
        // Set a 500 (internal server error) response code
        http_response_code(500);
        echo "Oops! Something went wrong, and we couldn't process your subscription. Please try again later.";
    }
} else {
    // Not a POST request
    http_response_code(403);
    echo "There was a problem with your submission. Please try again.";
}
?>
