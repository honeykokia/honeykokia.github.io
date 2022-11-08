var btn1 = document.getElementById("btn1");
var fox=new Audio("music/GSP_07.mp3");

btn1.onclick = function()
{
    var change = document.getElementById("btn1");
    if(fox.paused == true){
        
    fox.play();
    change.innerHTML = "&#9724;";
      }else{
        insane.pause();
     change.innerHTML = "&#9658;";
      }
          
}
