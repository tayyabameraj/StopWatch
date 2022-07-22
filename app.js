var miliH = document.getElementById("miliH");
var secH = document.getElementById("secH");
var minH = document.getElementById("minH");
var mili = 0;
var sec = 0;
var min = 0;
var interval;

function timer(){
    mili++;
    miliH.innerHTML = mili;
    if(mili >= 100){
        sec++;
        secH.innerHTML = sec;
        mili = 0;
    } else if(sec >= 60) {
        min++;
        minH.innerHTML = min;
        sec = 0;
    }
}

function add(){
    document.getElementById("start").setAttribute("disabled", "")
}

function remove(){
    document.getElementById("start").removeAttribute("disabled", "")
}

function start(){
    interval = setInterval(timer, 10);
    add()
}
function stop(){
    clearInterval(interval)
    remove()
}
function reset(){
    min = 0;
    sec = 0;
    mili = 0;
    miliH.innerHTML = mili;
    secH.innerHTML = sec;
    minH.innerHTML = min;
    stop()
    remove()
}