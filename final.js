  /*
  Add an event listener and attach it to the "get-text" id.
  When the link is clicked:
    Prevent the default action
    Change the content of the "text-box-replace" div to "world"
  */
$(document).ready(function(){
    // when you click the element called text-box-replace, 
    // fire the function (function has parens, therefore, is fired) 
    // with the event - the event was the clicking
  $('#text-box-replace').on('click', function(evt){
    // find the element called get-text and change the
    // text to "world"
    $('#get-text').text("world");
    // oh and by the way, prevent the firing of the event -
    // the event was the clicking on the link and the default
    // firing action is: going to that link - DISABLED
    evt.preventDefault();
  });


  $('#text-box-color').on('click', function(evt){
    $('#text-box-color').css('background-color', 'red');
    $('#text-box-color').text("I am the color red!");
    evt.preventDefault();
  });


  $('#get-melon').on('click', function(evt){
    $('img').attr('src', 'http://www.foodsubs.com/Photos/melon-persian.jpg');
    evt.preventDefault();
  });

  $('#be-awesome').on('click', function(evt){
    $('#awesome-box').removeClass('hidden');
    evt.preventDefault();
  });

}); // close document.ready


