//Business Logic
fetch("../js/hire.json")
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        var jsonData = data.plumbers;
        if (jsonData.length > 0) {
            var temp = "";

            jsonData.forEach(function(u) {
                temp += "<tr>";
                temp += "<td>" + u.userId + "</td>";
                temp += "<td>" + u.firstName + "</td>";
                temp += "<td>" + u.lastName + "</td>";
                temp += "<td>" + u.phoneNumber + "</td>";
                temp += "<td>" + u.emailAddress + "</td>";
                temp += "<td>" + u.location + "</td>";
                temp += "<td>" + u.rates + "</td>";
                temp += "<td>" + u.ratings + "</td>";
                temp += "<td>" + "<input type='checkbox'>" + "</td>";

            });
            document.getElementById("servicesOrderedBodyTable").innerHTML = temp;
        }
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

        $("#name").val("");
        $("#phone").val("");
        $("#location").val("");
        $("#serviceSelect").val("0");
        $("#description").val("");
    });


});