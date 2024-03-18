<?php
    function reverseInputWords($input) {
        $words = explode(" ", $input);
        $reversed = array_reverse($words);
        $output = implode(" ", $reversed);
        return $output;
    }

    $input = "Какая-то строка со словами для теста на php";
    echo reverseInputWords($input); // Output: php на теста для словами со строка Какая-то
?>
