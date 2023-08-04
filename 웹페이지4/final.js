let on = false;
let time;
let alldone=false;
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
        if(fir.length===3 && sec.length===4 && thi.length===4 && alldone===false){
            document.getElementById("checkbox").disabled=false;
            buttonchangestyle("checkbox");
        }
    
}
let timer = function(){
    time=180;
    let stimer = setInterval(function(){
        if(time>=0){
            let min = Math.floor(time / 60);
            let sec = String(time % 60).padStart(2,0);
            document.getElementById("time").innerText = min + ":" + sec;
            time=time-1;
        } else{
            clearInterval(stimer);
            if(alldone===false){
                document.getElementById("checkbox").disabled=false;
                time=180;
                on=false;
                buttonchangestyle("checkbox");    
            }   
        }
    },1000);
}
let clickcheckbox = function(){
    if(on === false){
        let num = Math.floor(Math.random()*1000000);
        document.getElementById("checknum").innerText=num;
        document.getElementById("checknum").style="color: #" + num;
        document.getElementById("completebutton").disabled=false;
        document.getElementById("checkbox").style="color: #0068FF; border: 1px solid #D2D2D2";
        buttonchangestyle("completebutton");
        timer();
        on=true;
    }
}
let completemessage = function(){
    time=0;
    alert("인증완료되었습니다.");
    document.getElementById("checkbox").disabled=true;
    document.getElementById("completebutton").disabled=true;
    alldone=true;
}
let checkinner = function(id, error,type){
    let ema = document.getElementById(id).value;
    if(ema.length===0){
        document.getElementById(error).innerText= type+"을 입력해주세요";
        document.getElementById(error).style="color: red; text-align:center;"
    } else{
        document.getElementById(error).innerText="";
    }
}
let final = function(){
    let ema = document.getElementById("wrapped__email").value;
    let name = document.getElementById("wrapped__name").value;
    let psward = document.getElementById("wrapped__psward").value;
    let psward2 = document.getElementById("wrapped__psward2").value;
    checkinner("wrapped__email","emailerror","이메일");
    checkinner("wrapped__name","nameerror","이름");
    checkinner("wrapped__psward","pswarderror","비밀번호");
    checkinner("wrapped__psward2","psward2error","비밀번호 확인");
    if(alldone && ema && name && psward  && psward2){
        if(psward !== psward2){
            alert("비밀번호가 서로 일치하지않습니다");
        } else{
            alert("회원가입되었습니다.");
          }
    } else{
        alert("항목을 모두 기입해주세요");
    }
}
