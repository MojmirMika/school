<?php
include 'db.php';

$sql = "SELECT * FROM auto WHERE typ_auta = 'Porsche 911'";
$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);

echo json_encode($result);
?>
