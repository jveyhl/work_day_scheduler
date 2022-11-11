

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(() => {
  // Get current date
  const now = dayjs().format("DD MMMM YYYY h:mm A");
  
  // Get reference to currentDay element to display time
  $("#currentDay").text(now);

  // Add rows to the schedule
  const addRows = (date) => {
    // Default is current time
    date = dayjs().format("h:mm A");
    
    
  }

  // Initialize the page
  $(window).on("load", addRows);
});


