// for the xray

const xb = document.querySelector('#xb');
/*
var e = document.getElementsByClassName(".objs");
  
// Wait for user to click the button
e.addEventListener( "click", function() {

  // Put the selected value into a variable
  var btnname = this.id;
  
  // The "Switch" statement.
  switch (btnname) {
  case "b1":
    document.getElementById("item2").innerHTML= "coupling";
    break;

  case "b2":
    alert("Quite daring!");
    break;

  case "b3":
    alert("Like... grass?");
    break;
    
  }
}, false); */
//[button, item1, item2, result]
/*
const b1 = [document.getElementById("b1"), "plate", "coupling", "plate"];
const b2 = [document.getElementById("b2"), "coupling", "cup", "bowl/mortar"];
const b3 = [document.getElementById("b3"), "cup", "bottle", "funnel"];
const b4 = [document.getElementById("b4"), "bottle", "rx", "vase"];
const b5 = [document.getElementById("b5"), "bottle", "tampon", "glass"];
const b6 = [document.getElementById("b6"), "rx", "tampon", "shot"];
*/

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");

var prevVid;

function stopPlaying (v) {
    console.log("was playing " + v )
    v.classList.remove("currentlyplaying");
}
/*
b1.addEventListener("click", playVid(b1));
b2.addEventListener("click", playVid(b2));
b3.addEventListener("click", playVid(b3));
b4.addEventListener("click", playVid(b4));
b5.addEventListener("click", playVid(b5));
b6.addEventListener("click", playVid(b6));

function playVid(obj) {
    if (prevVid) {
        stopPlaying(prevVid);
    }
    var item1 = obj[1];
    var item2 = obj[2];
    var item3 = obj[3];
    var vid = document.getElementById(item1+"_"+item2);
    console.log("playing video" + vid);
    vid.classList.add('currentlyplaying');
    document.getElementById("item1").innerHTML= item1;
    document.getElementById("item2").innerHTML= item2;
    document.getElementById("result").innerHTML= item3;        
    prevVid = vid;
}

*/

b1.addEventListener("click", vidOne);
      function vidOne() {
        if (prevVid) {
            stopPlaying(prevVid);
        }
        var vidname="plate_coupling";
        if (xb.checked) {
            vidname+= "_x";
        }
        var vid = document.getElementById(vidname);
        currVid=vid;
        vid.classList.add('currentlyplaying');
        document.getElementById("item1").innerHTML= "plate";
        document.getElementById("item2").innerHTML= "coupling";
        document.getElementById("result").innerHTML= "soft plate";        
        prevVid = vid;
}

b2.addEventListener("click", vidTwo);
      function vidTwo() {
        if (prevVid) {
            stopPlaying(prevVid);
        }
        var vidname="coupling_cup";
        if (xb.checked) {
            vidname+= "_x";
        }
        var vid = document.getElementById(vidname);
        currVid=vid;
        prevVid = vid;
        vid.classList.add('currentlyplaying');
        document.getElementById("item1").innerHTML= "coupling";
        document.getElementById("item2").innerHTML= "dome cup";
        document.getElementById("result").innerHTML= "bowl / mortar";
}

b3.addEventListener("click", vidThree);
      function vidThree() {
        if (prevVid) {
            stopPlaying(prevVid);
        }
        var vidname="cup_bottle";
        if (xb.checked) {
            vidname+= "_x";
        }
        var vid = document.getElementById(vidname);
        currVid=vid;
        prevVid = vid;
        vid.classList.add('currentlyplaying');
        document.getElementById("item1").innerHTML= "solo cup";
        document.getElementById("item2").innerHTML= "plastic bottle";
        document.getElementById("result").innerHTML= "funnel";
}

b4.addEventListener("click", vidFour);
      function vidFour() {
        if (prevVid) {
            stopPlaying(prevVid);
        }
        var vidname="bottle_rx";
        if (xb.checked) {
            vidname+= "_x";
        }
        var vid = document.getElementById(vidname);
        prevVid = vid;
        vid.classList.add('currentlyplaying');
        document.getElementById("item1").innerHTML= "plastic bottle";
        document.getElementById("item2").innerHTML= "rx bottle";
        document.getElementById("result").innerHTML= "vase";
}

b5.addEventListener("click", vidFive);
      function vidFive() {
        if (prevVid) {
            stopPlaying(prevVid);
        }
        var vidname="bottle_tampon";
        if (xb.checked) {
            vidname+= "_x";
        }
        var vid = document.getElementById(vidname);
        prevVid = vid;
        vid.classList.add('currentlyplaying');
        document.getElementById("item1").innerHTML= "bottle";
        document.getElementById("item2").innerHTML= "tampon";
        document.getElementById("result").innerHTML= "martini glass";
}

b6.addEventListener("click", vidSix);
      function vidSix() {
        if (prevVid) {
            stopPlaying(prevVid);
        }
        var vidname="rx_tampon";
        if (xb.checked) {
            vidname+= "_x";
        }
        var vid = document.getElementById(vidname);
        prevVid = vid;
        vid.classList.add('currentlyplaying');
        document.getElementById("item1").innerHTML= "rx bottle";
        document.getElementById("item2").innerHTML= "tampon";
        document.getElementById("result").innerHTML= "bottomless cup";
}
