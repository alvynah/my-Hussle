$(document).ready(function() {
    //deluxeorder
    $("#hireServicesButton").click(function() {
        $("#hireServicesButton").hide();
        $("#customerdetailsForm").slideDown(1000);
    });
    $("form#customerdetailsForm").submit(function(event) {
        event.preventDefault();

        $("#customerdetailsForm").hide();
        $("#hireServicesButton").slideUp(1000);
    })
});