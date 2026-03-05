<?php
$dsn = "mysql:host=localhost;dbname=nepreanew_eep2_dataroom";
$username = "nepreanew_eep2_dataroom";
$password = "NXsq[_,F;^,m";

try {
    $db = new PDO($dsn, $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Improve error handling
} catch (PDOException $e) {
    error_log("Database connection error: " . $e->getMessage()); // Log error
    echo "An error occurred. Please try again later."; // User-friendly message
    exit; // Stop execution
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(filter_input(INPUT_POST, 'name'));
    $email = htmlspecialchars(filter_input(INPUT_POST, 'email'));
    $company = htmlspecialchars(filter_input(INPUT_POST, 'company'));

    try {
        $query = 'INSERT INTO terms_and_condition_readers (name, email, company) VALUES (:name, :email, :company)';
        $stmt = $db->prepare($query);
        $stmt->bindValue(':name', $name);
        $stmt->bindValue(':email', $email);
        $stmt->bindValue(':company', $company);
        $stmt->execute();
        $stmt->closeCursor();

        header("Location: eep2-dataroom.html?status=success");
        exit; // Important: stop further execution after redirection
    } catch (PDOException $e) {
        error_log("Database insertion error: " . $e->getMessage());
        echo "An error occurred while saving data. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>