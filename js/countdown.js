
let countdown = setInterval(function (){
    let today = new Date();
    let eventDate = new Date("August 26, 2020 20:00:00");

    let currentTime = today.getTime();
    let eventTime = eventDate.getTime();

    let distance = eventTime - currentTime;

    let sec = Math.floor(distance/1000);
    let min = Math.floor(sec/60);
    let hrs = Math.floor(min/60);
    let days = Math.floor(hrs/24);

    hrs %= 24;
    min %= 60;
    sec %= 60;

    hrs = (hrs < 10) ? '0' + hrs : hrs;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
      }

 
}, 1000)

var count = 0;
var maxCount = 1;

document.addEventListener('mouseleave', function (){
    if(count < maxCount){
        $("#exampleModal").modal('show'); 
        count +=1;   
    }
})

