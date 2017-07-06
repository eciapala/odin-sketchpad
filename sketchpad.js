var size = 16;
var height = 400;
var width =  650;

function clearPad() {

}

function makeGrid() {
  for( var i = 0; i < height; i++) {
    for var j = 0; j < width; j++) {
      $("<div class="gridhovered"></div>").appentTo(".cointainer");
    }
  }
  $('.gridhovered').css({'width': size, 'height': size});
}

function gridSize() {
  var size = prompt("Please enter grid size between 1 and 40.");
  if (size >= 1 && size <= 40) {

  }
  else if (size == null || size == "") {
    size = 16;
    alert("User cancelled the prompt.");
  }
  else {
    size = 16;
    alert("You entered wrong number.");
  }
}

$(document).ready(function() {

  $(".container").mouseover(function() {
    makeGrid();
    });
  $("#clear").click(function() {
    clearPad();
  });

  $("#grid").click(function() {
    gridSize();
  });
});
