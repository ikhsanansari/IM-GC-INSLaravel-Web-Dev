<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>String PHP</title>
</head>
<body>
    <h1>Berlatih String PHP</h1>

    <?php
    echo "<h3> Soal No 1</h3>";

    $first_sentence = "Hello PHP!";
    $second_sentence = "I'm ready for the challenges";

    echo "<p>String 1: \"$first_sentence\"</p>";
    echo "Panjang string: " . strlen($first_sentence) . ", Jumlah kata: " . str_word_count($first_sentence) . "<br>";

    echo "<p>String 2: \"$second_sentence\"</p>";
    echo "Panjang string: " . strlen($second_sentence) . ", Jumlah kata: " . str_word_count($second_sentence) . "<br>";

    echo "<h3> Soal No 2</h3>";

    $string2 = "I love PHP";
    echo "<label>String: </label> \"$string2\" <br>";
    echo "Kata pertama: " . substr($string2, 0, 1) . "<br>";
    echo "Kata kedua: " . substr($string2, 2, 4) . "<br>";
    echo "Kata ketiga: " . substr($string2, 7, 3) . "<br>";

    echo "<h3> Soal No 3 </h3>";

    $string3 = "PHP is old but sexy!";
    echo "String: \"$string3\"<br>";
    echo "String setelah diubah: \"" . str_replace("sexy", "awesome", $string3) . "\"";
    ?>

</body>
</html>
