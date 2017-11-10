window.onload = function (){
  countSecounds();
  bildTable();
}
function countSecounds()
{
  var target = document.getElementById('myClock1');
  var now = new Date();

  var apm = 'AM';
  var hours = now.getHours();
  if (hours>=12){ hours -= 12; apm = 'PM'; }
  if (hours==0) hours = 12;

  var minutes = now.getMinutes();

  var seconds = now.getSeconds();

  if (hours<10) hours = "0"+hours;
  if (minutes<10) minutes = "0"+minutes;
  if (seconds<10) seconds = "0"+seconds;
  target.innerHTML = '<h1>' + apm + ' - ' + hours + ' : ' + minutes
      + ' : ' + seconds + '</h1>';

   setTimeout("countSecounds()",1000);
}
function bildTable()
{
  var tar2 = document.getElementById('myClock2');
  var tb = document.createElement("table");
  //tb.setAttribute("border","0");
  tb.setAttribute("width","100%");
  var bo = document.createElement("tbody");
  for (var r = 0; r < 4; r++) {
    var row = document.createElement("tr");
    row.setAttribute("height","7px");
    for (var c = 0; c < 8; c++) {
      var cell = document.createElement("td");
      cell.style.setProperty("background-color","gray");

      row.appendChild(cell);
    }
    bo.appendChild(row);
  }
  tb.appendChild(bo);
  tar2.appendChild(tb);
}
