
// Different functions that have for objective to calculate the prices of the unit, total elevator prices, 
// fee installation and combined prices of all fees.

$(".serviceSelection").click(function(updatefees){

    var nbrelevators = document.getElementById("nbrelevators").value;
    //standard calculation
    if (document.getElementById("standard").checked) {

        document.getElementById("unitpricedisplay").value = 7565 + "$";
    
        document.getElementById("elevatorsprice").value = 7565 * nbrelevators + "$";

        var installationfee = (7565 * 0.10) *  nbrelevators;
        installationfee = (Math.round(installationfee * 100)) / 100;
        document.getElementById("instalcost").value = installationfee + "$";

        var total = (nbrelevators * 7565) + installationfee;
        document.getElementById("totalfee").value = total + "$";
    }
    //premium calculation
    if (document.getElementById("premium").checked) {

        document.getElementById("unitpricedisplay").value = 12345 + "$";

        document.getElementById("elevatorsprice").value = 12345 * nbrelevators + "$";

        var installationfee = (12345 * 0.13) * nbrelevators;
        installationfee = (Math.round(installationfee * 100)) / 100;
        document.getElementById("instalcost").value = installationfee + "$";

        var total = (nbrelevators * 12345) + installationfee;
        document.getElementById("totalfee").value = total + "$";
    }
    //excelium calculation
    if (document.getElementById("excelium").checked) {

        document.getElementById("unitpricedisplay").value = 15400 + "$"

        document.getElementById("elevatorsprice").value = 15400 * nbrelevators + "$";

        var installationfee = (15400 * 0.16) * nbrelevators
        installationfee = (Math.round(installationfee * 100)) /100;
        document.getElementById("instalcost").value = installationfee + "$";

        var total = (nbrelevators * 15400) + installationfee;
        document.getElementById("totalfee").value = total + "$";
    }
    
})