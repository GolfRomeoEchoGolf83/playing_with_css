window.addEventListener("load", function(){
  var particles = 30;
  for(var i=0; i<particles; i++){
    $.each($(".explosif > *:last-child"), function(){
      var node = document.createElement("span");
      $(this).append(node);
    });
  }
});