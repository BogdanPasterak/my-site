window.onload = function (){
  countSecounds();
}
function countSecounds()
{
  var target = document.getElementById('myClock1');
  var now = new Date();

  var apm = 'AM';
  var hours = now.getHours();
  if (hours>=12){ hours -= 12; apm = 'PM'; }
  if (hours==0) hours = 12;
  if (hours<10) hours = "0"+hours;

  var minutes = now.getMinutes();
  if (minutes<10) minutes = "0"+minutes;

  var seconds = now.getSeconds();
  if (seconds<10) seconds = "0"+seconds;
  /*
*/
  target.innerHTML = '<h1>' + apm + ' - ' + hours + ' : ' + minutes
      + ' : ' + seconds + '</h1>';

   setTimeout("countSecounds()",1000);
}
