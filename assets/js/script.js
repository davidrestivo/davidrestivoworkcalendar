var date = moment().format('dddd, MMM Do YYYY');
$("#currentDate").html(date);
// Set the Date on the page

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
      // Setting the input text for each block after save is pressed     
        var enteredTxt = $(this).siblings(".description").val();
        var blockSelected = $(this).parent().attr("id");
       
        localStorage.setItem(blockSelected, enteredTxt);
    })
  //  Checking the blocks and seeing if they are before the current timeTracker, currently the time or after the time and setting the appropriate class for each

    function currTime() {
        var currentTIme = moment().hour();

        $(".time-block").each(function () {
            var Time = parseInt($(this).attr("id").split("hour")[1]);

            if (Time < currentTIme) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
               
            }
            else if (Time === currentTIme) {           
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
              
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
             

            }
        })
    }

    // recalling the entered itemed from local storage after a refresh of the page before  a clear of local storage is made

    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#13pm .description").val(localStorage.getItem("13pm"));
    $("#14pm .description").val(localStorage.getItem("14pm"));
    $("#15pm .description").val(localStorage.getItem("15pm"));
    $("#16pm .description").val(localStorage.getItem("16pm"));
    $("#17pm .description").val(localStorage.getItem("17pm"));

    currTime();
})

// added a button to the page to clear the time blocks
function clearLocal() {
  localStorage.clear();

  $(".description").val("");   

}