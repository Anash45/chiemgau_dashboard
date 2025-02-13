$(document).ready(function() {
    $(".datepicker").datepicker({
        dateFormat: "yy-mm-dd",  // Format: YYYY-MM-DD
        changeMonth: true,       // Allow month selection
        changeYear: true,        // Allow year selection
        yearRange: "1900:2100"   // Set year range
    });

    $('.datepicker~.ii-float').each(function () {
        $(this).on('click', function () {
            $(this).prev('.datepicker').datepicker("show");
        })
    })
});