$(document).ready(function () {
// alert('Jquery Works');

//Creates original grid
function createGrid(size) {
    for (var i = 0; i < size; i++) {
        var newRow = $('<div class ="row"></div>');
        $('#container').append(newRow);
    }

    for (var j = 0; j < size; j++) {
        var newColumn = $('<div class ="column"></div>');
        $('.row').append(newColumn);
    }

    $('.row').height(460 / size);
    $('.column').height(460 / size);
    $('.column').width(460 / size);
}





  //get size of the grid
  var oldSize = 16;
  createGrid(oldSize);
//
//   //get size of each 'pixel'
//   var oldPixel = $('.column').outerHeight();
//
//
// Resizes Grid
function newGrid (newSize) {
        $('.row').remove();
        createGrid(newSize);
        // $('.column').outerHeight(oldSize*oldPixel/newSize);
        // $('.column').outerWidth(oldSize*oldPixel/newSize);
}


  $('#set-pixels').on('click', function() {
        var newColumn = prompt("Set your desired pixel count (Note: Optimal below 150 pixels)");
        if (newColumn === null) {
            return;
        }
        else if (newColumn === "") {
            return;
        }
        else {
            newGrid(newColumn);
        }
    });




    //clears Grid
    function clearGrid () {
            $('.column').css('background-color', '#d4e5b9');
            // $('div').off();
    }

    $('#reset').on('click', clearGrid);
    //Allows user to color
      $('div').on('mouseenter', '.column', function(){
        $(this).css('background-color', 'black');
      });


});
