//Business Logic

if (!('fetch' in window)) {
    console.log('Fetch API not found, try including the polyfill');
    return;
}
fetch('examples/example.json')
    .then(function(response) {
        // Do stuff with the response
    })
    .catch(function(error) {
        console.log('Looks like there was a problem: \n', error);
    });
//User Logic
$(document).ready(function() {
    //deluxeorder
    $("#hireServicesButton").click(function() {
        $("#hireServicesButton").hide();
        $("#customerdetailsForm").slideDown(1000);
    });
    $("form#customerdetailsForm").submit(function(event) {
        event.preventDefault();

        $("#serviceOrdered").slideDown(1000);

    })

});