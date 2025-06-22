<?php
// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit;
}

// Get JSON body
$data = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($data["name"]);
$email = htmlspecialchars($data["email"]);
$phone = htmlspecialchars($data["phone"]);
$location = htmlspecialchars($data["location"]);
$message = htmlspecialchars($data["message"]);

// Validate
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Invalid email format";
    exit;
}

// Prepare email
$to = "satheesh20046g@gmail.com";
$subject = "New Contact Form Submission";
$body = "
Name: $name\n
Email: $email\n
Phone: $phone\n
Location: $location\n
Message:\n$message
";

$headers = "From: Your Website <no-reply@yourdomain.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


// Send
if (mail($to, $subject, $body, $headers)) {
    echo "Success";
} else {
    http_response_code(500);
    echo "Failed to send email.";
}
?>
