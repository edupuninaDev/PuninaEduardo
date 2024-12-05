<?php
class Operaciones
{
    function suma($num1, $num2)
    {
        echo $num1 + $num2;
    }
}

$sumar = new Operaciones();
$sumar->suma($_POST["num1"], $_POST["num2"]);