let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

setInterval(() => {
  let day = new Date();
  let totalHour = day.getHours() * 30;
  let totalMinute = day.getMinutes() * 6;
  let totalSecond = day.getSeconds() * 6;

  hour.style.transform = `rotateZ(${totalHour + totalMinute / 12}deg)`;
  minute.style.transform = `rotateZ(${totalMinute}deg)`;
  second.style.transform = `rotateZ(${totalSecond}deg)`;

  // Digital Clock

  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  // let day = new Date();
  let h = day.getHours();
  let m = day.getMinutes();
  let s = day.getSeconds();

  let am = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
});
