
window.addEventListener("load",appear())
function appear()
{
    document.getElementById("greet").style.opacity = "1";
    
    
}

let text = document.querySelector("#intro");
let textcont = text.textContent;
let strtext = textcont.split(" ");
let tru = document.querySelector("#trudis");
let y = 0;
let c = " ";


for(i=0;i<strtext.length;i++)
{
    tru.innerHTML += "<span>"+strtext[i]+"</span>"+" ";
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick()
{
    let span = document.querySelectorAll("span")[char];
    
    span.classList.add("fade");
    char++;
    if(char === strtext.length){
       compelete(); 
       bubble();
       return;
    }
}

function compelete()
{
  clearInterval(timer);
  timer = null; 
  
}


function bubble()
{
    document.getElementById("bub1").style.opacity = "1";
    document.getElementById("bub2").style.opacity = "1";
}

document.querySelector(".cred").addEventListener("mouseover",displaycredimg);

function displaycredimg()
{
    y = 1;
    document.getElementById("img1").style.opacity = "1";
    document.getElementById("img2").style.opacity = "1";
    document.getElementById("credh").style.transform = "translateY(100px)"
    document.getElementById("img3").style.opacity = "1";
    document.getElementById("img4").style.opacity = "1";
}

//project loop start below

/*

let projectIntro = document.querySelector(".projecttext");
let projectIntroText = projectIntro.textContent;
let letterProject = projectIntroText.split("");
let projectCurve = document.querySelector(".displayCurve");

for(i=0;i<projectIntroText.length;i++)
{
    //projectCurve.innerHTML += "<span>"+letterProject[i]+"</span>"+" ";
    //let projectWords = projectCurve.querySelectorAll('span');
    //projectWords[i].classList.add("curvetext");
   //console.log(letterProject[i]);
   let x = letterProject[i];
   //projectCurve.innerHTML += "<span>"+x+"</span>"+" ";
   c = "<span>"+x+"</span>";
   //let y = projectCurve.querySelectorAll("span");
   projectCurve.innerHTML += c;
   
   $(c).addClass('lettercurve'+i);
   console.log(c);

   
   

}

*/

