'use strict';
const showButton = document.querySelector("button");
const showModWindow = document.querySelector(".modWindow");
const closeModWindow = document.querySelector("span");


showButton.addEventListener('click',function(){
 showModWindow.classList.remove('hide', 'zoomOut');
 showModWindow.classList.add('animated', 'zoomIn');
});
closeModWindow.addEventListener('click',function(){
  showModWindow.classList.remove('zoomIn');
  showModWindow.classList.add('zoomOut');
  setTimeout(function(){
    showModWindow.classList.add('hide');   
  }, 1000); 
});