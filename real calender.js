 /* 1. GRAB ELEMENTS: Selecting the HTML text where we will display the data */
        const dateEl = document.getElementById("date");
        const dayEl = document.getElementById("day");
        const monthEl = document.getElementById("month");
        const yearEl = document.getElementById("year");

        /* 2. TRANSLATION ARRAYS: JavaScript returns numbers for days/months, 
           so we need these arrays to get the actual names. */
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        /* 3. THE STATE: This variable 'viewDate' holds the specific date being shown.
           When you click buttons, we modify this specific object. */
        let viewDate = new Date();

        /* 4. THE UPDATE FUNCTION: This takes the current viewDate and pushes 
           the data into the HTML text. */
        function updateUI() {
            let d = viewDate.getDate(); // Gets the number (1-31)
            
            // Format: Adds a leading '0' if the number is less than 10
            dateEl.innerHTML = (d < 10 ? "0" : "") + d;
            
            // Translate the day number (0-6) into a name from our array
            dayEl.innerHTML = weekDays[viewDate.getDay()];
            
            // Translate the month number (0-11) into a name from our array
            monthEl.innerHTML = allMonths[viewDate.getMonth()];
            
            // Display the full 4-digit year
            yearEl.innerHTML = viewDate.getFullYear();
        }

        /* 5. INTERACTIVE LOGIC: These functions are triggered by the buttons */

        // Changes the Date (e.g., from 14 to 15). JS handles month rollover automatically!
        function changeDate(offset) {
            viewDate.setDate(viewDate.getDate() + offset);
            updateUI(); // Redraw the text
        }

        // Changes the Month. JS handles year rollover automatically!
        function changeMonth(offset) {
            viewDate.setMonth(viewDate.getMonth() + offset);
            updateUI();
        }

        // Changes the Year.
        function changeYear(offset) {
            viewDate.setFullYear(viewDate.getFullYear() + offset);
            updateUI();
        }

        // Deletes the modified viewDate and replaces it with the actual current time.
        function resetToToday() {
            viewDate = new Date();
            updateUI();
        }

        /* 6. INITIALIZE: Run the function once as soon as the page loads */
        updateUI();
    