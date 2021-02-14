// UI Variables 
const timerDemo = document.getElementById("timerDemo");
//timer 
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    let am_pm = h > 12?'PM':'AM';
    
    //convert the hours into 12 format
    h = h% 12 || 12;
    m = addZero(m);
    s = addZero(s);
    //console.log(se);
    timerDemo.innerHTML = `${h} : ${m} : ${s} ${am_pm}`;
    
}setTimeout(startTime,500);

function addZero(i) {
    if(i < 10){i = "0"+ i;} 
    return i;
}

