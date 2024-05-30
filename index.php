<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monthly Calendar with Month and Year</title>
    <link rel="stylesheet" href="styles.css">

</head>

<body>
    <div class="slider-container">
        <div class="slider-content" id="slider">
            <div class="slide booking_section">                
                <div class="calendar-container">
                    <h2>Select a Date & Time</h2>

                    <div class="btn_section">
                        <div class="col col-a"><button id="prevMonth">
                                <</button>
                        </div>
                        <div class="col col-b">
                            <div class="month-year" id="monthYear"></div>
                        </div>
                        <div class="col col-c"><button id="nextMonth">></button></div>
                    </div>
                    <div class="weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div id="weeks" class="weeks">
                        <!-- Weeks will be populated here -->
                    </div>
                </div>
                <div class="time_section">
                    <div class="seleted_day"></div>
                    <ul>
                        <li><a class="btn_a" href="">5:30am</a></li>
                        <li><a class="btn_a" href="">6:00am</a></li>
                        <li><a class="btn_a" href="">6:30am</a></li>
                        <li><a class="btn_a" href="">7:00am</a></li>
                        <li><a class="btn_a" href="">7:30am</a></li>
                        <li><a class="btn_a" href="">8:00am</a></li>
                        <li><a class="btn_a" href="">8:30am</a></li>
                        <li><a class="btn_a" href="">9:00am</a></li>
                        <li><a class="btn_a" href="">9:30am</a></li>
                        <li><a class="btn_a" href="">10:00am</a></li>
                        <li><a class="btn_a" href="">10:30am</a></li>
                        <li><a class="btn_a" href="">11:00am</a></li>
                        <li><a class="btn_a" href="">11:30am</a></li>
                        <li><a class="btn_a" href="">12:00pm</a></li>
                    </ul>

                    <div class="hidden_time">
                        <li><a class="btn_a" href="">5:30am</a></li>
                        <li><a class="btn_a" href="">6:00am</a></li>
                        <li><a class="btn_a" href="">6:30am</a></li>
                        <li><a class="btn_a" href="">7:00am</a></li>
                        <li><a class="btn_a" href="">7:30am</a></li>
                        <li><a class="btn_a" href="">8:00am</a></li>
                        <li><a class="btn_a" href="">8:30am</a></li>
                        <li><a class="btn_a" href="">9:00am</a></li>
                        <li><a class="btn_a" href="">9:30am</a></li>
                        <li><a class="btn_a" href="">10:00am</a></li>
                        <li><a class="btn_a" href="">10:30am</a></li>
                        <li><a class="btn_a" href="">11:00am</a></li>
                        <li><a class="btn_a" href="">11:30am</a></li>
                        <li><a class="btn_a" href="">12:00pm</a></li>
                    </div>
                </div>

                
            </div>
            <div class="slide">
                <button class="button left-button">&#10094;</button>
                2
            </div>            
        </div>
        <button class="button" id="left-button">&#10094;</button>
        <!--<button class="button" id="right-button">&#10095;</button>-->
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="style.js"></script>
</body>

</html>