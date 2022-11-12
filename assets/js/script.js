// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(() => {
  // Get current date and time use set interval to refresh time
  setInterval(() => {
    let now = dayjs().format("DD MMMM YYYY h:mm A");

    // Get reference to currentDay element to display time
    $("#currentDay").text(now);

  }, 1000);

  // Declare variables for elements to be accessed outside of addBlocks
  var icon;

  // Add rows to the schedule
  function addBlocks() {
    // Default time is 8:00 AM
    let hour = 8;

    for (let i = 0; i < 12; i++) {
      // Make a div with class time-block
      const block = $("<div>").addClass("time-block").attr("id", `block${i}`);

      // Make an area of the time-block for holding the time
      const blockHour = $("<div>").addClass("col-2 col-md-1 hour text-center py-4");

      // Update the time and apply format
      // Give the div an hour id equal appended with 'i' in the current itteration of the loop
      blockHour.text(dayjs().set("hour", hour).format("h A")).attr("id", `hour${i}`);

      // Make an area of the time-block for holding text
      const blockText = $("<textarea>").addClass("col-8 col-md-10 description text-box").attr("id", `text${i}`);

      // Apply past, present or future class to each block based on the current time
      const currentHour = dayjs().format("H");

      if (hour < currentHour) {
        blockText.addClass("past");
      } else if (hour > currentHour) {
        blockText.addClass("future");
      } else {
        blockText.addClass("present");
      }

      // Make an area of the time-block for holding the save button 
      const blockSave = $("<div>").addClass("btn saveBtn col-2 col-md-1");

      // Make an icon for the save button
      icon = $("<button>").addClass("btn icon fas fa-save fa-lg").attr("id", i).attr("title", "Save");

      // Append child elements to parent container
      $(".container").append(block.append(blockHour, blockText, blockSave.append(icon)));

      // Add one hour to the hour variable to increase the time for the next time-block
      hour += 1;

      // Add listener to icon that will save task when icon is clicked
      icon.on("click", saveTask);
    }
  }

  // Initialize the page
  $(window).on("load", addBlocks);

  // Store scheduled tasks to localStorage
  function saveTask(event) {
    console.log("save button clicked");
    event.preventDefault();
    console.log(this);
    console.log(event);
  }
});



