// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(() => {
  // Get current date
  const now = dayjs().format("DD MMMM YYYY h:mm A");

  // Get reference to currentDay element to display time
  $("#currentDay").text(now);

  // Add rows to the schedule
  const addBlocks = (date) => {
    // Default time is 8:00 AM
    let hour = 8;

    for (let i = 0; i < 12; i++) {
      // Make a div with class time-block
      let block = $("<div>").addClass("time-block").attr("id", `block${i}`);

      // Make an area of the time-block for holding the time
      let blockHour = $("<div>").addClass("col-2 col-md-1 hour text-center py-3");

      // Update the time and apply format
      // Give the div and id equal to 'i' in the current itteration of the loop
      blockHour.text(dayjs().set("hour", hour).set("minute", 0).format("h A")).attr("id", `hour${i}`);

      // Make an area of the time-block for holding text
      let blockText = $("<textarea>").addClass("col-8 col-md-10 description").attr("id", `text${i}`);

      // Apply past, present or future class to each block based on the current time
      let currentHour = dayjs().format("H");

      if (hour < currentHour) {
        blockText.addClass("past");
      } else if (hour > currentHour) {
        blockText.addClass("future");
      } else {
        blockText.addClass("present");
      }

      // Make an area of the time-block for holding the save button 
      let blockSave = $("<div>").addClass("btn saveBtn col-2 col-md-1");
      
      // Make an icon for the save button
      let icon = $("<button>").addClass("fas fa-save").attr("id", i).attr("title", "Save");

      // Append child elements to parent container
      $(".container").append(block.append(blockHour, blockText, blockSave.append(icon)));

      // Add one hour to the hour variable to increase the time for the next time-block
      hour += 1;
    }
  }

  // Initialize the page
  $(window).on("load", addBlocks);
});


