var hour = document.getElementById("hour");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");


var clock = setInterval(
    function time() {
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        if(hr > 12){
            hr = hr - 12
        }
        if(hr < 10){
            hr = "0" + hr;
        }

        if(min < 10){
            min = "0" + min;
        }

        if(sec < 10){
            sec = "0" + sec;
        }

        hour.innerText = hr;
        minutes.innerText = min;
        seconds.innerText = sec;
    
}, 1000);

