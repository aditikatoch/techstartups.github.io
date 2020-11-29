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
    // buttons[i].addEventListener('mouseover', function(event){
    //     event.target.style.backgroundColor='rgb(209, 54, 54)'
    //   })
    // buttons[i].addEventListener('mouseout', function(event){
    //     event.target.style.backgroundColor=' #000000'
    //   })
    buttons[i].addEventListener('mouseover', function(event){
      event.target.style.fontSize= '18px' 
      //event.target.style.opacity = '0.5'
      event.target.style.backgroundColor='rgb(209, 54, 54)'
    })
    buttons[i].addEventListener('mouseout', function(event){
      event.target.style.fontSize= '16px'
      //event.target.style.opacity = '1'
      event.target.style.backgroundColor=' #000000'
    })
 
}


