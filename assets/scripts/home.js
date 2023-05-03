/*
const sPlate = new Set(["coupling"]);
const sCoup = new Set(["plate","dome"]);
const sDome = new Set(["coupling","tampon"]);
const sSolo = new Set(["bottle"]);
const sBott = new Set(["solo", "rx", "tampon"]);
const sRx = new Set(["solo", "bottle", "tampon"]);
const sTamp = new Set(["bottle", "rx"]);

var first;
var second;
var counter;

console.log(sPlate);

const toggleButton = index => {
    buttons[index] = !buttons[index]; 
    update(); 
  }

document.getElementById("plate").addEventListener("click", e1 => {
 // if it's the 2nd button, play vid then reset 
    if (counter) {
        document.getElementById("item2").innerHTML= e1.target.id;
        counter = !counter;
        const expr = document.getElementById("item1").textContent;
        console.log(expr);
        switch (expr) {
        case 'plate':
            document.getElementById("item1").innerHTML= "item1";
            counter = null;
            break;
        case 'coupling':
            console.log('Oranges are $0.59 a pound.');
            break;
        default:
            document.getElementById("result").innerHTML= "coming soon";
    }
    } 
  //first item, wait for 2nd item
    else {
        document.getElementById("item1").innerHTML= e1.target.id;
        counter = 1;
    }
  });

    document.getElementById("coupling").addEventListener("click", e1 => {
    
       if (counter) {
           document.getElementById("item2").innerHTML= e1.target.id;
            counter = !counter;
       } 
   
       else {
           document.getElementById("item1").innerHTML= e1.target.id;
           counter = 1;
       }
     });

    document.getElementById("dome").addEventListener("click", e1 => {

           if (counter) {
               document.getElementById("item2").innerHTML= e1.target.id;
               counter = !counter;
           } 

           else {
               document.getElementById("item1").innerHTML= e1.target.id;
               counter = 1;
           }
         });

*/

  
/*
const wrap = document.getElem("#molds");
wrap.addEventListener('click', (e) => {
    e.target.classList.add('active');
} );
*/

/*
const noVidFoundArray = document.getElementById('plate');

const curr = document.getElementById('plate');
curr.addEventListener('click', pairSelector(prev, curr));


function pairSelector(item1, item2) {
    if (prev == null) {
        document.getElementById("item1").innerHTML= curr.id;
        prev = curr;
        for (i in noVidFoundArray) {
            i.classList.add('greyed');
        }
    }
    else {
        document.getElementById("item2").innerHTML= curr.id;
    }

};
*/

/*
var nextTarget = null;
const wrapper = document.querySelector('#molds');
var counter= 0;

wrapper.addEventListener('click', (evnt) => {
  while (counter <2) {
    document.getElementById("item1").innerHTML=evnt.target.id;
    evnt.target.classList.add('active');
    counter++;
  }
  counter =0;
  }
  );
  */

