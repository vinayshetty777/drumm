var buts=document.querySelectorAll(".drum");
for(i=0; i<buts.length; i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function () {
   var word = this.innerHTML;

     makeSound(word)
     anoFun(word)
   }
);
}
document.addEventListener("keypress",function(event){
  makeSound(event.key)
  anoFun(event.key)
});

function makeSound(key){
  switch (key) {
    case "A":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
     case "S":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
     case "D":
          var audio=new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
     case "F":
          var audio=new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
     case "G":
          var audio=new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
     case "V":
          var audio=new Audio("sounds/tom-6.mp3");
          audio.play();
          break;
     case "C":
          var audio=new Audio("sounds/tom-7.mp3");
          audio.play();
          break;


    default: alert("no audio");
  }


}
function anoFun(currkey)
{
  var ani=document.querySelector("."+currkey);
   ani.classList.add("pressed");
   setTimeout(function(){
     ani.classList.remove("pressed");},100
   );
}
