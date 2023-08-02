let traingame =function(){
    let taken = document.getElementById("textbox").value;
    let given = document.getElementById("given").innerText; //class를 사용하면 여러개를 지정 가능하기 때문에 클래스 선택자.length를 사용 못한다!!
    let givenlast = given[given.length -1];
    let takenfirst = taken[0];

    if(takenfirst===givenlast){
        document.getElementById("result").innerText="정답입니다";
        document.getElementById("given").innerText=taken;        //변수 => given=taken; 값 할당 받는 곳!! 따라서 현재 given에는 정답입니다 라는 값이 할당되어 있다 taken에는 입력한 값이 할당 되어 있다. 
        document.getElementById("textbox").value="";
    }   else{
        document.getElementById("result").innerText="오답입니다";
        document.getElementById("textbox").value="";
    }
}

