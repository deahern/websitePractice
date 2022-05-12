var milisec=0;
var sec=0;
var min=0;
var timer;

function callTimer(){
    milisec++;
    if(milisec<100){
        if(milisec===99){
            sec++;
            milisec=0;
          if(sec===60){
            min++;
            sec=0;
        }
    } 
}
else{
        milisec=0;
} 
document.getElementById("timer").innerHTML=min.toString().padStart(2,'0')+':'+sec.toString().padStart(2,'0')+':'+milisec.toString().padStart(2,'0');

}

function start(){
    document.getElementById("start").disabled=true;
    timer=setInterval(callTimer,10);
}
function stop(){
    document.getElementById("start").disabled=false;
    clearInterval(timer);
}
function reset(){
    stop();
    milisec=0;
    sec=0;
    min=0;
    document.getElementById("timer").innerHTML='00:00:00';
}
