  /*
  Add an event listener and attach it to the "get-text" id.
  When the link is clicked:
    Prevent the default action
    Change the content of the "text-box-replace" div to "world"
  */
$(document).ready(function(){

    // when you click the element called text-box-replace, 
    // fire the function (has parens) with the event - the
    // event was the clicking
  $('#text-box-replace').on('click', function(evt){

    // find the element called get-text and change the
    // text to "world"
    $('#get-text').text("world");

    // oh and by the way, prevent the firing of the even -
    // the event was the clicking on the link and the default
    // firing action is going to that link - DISABLED
    evt.preventDefault();
  });
});
