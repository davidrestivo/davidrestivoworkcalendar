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
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var Time = parseInt($(this).attr("id").split("block")[1]);

            if (Time < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
               
            }
            else if (Time === currentTime) {           
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

    $("#block9 .description").val(localStorage.getItem("block9"));
    $("#block10 .description").val(localStorage.getItem("block10"));
    $("#block11 .description").val(localStorage.getItem("block11"));
    $("#block12 .description").val(localStorage.getItem("block12"));
    $("#block13 .description").val(localStorage.getItem("block13"));
    $("#block14 .description").val(localStorage.getItem("block14"));
    $("#block15 .description").val(localStorage.getItem("block15"));
    $("#block16 .description").val(localStorage.getItem("block16"));
    $("#block17 .description").val(localStorage.getItem("block17"));

    currTime();

})


// added a button to the page to clear the local storage and the time blocks
function clearLocal() {
  localStorage.clear();

  $(".description").val("");   

}

// $(document).ready(function SaveAllBlocks() {
     
//         var enteredTxt = $(this).siblings(".description").val();
//         var blockSelected = $(this).parent().attr("id");
       
//         localStorage.setItem(blockSelected, enteredTxt);
//     }
// )