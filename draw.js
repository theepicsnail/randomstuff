function attachListeners(canvas){
    canvas.addEventListener('mousemove', ev_mousemove, false);
    
}


function ev_mousemove(ev){
  var x, y;

  // Get the mouse position relative to the canvas element.
  if (ev.layerX || ev.layerX == 0) { // Firefox
    x = ev.layerX;
    y = ev.layerY;
  } else if (ev.offsetX || ev.offsetX == 0) { // Opera
    x = ev.offsetX;
    y = ev.offsetY;
  }

    // do something with x,y
}

