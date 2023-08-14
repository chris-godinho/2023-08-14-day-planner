// Declaring global variables
var currentHour = dayjs().hour();
var saveButton = document.getElementsByClassName("saveBtn");
var eventContent = "";

// Adding current date to the top of page
$("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY'));

for(i = 9; i < 18; i++) {
  // Comparing each hour block to the current time and applying styles accordingly
  if (i < currentHour) {
    $("#hour-" + i).addClass("past");
  } else if (i === currentHour) {
    $("#hour-" + i).addClass("present");
  } else {
    $("#hour-" + i).addClass("future");
  }
  // Getting saved values from local storage and placing them in the appropriate boxes
  if (localStorage.getItem("hour-" + i) != null) {
    document.getElementById("event-" + i).value = localStorage.getItem("hour-" + i);
  }
}

// Saving data from a particular hour block to local storage
function saveEvent() {
  eventContent = this.previousElementSibling.value;
  localStorage.setItem(this.parentElement.id, eventContent);
}

// Adding event listeners to every save button
for(i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener("click", saveEvent);
}
