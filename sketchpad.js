$(document).ready(function(){
  makeGrid(16);

  $("#clear").click(function(){
    clearPad();
  });

  $("#grid").click(function(){
    makeGrid();
  });
});

function makeGrid(size){
  if(!size){
    size = prompt("Please enter grid size: ");
  }
  $("#pad").empty();
  for(let i = 0; i  < Math.pow(size, 2); i++){
		$('#pad').append('<div class="square"></div>');
	}
	$('.square').width(650/size);
	$('.square').height(400/size);
	$('.square').mouseenter(function(){
		$(this).css('background-color', 'black');
  });
}

function clearPad() {
  var con = confirm("Are you sure?");
  $('.square').css('background-color', 'f2f2f2');
}
