$(function() {
  
  var n = 1, keycode, slides = $(".slide");
  
  $(document).keyup(function(event) {
    event.preventDefault();
    
    keycode = event.keyCode;
    if ([37, 39].indexOf(keycode) == -1) return;
    
    n = (keycode == 39) ? n + 1 : n - 1;
    
    if (n < 1) n = 1;
    if (n > slides.length) n = slides.length;
    
    slides.hide();
    $(slides.get(n-1)).show();
  })
  
})