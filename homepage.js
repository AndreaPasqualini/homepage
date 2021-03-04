function clk() {
  var now = new Date();
  var hour = now.getHours();
  var mins = ( "0" + now.getMinutes() ).slice(-2);
  document.getElementById("time").innerHTML = hour + ":" + mins
};

function dt() {
  var now = new Date();
  var month_names = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  var month_ix = now.getMonth();
  var day = now.getDate();
  var month = month_names[month_ix];
  var year = now.getFullYear();
  document.getElementById("date").innerHTML = day + " " + month + " " + year
};

window.onload = function() {
  clk();
  dt();
  setInterval(clk, 1000);
  setInterval(dt, 1000);
};
