const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
      {x: 100, y: -20},
      {x: 300, y:  10},
      {x: 500, y: 100},
      {x: 750, y: -100},
      {x: 350, y: -50},
      {x: 600, y: 100},
      {x: 800, y: 0},
      {x: window.innerWidth, y: -250},
    ]
  };
  
  
  const tween = new TimelineLite();
  
  tween.add(
    TweenLite.to(".paper-plane",1,{
      bezier: flightPath,
      ease: Power1.easeInOut
    })
  );
  
  const controller = new ScrollMagic.Controller();
  
  const scene = new ScrollMagic.Scene({
    triggerElement: ".emp",
    duration: 1000,
    triggerHook: 0
  })
  .setTween(tween)
  .setPin(".emp")
  .addTo(controller);
  
  

  function text(words){
      let o = document.getElementById("un"),
       t = document.getElementById("text1"),
        waite = false,
        visible = true,
        charCounter = 1,
        z = 1;
      
      window.setInterval(()=>{
          if(charCounter === 0  && waite === false){
              waite = true;
              let t = document.getElementById("text1");
              t.innerHTML = words[0].substring(0,charCounter);
              window.setTimeout(function(){
                  let usedWord = words.shift();
                  words.push(usedWord);
                  z = 1;
                  charCounter += z;
                  waite = false;
              }, 500);
          } else if(charCounter === words[0].length + 1 && waite === false){
              waite = true;
              window.setTimeout(function(){
                z = -1;
                charCounter += z;
                waite = false;
            }, 500);
          }else if(waite === false){
              let t = document.getElementById("text1")
                t.innerHTML = words[0].substring(0,charCounter);
                charCounter += z;
          }
      },120);
      window.setInterval(() => {
          if(visible === true){
            let o = document.getElementById("un")
              o.className = "un hidden"; 
              visible = false;
          }else{
            let o = document.getElementById("un")
            o.className = "un"; 
            visible = true;
          }
      },400);
  }
  
// text(["Backend Developer"])



// text2

function text_2(words){
  let o = document.getElementById("un2"),
   t = document.getElementById("text2"),
    waite = false,
    visible = true,
    charCounter = 1,
    z = 1;
  
  window.setInterval(()=>{
      if(charCounter === 0  && waite === false){
          waite = true;
          let t = document.getElementById("text2");
          t.innerHTML = words[0].substring(0,charCounter);
          window.setTimeout(function(){
              let usedWord = words.shift();
              words.push(usedWord);
              z = 1;
              charCounter += z;
              waite = false;
          }, 500);
      } else if(charCounter === words[0].length + 1 && waite === false){
          waite = true;
          window.setTimeout(function(){
            z = -1;
            charCounter += z;
            waite = false;
        }, 500);
      }else if(waite === false){
          let t = document.getElementById("text2")
            t.innerHTML = words[0].substring(0,charCounter);
            charCounter += z;
      }
  },120);
  window.setInterval(() => {
      if(visible === true){
        let o = document.getElementById("un2")
          o.className = "un2 hidden2"; 
          visible = false;
      }else{
        let o = document.getElementById("un2")
        o.className = "un2"; 
        visible = true;
      }
  },400);
}



// text_2(["Micro-services API"])


// text3

 function text_3(words){
  let o = document.getElementById("un3"),
   t = document.getElementById("text3"),
    waite = false,
    visible = true,
    charCounter = 1,
    z = 1;
  
  window.setInterval(()=>{
      if(charCounter === 0  && waite === false){
          waite = true;
          let t = document.getElementById("text3");
          t.innerHTML = words[0].substring(0,charCounter);
          window.setTimeout(function(){
              let usedWord = words.shift();
              words.push(usedWord);
              z = 1;
              charCounter += z;
              waite = false;
          }, 500);
      } else if(charCounter === words[0].length + 1 && waite === false){
          waite = true;
          window.setTimeout(function(){
            z = -1;
            charCounter += z;
            waite = false;
        }, 500);
      }else if(waite === false){
          let t = document.getElementById("text3")
            t.innerHTML = words[0].substring(0,charCounter);
            charCounter += z;
      }
  },120);
  window.setInterval(() => {
      if(visible === true){
        let o = document.getElementById("un3")
          o.className = "un3 hidden3"; 
          visible = false;
      }else{
        let o = document.getElementById("un3")
        o.className = "un3"; 
        visible = true;
      }
  },400);
}

setTimeout(()=> { text(["Backend Developer"]); }, 1000);
setTimeout(()=> { text_2(["Micro-services API"]); }, 6000 );
setTimeout(()=> { text_3(["Machine Learning enthusiast"]); }, 12000);

// text_3(["Machine Learning enthusiast"])
// text(["Backend Developer"])
// text_2(["Micro-services API"])
// setTimeout(text_3(["Machine Learning enthusiast"]),( 5 * 5000));


// text0

function text_0(words){
  let o = document.getElementById("un0"),
   t = document.getElementById("text0"),
    waite = false,
    visible = true,
    charCounter = 1,
    z = 1;
  
  window.setInterval(()=>{
      if(charCounter === 0  && waite === false){
          waite = true;
          let t = document.getElementById("text0");
          t.innerHTML = words[0].substring(0,charCounter);
          window.setTimeout(function(){
              let usedWord = words.shift();
              words.push(usedWord);
              z = 1;
              charCounter += z;
              waite = false;
          }, 500);
      } else if(charCounter === words[0].length + 1 && waite === false){
          waite = true;
          window.setTimeout(function(){
            z = -1;
            charCounter += z;
            waite = false;
        }, 500);
      }else if(waite === false){
          let t = document.getElementById("text0")
            t.innerHTML = words[0].substring(0,charCounter);
            charCounter += z;
      }
  },120);
  window.setInterval(() => {
      if(visible === true){
        let o = document.getElementById("un0")
          o.className = "un0 hidden0"; 
          visible = false;
      }else{
        let o = document.getElementById("un0")
        o.className = "un0"; 
        visible = true;
      }
  },400);
}



text_0(["Employee at Wipro"])

