<?php
// Generate a calendar for the current month
$currentMonth = date('m');
$currentYear = date('Y');
$numDays = date('t');

// Get booked dates (dummy data)
$bookedDates = array('2024-03-15', '2024-03-20', '2024-03-25');

echo '<h2>' . date('F Y') . '</h2>';
echo '<div class="days">';
for ($i = 1; $i <= $numDays; $i++) {
    $date = "$currentYear-$currentMonth-" . sprintf('%02d', $i);
    $class = in_array($date, $bookedDates) ? 'booked' : '';
    echo '<div class="day ' . $class . '" data-date="' . $date . '">' . $i . '</div>';
}
echo '</div>';
?>
