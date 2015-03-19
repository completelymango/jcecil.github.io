function myCalendar(){

var todaydate=new Date();
var currentDayOfWeek=new Date().getDay();
var currentDayOfMonth=new Date().getDay();
var startDayOfMonth=currentDayOfMonth % 7;
var curmonth=todaydate.getMonth()+1; //get current month (1-12)
var curyear=todaydate.getFullYear(); //get current year

var output='<tr>'

// Get the day of the week that the current month starts on

