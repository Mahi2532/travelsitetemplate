var uppernav= document.getElementById("uppernav")
var lowernav= document.getElementById("lowernav")
var fullnav= document.getElementById("fullnav")
var leftup= document.getElementById("left-up")
var rightup= document.getElementById("right-up")
var backimg= document.getElementById("backimg")
var number= document.getElementById("number")
window.addEventListener('scroll' , ()=>{
  const scrollable=40;
  const scrolled=positiontop=$(document).scrollTop();
  if(Math.ceil(scrolled)>scrollable ){
    uppernav.style.height="0%"
leftup.style.display="none"
rightup.style.display="none"
    lowernav.style.height="100%"
    fullnav.style.height="115px"
    backimg.style.marginTop="0px"
      }
    else{
        uppernav.style.height="25%"
        lowernav.style.height="75%"
        number.style.display="block"
        fullnav.style.height="180px"
        leftup.style.display="flex"
rightup.style.display="flex"
backimg.style.marginTop="39px"
    }});

var card1= document.getElementById("card3")
var card2= document.getElementById("card2")
var card3= document.getElementById("card3")
var img1= document.getElementById("img1")
var img2= document.getElementById("img2")
var img3= document.getElementById("img3")

function zoomimg1(){img1.style.transform="scale(1.1)"}
function normimg1(){img1.style.transform="scale(1.0)"}
function zoomimg2(){img2.style.transform="scale(1.1)"}
function normimg2(){img2.style.transform="scale(1.0)"}
function zoomimg3(){img3.style.transform="scale(1.1)"}
function normimg3(){img3.style.transform="scale(1.0)"}