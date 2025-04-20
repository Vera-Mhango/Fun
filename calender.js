//what all this does is get the cprrect date of whatever day youre on in the console tab
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const day = document.getElementById("day");

const today = new Date();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();//this is to add a 0 in front of the date if its less than 10. so if its the 1st of the month it will show 01 instead of 13
month.innerHTML = monthNames[today.getMonth()]; // Months are zero-based in JavaScript meaning if left like this they will be in 0-11 format
year.innerHTML = today.getFullYear();
day.innerHTML = weekDays[today.getDay()]; // Days are zero-based in JavaScript meaning if left like this they will be in 0-6 format
//the array help define which number should be which day or month. meaning if monday was the fist day of the week we'd need to put monday on the first position in the arryay