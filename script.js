
    // Function to Calculate Age Based on the Selected Date of Birth
    function calculateAge() {
        // Getting the date of birth from the input field
        const dob = new Date(document.getElementById('dob').value);

        // Checking if a valid date is entered
        if (!dob || isNaN(dob.getTime())) {
            // Displaying an error message if the date is invalid
            document.getElementById('result').innerText = "Please enter a valid date of birth.";
            return;
        }

        // Getting the current date
        const today = new Date();

        // Calculating the difference in years
        let age = today.getFullYear() - dob.getFullYear();

        // Calculating the difference in months
        const monthDiff = today.getMonth() - dob.getMonth();

        // Calculating the difference in days
        const dayDiff = today.getDate() - dob.getDate();

        // Adjusting the age if the birth date has not yet occurred this year
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        // Displaying the calculated age
        document.getElementById('result').innerText = `Your age is: ${age} years old.`;
    }
