const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".years");

function updater() {
  const timeNow = new Date();
  year.innerHTML = timeNow.getFullYear();
  month.innerHTML = timeNow.getMonth() + 1;
  date.innerHTML = timeNow.getDate();
  hours.innerHTML = timeNow.getHours();
  minutes.innerHTML = timeNow.getMinutes();
  seconds.innerHTML = timeNow.getSeconds();
}

setInterval(updater, 1000);
