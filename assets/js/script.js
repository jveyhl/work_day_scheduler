// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(() => {
  // Get current date
  const now = dayjs();
  
  // Get reference to currentDay element to display time
  $("#currentDay").text(now);
});
