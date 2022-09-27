$(document).ready(function(){

    $("#residentialSelection").hide();
    $("#commercialSelection").hide();
    $("#corporateSelection").hide();
    $("#hybridSelection").hide();
})

$(formBuilding).change(function(){

    if ($(formBuilding).val() == 1) {
        $("#residentialSelection").show();
        $("#commercialSelection").hide();
        $("#corporateSelection").hide();
        $("#hybridSelection").hide();
    };
    if ($(formBuilding).val() == 2) {
        $("#residentialSelection").hide();
        $("#commercialSelection").show();
        $("#corporateSelection").hide();
        $("#hybridSelection").hide();
    };
    if ($(formBuilding).val() == 3) {
        $("#residentialSelection").hide();
        $("#commercialSelection").hide();
        $("#corporateSelection").show();
        $("#hybridSelection").hide();
    };
    if ($(formBuilding).val() == 4) {
        $("#residentialSelection").hide();
        $("#commercialSelection").hide();
        $("#corporateSelection").hide();
        $("#hybridSelection").show();
    };
    if ($(formBuilding).val() == 0) {
        $("#residentialSelection").hide();
        $("#commercialSelection").hide();
        $("#corporateSelection").hide();
        $("#hybridSelection").hide();
    };
})