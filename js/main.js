$(document).ready(function () {
    var svgPaths = jQuery('path');
    for (var x = 0; x < svgPaths.length; x++) {
        var path = svgPaths[x];
        var pathDimensions = path.getTotalLength();
        path.style.strokeDasharray = pathDimensions;
        path.style.strokeDashoffset = pathDimensions;
    }

    $('.col').addClass('disableClick');
    setTimeout(function () {
        $('.col').removeClass('disableClick');
    }, 5000);
});

var step = 'cross';

$('.col').click(function () {
    $('.col').addClass('disableClick');
    setTimeout(function () {
        $('.col').removeClass('disableClick');
    }, 1500);

    var self = this;

    if (step == 'cross') {
        if ($(this).hasClass('hasCircle') || $(this).hasClass('hasCross')) {
        }
        else {
            $('#cross').clone().appendTo(this);
            setTimeout(function () {
                $('#cross2').clone().appendTo(self);
            }, 1000);

            step = 'circle';
            $(this).addClass('hasCross');
        }
    }
    else {
        if ($(this).hasClass('hasCircle') || $(this).hasClass('hasCross')) {
        }
        else {
            $('#circle').clone().appendTo(this);
            step = 'cross';
            $(this).addClass('hasCircle');
        }
    }

    if (($('.col.hasCross:nth-child(1),.col.hasCross:nth-child(2),.col.hasCross:nth-child(3)').length == 3) ||
        ($('.col.hasCircle:nth-child(1),.col.hasCircle:nth-child(2),.col.hasCircle:nth-child(3)').length == 3)) {
        $('#row-1').show();
    } else if (($('.col.hasCross:nth-child(4),.col.hasCross:nth-child(5),.col.hasCross:nth-child(6)').length == 3) ||
        ($('.col.hasCircle:nth-child(4),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(6)').length == 3)) {
        $('#row-2').show();
    } else if (($('.col.hasCross:nth-child(7),.col.hasCross:nth-child(8),.col.hasCross:nth-child(9)').length == 3) ||
        ($('.col.hasCircle:nth-child(7),.col.hasCircle:nth-child(8),.col.hasCircle:nth-child(9)').length == 3)) {
        $('#row-3').show();
    } else if (($('.col.hasCross:nth-child(1),.col.hasCross:nth-child(4),.col.hasCross:nth-child(7)').length == 3) ||
        ($('.col.hasCircle:nth-child(1),.col.hasCircle:nth-child(4),.col.hasCircle:nth-child(7)').length == 3)) {
        $('#column-1').show();
    } else if (($('.col.hasCross:nth-child(2),.col.hasCross:nth-child(5),.col.hasCross:nth-child(8)').length == 3) ||
        ($('.col.hasCircle:nth-child(2),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(8)').length == 3)) {
        $('#column-2').show();
    } else if (($('.col.hasCross:nth-child(3),.col.hasCross:nth-child(6),.col.hasCross:nth-child(9)').length == 3) ||
        ($('.col.hasCircle:nth-child(3),.col.hasCircle:nth-child(6),.col.hasCircle:nth-child(9)').length == 3)) {
        $('#column-3').show();
    } else if (($('.col.hasCross:nth-child(3),.col.hasCross:nth-child(5),.col.hasCross:nth-child(7)').length == 3) ||
        ($('.col.hasCircle:nth-child(3),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(7)').length == 3)) {
        $('#diagonal-1').show();
    } else if (($('.col.hasCross:nth-child(1),.col.hasCross:nth-child(5),.col.hasCross:nth-child(9)').length == 3) ||
        ($('.col.hasCircle:nth-child(1),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(9)').length == 3)) {
        $('#diagonal-2').show();
    }

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
        $('.col').addClass('disableClick');
        setTimeout(function () {
            $('.result-btn').trigger('click');
            $('.result-title--cross').show();
            $('.result-title--circle').hide();
        }, 2000);
    }

    if (
        ($('.col.hasCircle:nth-child(1),.col.hasCircle:nth-child(2),.col.hasCircle:nth-child(3)').length == 3) ||
        ($('.col.hasCircle:nth-child(4),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(6)').length == 3) ||
        ($('.col.hasCircle:nth-child(7),.col.hasCircle:nth-child(8),.col.hasCircle:nth-child(9)').length == 3) ||
        ($('.col.hasCircle:nth-child(3),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(7)').length == 3) ||
        ($('.col.hasCircle:nth-child(1),.col.hasCircle:nth-child(5),.col.hasCircle:nth-child(9)').length == 3)
    ) {
        $('.col').addClass('disableClick');
        setTimeout(function () {
            $('.result-btn').trigger('click');
            $('.result-title--circle').show();
            $('.result-title--cross').hide();
        }, 2000);
    }
});

$('.start-btn').click(function () {
    $('.col').empty().removeClass('hasCircle hasCross disableClick');
    $('#grid path').hide();
});