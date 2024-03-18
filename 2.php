<?php
    function findEvenNumbers($input) {
        $numbers = explode(" ", $input);
        
        $evenNumbers = array();
        
        foreach ($numbers as $number) {
            if ($number % 2 == 0) {
                $evenNumbers[] = $number;
            }
        }
        
        return implode(" ", $evenNumbers);
    }

    $input = "1 20 13 14 50 16 23 12 9 100";
    echo findEvenNumbers($input); // Output: 20 14 50 16 12 100
?>
