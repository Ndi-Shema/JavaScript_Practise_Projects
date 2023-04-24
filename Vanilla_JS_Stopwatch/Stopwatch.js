window.onload = function () {
    var seconds = "00";
    var tens = "00";
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendStart = document.getElementById('button-start');
    var appendStop = document.getElementById('button-stop');
    var appendReset = document.getElementById('button-reset');
    var Interval ;

    appendStart.onclick = function() {
        clearInterval(Interval);
        Interval =setInterval(startTimer, 10);
    }

    appendStop.onclick = function() {
        clearInterval(Interval);
    }

    appendReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer () {
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9){
            appendTens.innerHTML = tens
        }

        if (tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9){
        appendSeconds.innerHTML = seconds;
        }
    }

}