//Function for disabling cell while drawing anything
var disableCell = function (timer) {
    //disable click
    $('.col').addClass('disableClick');

    //enable click
    setTimeout(function () {
        $('.col').removeClass('disableClick');
    }, timer);
};

$(document).ready(function () {
    //script for count strokeDasharray and strokeDashoffset for svg
    var svgPaths = jQuery('path');
    for (var x = 0; x < svgPaths.length; x++) {
        var path = svgPaths[x];
        var pathDimensions = path.getTotalLength();
        path.style.strokeDasharray = pathDimensions;
        path.style.strokeDashoffset = pathDimensions;
    }

    //disable click for cell and enable after drawing grid
    disableCell(5000);
});

//step
var step = 'cross';
//count click for cell
var clickCounter = 0;

//cell click function
$('.col').click(function () {
    var self = this;

    //disable click for cell while drawing symbol
    disableCell(1500);

    //check if cell has't symbol
    if (!$(this).hasClass('hasCircle') && !$(this).hasClass('hasCross')) {

        //check if step == cross
        if (step == 'cross') {

            //clone first part cross symbol to cell
            $('#cross').clone().appendTo(this);

            //clone second part cross symbol to cell after first was drawing
            setTimeout(function () {
                $('#cross2').clone().appendTo(self);
            }, 1000);

            //change next step
            step = 'circle';

            //add class for this cell
            $(this).addClass('hasCross');

            //counter +1;
            clickCounter++;
        }

        //else if step == circle
        else {
            //clone circle symbol to cell
            $('#circle').clone().appendTo(this);

            //change next step
            step = 'cross';

            //add class for this cell
            $(this).addClass('hasCircle');

            //counter +1;
            clickCounter++;
        }
    }

    //check if row, column or diagonal has win for drawing line
    if (($('.col.hasCross:nth-child(1),.col.hasCross:nth-child(2),.col.hasCross:nth-child(3)').length == 3) ||
        ($('.col.hasCircle:nth-child(1),.col.hasCircle:nth-child(2),.col.hasCircle:nth-child(3)').length == 3)) {
        //add line for first row
        $('#row-1').show();
    } else if (($('.col.hasCross:nth-child(4),.col.hasCross:nth-child(5),.col.hasCross:nth-child(6)').length == 3) ||
        ($('.col.hasCircle:nth-child(4),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(6)').length == 3)) {
        //add line for second row
        $('#row-2').show();
    } else if (($('.col.hasCross:nth-child(7),.col.hasCross:nth-child(8),.col.hasCross:nth-child(9)').length == 3) ||
        ($('.col.hasCircle:nth-child(7),.col.hasCircle:nth-child(8),.col.hasCircle:nth-child(9)').length == 3)) {
        //add line for third row
        $('#row-3').show();
    } else if (($('.col.hasCross:nth-child(1),.col.hasCross:nth-child(4),.col.hasCross:nth-child(7)').length == 3) ||
        ($('.col.hasCircle:nth-child(1),.col.hasCircle:nth-child(4),.col.hasCircle:nth-child(7)').length == 3)) {
        //add line for first column
        $('#column-1').show();
    } else if (($('.col.hasCross:nth-child(2),.col.hasCross:nth-child(5),.col.hasCross:nth-child(8)').length == 3) ||
        ($('.col.hasCircle:nth-child(2),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(8)').length == 3)) {
        //add line for second column
        $('#column-2').show();
    } else if (($('.col.hasCross:nth-child(3),.col.hasCross:nth-child(6),.col.hasCross:nth-child(9)').length == 3) ||
        ($('.col.hasCircle:nth-child(3),.col.hasCircle:nth-child(6),.col.hasCircle:nth-child(9)').length == 3)) {
        //add line for third column
        $('#column-3').show();
    } else if (($('.col.hasCross:nth-child(3),.col.hasCross:nth-child(5),.col.hasCross:nth-child(7)').length == 3) ||
        ($('.col.hasCircle:nth-child(3),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(7)').length == 3)) {
        //add line for first diagonal
        $('#diagonal-1').show();
    } else if (($('.col.hasCross:nth-child(1),.col.hasCross:nth-child(5),.col.hasCross:nth-child(9)').length == 3) ||
        ($('.col.hasCircle:nth-child(1),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(9)').length == 3)) {
        //add line for second diagonal
        $('#diagonal-2').show();
    }

    //check if win cross
    if (
        ($('.col.hasCross:nth-child(1),.col.hasCross:nth-child(2),.col.hasCross:nth-child(3)').length == 3) ||
        ($('.col.hasCross:nth-child(4),.col.hasCross:nth-child(5),.col.hasCross:nth-child(6)').length == 3) ||
        ($('.col.hasCross:nth-child(7),.col.hasCross:nth-child(8),.col.hasCross:nth-child(9)').length == 3) ||
        ($('.col.hasCross:nth-child(1),.col.hasCross:nth-child(4),.col.hasCross:nth-child(7)').length == 3) ||
        ($('.col.hasCross:nth-child(2),.col.hasCross:nth-child(5),.col.hasCross:nth-child(8)').length == 3) ||
        ($('.col.hasCross:nth-child(3),.col.hasCross:nth-child(6),.col.hasCross:nth-child(9)').length == 3) ||
        ($('.col.hasCross:nth-child(3),.col.hasCross:nth-child(5),.col.hasCross:nth-child(7)').length == 3) ||
        ($('.col.hasCross:nth-child(1),.col.hasCross:nth-child(5),.col.hasCross:nth-child(9)').length == 3)
    ) {
        //disable click for cell
        $('.col').addClass('disableClick');

        //after drawing last symbol
        setTimeout(function () {
            //show result modal window
            $('.result-btn').trigger('click');
            //show result title for cross
            $('.result-title--cross').show();
            //hide result title for circle and draw
            $('.result-title--circle, .result-title--none').hide();
        }, 2000);
    }

    //check if win circle
    else if (
        ($('.col.hasCircle:nth-child(1),.col.hasCircle:nth-child(2),.col.hasCircle:nth-child(3)').length == 3) ||
        ($('.col.hasCircle:nth-child(4),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(6)').length == 3) ||
        ($('.col.hasCircle:nth-child(7),.col.hasCircle:nth-child(8),.col.hasCircle:nth-child(9)').length == 3) ||
        ($('.col.hasCircle:nth-child(3),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(7)').length == 3) ||
        ($('.col.hasCircle:nth-child(1),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(9)').length == 3)
    ) {
        //disable click for cell
        $('.col').addClass('disableClick');

        //after drawing last symbol
        setTimeout(function () {
            //show result modal window
            $('.result-btn').trigger('click');
            //show result title for circle
            $('.result-title--circle').show();
            //hide result title for cross and draw
            $('.result-title--cross,.result-title--none').hide();
        }, 2000);
    }

    //check if draw
    else if (clickCounter == 9) {
        //disable click for cell
        $('.col').addClass('disableClick');

        //after drawing last symbol
        setTimeout(function () {
            //show result modal window
            $('.result-btn').trigger('click');
            //show result title for draw
            $('.result-title--none').show();
            //hide result title for cross and circle
            $('.result-title--cross,.result-title--cross').hide();
        }, 2000);
    }
});


//modal open function
$('.start-btn').click(function () {
    //remove classes from cell and symbols
    $('.col').empty().removeClass('hasCircle hasCross disableClick');

    //remove all line
    $('#row-1,#row-2,#row-3,#column-1,#column-2,#column-3,#diagonal-1,#diagonal-2').hide();
});
