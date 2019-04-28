function toggleDetails(str) {
  var detailsID = str + 'Details';
  var buttonID = str + 'Button';

  document.getElementById(detailsID).style.display = "block";
  document.getElementById(buttonID).style.display = "none";

/*
  if (document.getElementById(detailsID).style.display == "block") {
    document.getElementById(detailsID).style.display = "none";
    document.getElementById(buttonID).innerText = "Show Details";
  }
  else {
    document.getElementById(detailsID).style.display = "block";
    document.getElementById(buttonID).innerText = "Hide Details";
  }
*/
}
