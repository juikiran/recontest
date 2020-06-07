/*var usrName = prompt("Username: ");
var passwd = prompt("Password: ");
if (usrName == "GSTRECON") {
  window.alert("OTP Sent in email");
  var OTP = prompt("Enter OTP:");
} else {
  window.alert("Invalid Login");
};
*/
/*
/*JSON Arrays*/
var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
