<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "backend", "9fXuTDq4op2Rxs=D]U", "Backend");

if ($conn->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$result = $conn->query("SELECT * FROM Vendors");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"vname":"'  . $rs["name"] . '",';
    $outp .= '"vaddress1":"'   . $rs["add1"] . '",';
    $outp .= '"vaddress2":"'   . $rs["add2"] . '",';
    $outp .= '"vaddress3":"'   . $rs["add3"] . '",';
    $outp .= '"vphone":"'. $rs["phone"]     . '"}'; 
}
$outp ='{"vendors":['.$outp.']}';
$conn->close();

echo($outp);
?>