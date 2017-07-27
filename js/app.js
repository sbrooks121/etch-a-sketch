//default variables
var gridSize = 16;
var monochrome = false;

//initialise grid function
function initialiseGrid(g) {
  $('.pixel').detach();
  console.log("g: " + g);
  //generate pixels
  for (var i = 0; i < g; i++) {
    $('#app-container').append('<div class="pixel pixel-column"></div');
    for (var j = 0; j < g; j++) {
      $('#app-container > div:last').append('<div class="pixel"></div>');
    }
  }
  //generate pixel styles
  var pixelSize = (480 / g);
  console.log("pixelSize: " + pixelSize);
  $('.pixel').css({height: pixelSize, width: pixelSize});
}

//random rgb number generator
function getRdmRGBColour() {
  return Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
}

$(document).ready(function(){
  //setup default grid
  initialiseGrid(gridSize);

  //new grid
  $('#app-newGrid-button').on('click', function(){
    var newGridSize = $('#app-newGrid-input').val();
    console.log("newGridSize: " + newGridSize);
    if (newGridSize != null && newGridSize >= 1 && newGridSize <= 100) {
      gridSize = newGridSize;
      initialiseGrid(gridSize);
    }
  });

  //reset grid
  $('#app-resetGrid').on('click', function(){
    $('.pixel').css('background-color', '#ffffff');
  });

  //ctoggle colour scheme (monochrome/polychrome)
  $('#app-toggleColours-button').on('click', function(){
    monochrome = !monochrome;
    if (monochrome === true){
      $('#app-toggleColours-label').html("Colour Scheme: Monochrome");
    } else {
      $('#app-toggleColours-label').html("Colour Scheme: Polychrome");
    }
  });

  //change colour if mouse enters
  $('.pixel').mouseenter(function(){
    if (monochrome === true) {
      //use monochrome colour
      $(this).css('background-color', '#000000');
    } else {
      //use polychrome colour
      var rgbColour = "rgb(" + getRdmRGBColour() + ", " + getRdmRGBColour() + ", " + getRdmRGBColour() + ")";
      $(this).css('background-color', rgbColour);
    }
  });
});
