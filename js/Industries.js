document.addEventListener('DOMContentLoaded', function() {
    // Your code here...
    console.log('Page has loaded')
  });
var string = document.getElementsByTagName('p');
  var numberofheadings = string.length;
 console.log( string[0].innerText.length)
  for(var i = 0; i < numberofheadings; i++) {
    console.log(string[i].innerText);
    var font = string[i].style.fontSize
    string[i].addEventListener('mouseenter', function(event){
            event.target.style.fontSize= '21px' 
            //event.target.style.opacity = '0.5'
    })
    string[i].addEventListener('mouseleave', function(event){
        event.target.style.fontSize= font
        event.target.style.opacity = '1'
    })

  }
var buttons = document.getElementsByTagName('button');
var numberofbuttons = buttons.length;

console.log(buttons);
for(var i = 0; i < numberofbuttons; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener('mouseover', function(event){
        event.target.style.backgroundColor='rgb(209, 54, 54)'
      })
    buttons[i].addEventListener('mouseout', function(event){
        event.target.style.backgroundColor=' #000000'
      })
    //Do something
}


var image1 = document.getElementsByClassName('industry-type1')[0].getElementsByTagName("img")[0];
var images1 = ["../img/security-img.jpg","../img/logos/cybersmart.png", "../img/logos/tessian.png", "../img/logos/cybsafe.png"];

function myLoop(i,target,imagelist) {

    setTimeout(function() {   
        console.log(target)
        var j = imagelist.indexOf(String(target.getAttribute('src')));
        var numberofimages = imagelist.length;
        console.log(j);
        
        if (j<numberofimages-1){
            target.src = imagelist[j+1];
        }
        if (j==numberofimages-1){
            target.src = imagelist[0];
        }
     
            
        
        
       //  your code here     
        ;
        if (--i) myLoop(i,target,imagelist);   //  decrement i and call myLoop again if i > 0
    }, 1000)

  };                   //  pass the number of iterations as an argument

image1.addEventListener('mouseenter', function(event){
    myLoop(4,event.target,images1)
    })

var image2 = document.getElementsByClassName('industry-type2')[0].getElementsByTagName("img")[0];
var images2 = ["../img/security-img.jpg", "../Logos/MeliorGamesLogo.png", "../Logos/Roblox Logo.png", "../Logos/TBC logo.png"];
image2.addEventListener('mouseenter', function(event){
    myLoop(4,event.target,images2)
    })

