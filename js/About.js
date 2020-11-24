document.addEventListener('DOMContentLoaded', function() {
    // Your code here...
    console.log('Page has loaded')
  });

var loadingpage = document.createElement('load');

document.body.appendChild(loadingpage);
    loadingpage.style.width ='100%';
    loadingpage.style.height = '100%';
    loadingpage.style.position = 'fixed';
    loadingpage.style.zindex='9999';
    loadingpage.style.background = 'white';

  console.log(document.getElementsByTagName('load'))


  document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementsByTagName('content')[0].style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementsByTagName('load')[0].style.visibility="hidden";
           document.getElementsByTagName('content')[0].style.visibility="visible";
        },1000);
    }
  }

  var string = document.getElementsByTagName('h1');
  var numberofheadings = string.length;
 console.log( string[0].innerText.length)
  for(var i = 0; i < numberofheadings; i++) {
    console.log(string[i].innerText);
    var font = string[i].style.fontSize
    string[i].addEventListener('mouseenter', function(event){
            event.target.style.fontSize= '60px' 
            event.target.style.opacity = '0.5'
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

