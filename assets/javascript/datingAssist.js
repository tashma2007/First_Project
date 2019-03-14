$(document).ready(function () {

    var apiKey = "25eRi-vR2fYjEysHE_5WuMxJ6eqXkrgbAFbAgOth2a6m_eRWU4m8od_U-2WItbTsqSBkNJdsRdwl3LHhKMnWSy-X1TIPrqCYSJsXSvsMeMeIM9t8e6m-SMhIN_mDXHYx";

    var queryURL = "https://cors-anywhere.herokuapp.com/https://www.yelp.com/search?find_desc=restaurants&find_loc=Charlotte%2C+NC&ns=1" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET",
       

    }).then(function (response) {
        var restaurantName = response.name;


        console.log(response);
    });

})