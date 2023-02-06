/*
   Countdown Clock
   Author: PATRICK JANUEL MARIANO
   Date:   NOVEMBER 09, 2021
   Filename: countdown_script.js 

*/

runCountdown();
setInterval("runCountdown()", 1000);

function runCountdown() {
/* Store the current date and time */
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display the current data and time*/
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/* Calculate the days left until January 1st */
var newYear = new Date("January 1, 2022");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay)/(1000*60*60*24);

/* Calculate the hours left in the current day */
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

/* Calculate the minutes and seconds left in the current hour */
var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;


/* Display the time left until New Year's Eve*/
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);

}