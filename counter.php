<?php

$handle = fopen("counter.txt", "r");
if(!$handle) {
    echo "could not open the file";
} else {
    $counter =(int )fread($handle,20);
    fclose($handle);
    $counter++;
    echo sprintf("Number of visitors to this page so far: %d", $counter);
    $handle = fopen("counter.txt", "w" );

    fwrite($handle,$counter);
    fclose ($handle);
}
echo "You are visitor number $counter to this site";