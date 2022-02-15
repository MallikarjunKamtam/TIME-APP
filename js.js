const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".years");
const greet = document.querySelector(".greet");

function updater() {
  const timeNow = new Date();
  year.innerHTML = timeNow.getFullYear();
  month.innerHTML = timeNow.getMonth() + 1;
  date.innerHTML = timeNow.getDate();
  hours.innerHTML = timeNow.getHours();
  minutes.innerHTML = timeNow.getMinutes();
  seconds.innerHTML = timeNow.getSeconds();

  if (timeNow.getHours() >= 12 && timeNow.getHours() < 16) {
    greet.innerHTML = "GOOD AFTERNOON";
  } else if (timeNow.getHours() >= 16 && timeNow.getHours() < 24) {
    greet.innerHTML = "GOOD EVENING";
  }
}

setInterval(updater, 1000);
