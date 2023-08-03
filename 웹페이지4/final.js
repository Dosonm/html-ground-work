let changecursor1 = function(){
    let fir=document.getElementById("firsttyping").value;
    if(fir.length===3){
        document.getElementById("secondtyping").focus();
    }
}
let changecursor2 = function(){
    let sec=document.getElementById("secondtyping").value;
    if(sec.length===4){
        document.getElementById("thirdtyping").focus();
    }
}
let buttonchangestyle = function(id){
    document.getElementById(id).style="color: black; background-color: white;"
}
let activatecheckbox = function(){
    let fir=document.getElementById("firsttyping").value;
    let sec=document.getElementById("secondtyping").value;
    let thi=document.getElementById("thirdtyping").value;
    if(fir.length===3 && sec.length===4 && thi.length===4){
        document.getElementById("checkbox").disabled=false;
        buttonchangestyle("checkbox");
    }
}
let timer = function(){
        let time = 180;   
    setInterval(function(){
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2,0);
        document.getElementById("time").innerText = min + ":" + sec;
        time=time-1;
    },1000);
}
let clickcheckbox = function(){
    let num = Math.floor(Math.random()*1000000);
    document.getElementById("checknum").innerText=num;
    document.getElementById("checknum").style="color: #" + num;
    document.getElementById("completebutton").disabled=false;
    buttonchangestyle("completebutton");
    timer();
}
let completemessage = function(){
    alert("인증완료되었습니다.");
    document.getElementById("checkbox").disabled=true;
    document.getElementById("completebutton").disabled=true;
}