for(let i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){ 
         var innerHtml=this.innerHTML;
        makesound(innerHtml)})
        
  

    
    document.addEventListener("keydown",function(event){makesound(event.key)});
}   
let audio = new Array(4).fill(0).map((_,i)=>"sounds/tom-"+i+".mp3")
audio.push("sounds/crash.mp3")
audio.push("sounds/kick-bass.mp3")
audio.push("sounds/snare.mp3")
audio = audio.map((x)=>new Audio(x))
const keys = {"w":0,"a":1,"s":2,"d":3,"j":4,"k":5,"l":6}
function makesound(key){
    switch (key) {
        case "w":
            var tom_1 =new  Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;

        case "a" :
            var tom_2 =new  Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;

        case  "s" :
            var tom_3 =new  Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        
        case "d" :
            var tom_4 =new  Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        
        case    "j" :
            var crash =new  Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "k" :
            var kick =new  Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            
        case "l" :
            var snare =new  Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        default:
            console.log("Incorrect Operation!");
    
    }
}