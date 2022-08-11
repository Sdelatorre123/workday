var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
    
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
})

function timetracker() {
 
    var timenow = moment().hour();

    $(".time-block").each(function () {
        var blocktime = parseInt($(this).attr("id").split("hour")[1])

        if (blockTime < timenow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blokTime < timenow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future")
        }
    })
}

$("hour8" .description).val(localstorage.getItem("hour8"));
$("hour9" .description).val(localstorage.getItem("hour9"));
$("hour10" .description).val(localstorage.getItem("hour10"));
$("hour11" .description).val(localstorage.getItem("hour11"));
$("hour12" .description).val(localstorage.getItem("hour12"));
$("hour13" .description).val(localstorage.getItem("hour13"));
$("hour14" .description).val(localstorage.getItem("hour14"));
$("hour15" .description).val(localstorage.getItem("hour15"));
$("hour16" .description).val(localstorage.getItem("hour16"));
$("hour17" .description).val(localstorage.getItem("hour17"));

timetracker();

