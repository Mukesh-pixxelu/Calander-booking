jQuery(document).ready(function () {

    //main slides
    const slider = jQuery('#slider');
    var currentIndex = 0;
    const totalSlides = slider.children.length;

    jQuery(document).on('click', '.left-button', function(e) {
        e.preventDefault();
        if (currentIndex > 0) {
          currentIndex--;
          updateSliderPosition();
        }
        return false;
    });
    jQuery(document).on('click', '.right-button', function(e) {
        e.preventDefault();
        console.log('hi');
        var sday= jQuery('.seleted_day').text();
        console.log(sday);
        if(sday==""){
            alert('Please select day first!');
            return false;
        }else{
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
                updateSliderPosition();
            }
        }

        
        return false;
    });

    function updateSliderPosition() {
        const slideWidth = slider.width();
        const newTransformValue = -(slideWidth * currentIndex);
        // Use jQuery's .css() method to set the transform property
        slider.css('transform', `translateX(${newTransformValue}px)`);
    }



    let currentDate = new Date();

    // Initialize with the current month
    renderMonth(currentDate);

    jQuery("#prevMonth").click(function(){
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderMonth(currentDate);
    });      
    
    jQuery("#nextMonth").click(function(){    
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderMonth(currentDate);
    });

    

    jQuery(document).on('click', '.day', function () {
        if (jQuery(this).text() != '') {
            var today = new Date();
            var clickedDate = new Date();
            var dayText = jQuery(this).text(); // Get the text content of the clicked day
            var monthText = jQuery('#monthYear').text(); // Get the text content of the month and year
            var year = parseInt(monthText.split(' ')[1]); // Extract the year from the month and year string
            var monthName = monthText.split(' ')[0]; // Extract the month name from the month and year string
            var month = new Date(Date.parse(monthName + " 1, " + year)).getMonth(); // Convert month name to month index
    
            clickedDate.setFullYear(year, month, parseInt(dayText));
    
            // Deselect days that are not after today
            jQuery('.day').each(function () {
                var dayValue = parseInt(jQuery(this).text());
                var comparedDate = new Date(year, month, dayValue);
                if (comparedDate > today) {
                    jQuery(this).css({ 'background-color': '#EEF5FF', 'color': '#0052FF' });
                }
            });
    
            // Apply styles to the clicked day
            jQuery(this).css({ 'background-color': '#0069FF', 'color': '#fff' });
    
            // Format the date to "Thursday, May 16" format
            var formattedDate = clickedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    
            // Output the formatted date
            jQuery('.seleted_day').html(formattedDate);
        }
    });
    
    

    available_days();

    updatePreviousButton(currentDate);


    // Your existing event listener for "Previous" button
    jQuery('#prevMonth').click(function () {
        available_days();
        updatePreviousButton(currentDate);
    });

    // Your existing event listener for "Next" button
    jQuery('#nextMonth').click(function () {
        available_days();
        updatePreviousButton(currentDate);
    });


    jQuery(document).on('click', '.time_section a.btn_a', function(e) {
        e.preventDefault();    
        
        jQuery('a.btn_b').remove();
        jQuery('a.btn_a').css({'display': 'inline-block', 'width': '87%'});

        var btn_b = '<a class="btn_b right-button" href="#">Next</a>';
    
        var parentElement = jQuery(this).parent();    
       
        // Append the new buttons to parentElement
        parentElement.append( btn_b);
    
        // Apply styles to the buttons
        parentElement.find('a.btn_a').css({'display': 'inline-block', 'width': '40%'});
        parentElement.find('a.btn_b').css({'display': 'inline-block', 'position': 'absolute', 'width': '13%', 'margin-left': '6px'});
    
        return false;
    });
    
    
    

});




function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

