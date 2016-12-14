var ampedFunctions = require("/amped-functions.sjs");

var statusDate = fn.currentDate();
var statusMessage = "I have the suspect at the confirmed location.  Send extraction team.";

ampedFunctions.performUpdate(statusDate, statusMessage);