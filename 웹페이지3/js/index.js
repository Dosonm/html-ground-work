let menuhome = function(){
    document.getElementById("content").setAttribute("src","page.html");
    document.getElementById("menuhome").style="color: black; background-color: beige;"
    document.getElementById("menugame").style="color: white; background-color: #298EB5;"
    document.getElementById("menusong").style="color: white; background-color: #298EB5;"
}
let menugame = function(){
    document.getElementById("content").setAttribute("src","game.html");
    document.getElementById("menugame").style="color: black; background-color: beige;"
    document.getElementById("menuhome").style="color: white; background-color: #298EB5;"
    document.getElementById("menusong").style="color: white; background-color: #298EB5;"
}
let menusong = function(){
    document.getElementById("content").setAttribute("src","song.html");
    document.getElementById("menusong").style="color: black; background-color: beige;"
    document.getElementById("menugame").style="color: white; background-color: #298EB5;"
    document.getElementById("menuhome").style="color: white; background-color: #298EB5;"
}