function updateMonthYearDisplay(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const monthYearDiv = document.getElementById("monthYear");
    monthYearDiv.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

////for marking current date
function isToday(date, day, month, year) {
    return date.getDate() === day && date.getMonth() === month && date.getFullYear() === year;
}

function renderMonth(date) {
    const weeksContainer = jQuery('#weeks');
    weeksContainer.innerHTML = ''; // Clear previous weeks

    const dim = daysInMonth(date.getMonth(), date.getFullYear());
    const firstDay = getFirstDayOfMonth(date);

    let day = 1;
    let weekElement = document.createElement("div");
    weekElement.className = "week";

    // Fill in the blanks for the first week
    for (let i = 0; i < 7; i++) {
        const dayElement = document.createElement("div");
        dayElement.className = "day";
        if (i >= firstDay) {
            dayElement.textContent = day++;
        }
        weekElement.appendChild(dayElement);
    }
    weeksContainer.appendChild(weekElement);

    // Fill in the rest of the days
    while (day <= dim) {
        weekElement = document.createElement("div");
        weekElement.className = "week";
        for (let i = 0; i < 7; i++) {
            const dayElement = document.createElement("div");
            dayElement.className = "day";
            if (day <= dim) {
                dayElement.textContent = day++;
            }
            weekElement.appendChild(dayElement);
        }
        weeksContainer.appendChild(weekElement);
    }
    updateMonthYearDisplay(date);
}



function renderMonth(date) {
    const weeksContainer = document.getElementById("weeks");
    weeksContainer.innerHTML = ''; // Clear previous weeks

    const dim = daysInMonth(date.getMonth(), date.getFullYear());
    const firstDay = getFirstDayOfMonth(date);

    let day = 1;
    let weekElement = document.createElement("div");
    weekElement.className = "week";

    const today = new Date(); // Get today's date for comparison

    // Fill in the blanks for the first week
    for (let i = 0; i < 7; i++) {
        const dayElement = document.createElement("div");
        dayElement.className = "day";
        if (i >= firstDay) {
            if (isToday(today, day, date.getMonth(), date.getFullYear())) {
                dayElement.classList.add("today"); // Highlight today
            }
            dayElement.textContent = day++;
        }
        weekElement.appendChild(dayElement);
    }
    weeksContainer.appendChild(weekElement);

    // Fill in the rest of the days
    while (day <= dim) {
        weekElement = document.createElement("div");
        weekElement.className = "week";
        for (let i = 0; i < 7; i++) {
            const dayElement = document.createElement("div");
            dayElement.className = "day";
            if (day <= dim) {
                if (isToday(today, day, date.getMonth(), date.getFullYear())) {
                    dayElement.classList.add("today"); // Highlight today
                }
                dayElement.textContent = day++;
            }
            weekElement.appendChild(dayElement);
        }
        weeksContainer.appendChild(weekElement);
    }
    updateMonthYearDisplay(date);
}


// Function to disable or enable the "Previous" button based on current date
function updatePreviousButton(date) {
    var currentDate = new Date();
    var prevButton = jQuery('#prevMonth');

    if (currentDate.getMonth() === date.getMonth() && currentDate.getFullYear() === date.getFullYear()) {
        prevButton.prop('disabled', true);
    } else {
        prevButton.prop('disabled', false);
    }
}



//add light blue coloe to available days 
function available_days() {

    jQuery('.day').each(function () {

        var today = new Date();
        // Get the text content of the day
        var dayText = jQuery(this).text();

        // Check if the day is not empty
        if (dayText != '') {
            // Get the year and month from the monthYear element
            var monthYearText = jQuery('#monthYear').text();
            var year = parseInt(monthYearText.split(' ')[1]);
            var monthName = monthYearText.split(' ')[0];
            var month = new Date(Date.parse(monthName + " 1, " + year)).getMonth();

            // Create a Date object for the current day being iterated
            var currentDate = new Date(year, month, parseInt(dayText));

            // Compare currentDate with today's date
            if (currentDate > today) {
                // If currentDate is after today, add blue color
                jQuery(this).css({ 'color': 'blue', 'background-color': '#EEF5FF' });
            }
        }
    });
}
