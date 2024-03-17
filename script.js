document.addEventListener('DOMContentLoaded', function() {
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const withinDropdown = e.target.closest('.dropdown-menu');
        if (!withinDropdown) {
            // Close the dropdown menu
            document.querySelector('.dropdown-menu').classList.remove('show');
        }
    });

    // Example toggle function for the dropdown - adjust as necessary
    document.querySelector('.dropdown-toggle').addEventListener('click', function() {
        document.querySelector('.dropdown-menu').classList.toggle('show');
    });
});