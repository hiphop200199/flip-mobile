    let container = document.getElementById("container");
    let upInner = document.getElementById("up-inner");
    let upCover = document.getElementById("up-cover");
    let offButton = document.getElementById("off");

     setTimeout(function(){
        upCover.style.transform = "rotateX(15deg) translateX(-25vw)";
        upInner.style.transform = "rotateX(15deg) translateX(-25vw)";
        upInner.style.zIndex = "3";
        container.style.perspectiveOrigin='55% 20%';
     },500);
      

    
  
    offButton.addEventListener("click",()=>{
      upInner.style.zIndex = "1";
      upCover.style.transform = "rotateX(-110deg) translateX(-25vw)";
      upInner.style.transform = "rotateX(-110deg) translateX(-25vw)";
      container.style.perspectiveOrigin='35% 20%';
      setTimeout(()=> window.open("","_self").close(),1700);
    })
     
     
   
  