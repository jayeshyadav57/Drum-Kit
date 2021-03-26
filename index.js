// It gives the all count of the class 'drum'
var lengthOfDrum = document.querySelectorAll(".drum").length;  


// This for loop is add Eventlistner to all the class 
for (var i = 0; i < lengthOfDrum; i++) {

    // this will accure when the user click the any of the drum
    document.querySelectorAll("button")[i].addEventListener("click",
        function handleClick() {                                       // When any one of drum class click the this function exacute
            var buttonInnerHtml = this.innerHTML;                       // this will give the name of class of which is drum click eg.if we hit the w than the buttonInnerHtml have value w.
            
            makesound(buttonInnerHtml);                  //This function genrate the sound according to click class

            buttonAnimation(buttonInnerHtml);            
    });


   document.addEventListener("keypress",function(event){

        makesound(event.key);                            // here the event.key function return the which button is pressed-> name
         //This function genrate the sound according to  button press

        buttonAnimation(event.key);
   }) ;


   function buttonAnimation(currentKey){                   // This function is use for add the effect on the current press button
       var activeKey=document.querySelector("."+currentKey);      // select the class in which we have to add effect, eg. cuurentKey=w; then the doument.querySelector(.w)
       activeKey.classList.add("pressed");                    // this line will add the .passed css class to tge activekey
       setTimeout(function(){                                // This function use for set the delay between the next task which is here , remove the prassed class
           activeKey.classList.remove("pressed");
       },100);
   }
    function makesound(buttonPress)     //according  to  the value or perameter it produced the sound
    {
        switch (buttonPress) {
            case 'w':
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case 'a':
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case 's':
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case 'd':
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case 'j':
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case 'k':
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case 'l':
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                break;
        }
    }
        
}
