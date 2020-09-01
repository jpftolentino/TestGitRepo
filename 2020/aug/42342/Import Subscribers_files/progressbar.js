function setPgb(pgbID, pgbValue) {
  if (pgbObj = document.getElementById(pgbID))
    pgbObj.width = pgbValue + '%'; // increase the progression by changing the width of the table
  if (lblObj = document.getElementById(pgbID+'_label'))
    lblObj.innerHTML = pgbValue + '%'; // change the label value
}

function addLog(logID, logValue) {
  if (logObj = document.getElementById(logID)) {
    logObj.innerHTML = logObj.innerHTML + logValue; // append the log entry
    logObj.doScroll('pageDown'); // make the log scroll automatically when new entries are added
  }
}