$(document).ready(function () {
    
    
    $('#section-why').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        };
    }, { 
        offset: '100px;'
    });
   
    $('.btn-discover').hover(function () {
        if ($(window).width() <= "768") {
                $(this).addClass('shadow-pulse');
            } else {
                $(this).addClass('shadow-pulse');
            }
    },
    
    function () {
        $(this).removeClass('shadow-pulse');
    });
    
    $('.js--section-concept').waypoint(function (direction) {
        if (direction == "down") {
            $('.about-us').addClass('underline');
        } else {
            $('.about-us').removeClass('underline');
        }
    }, {
        offset: '150px;'
    });
    
    $('.js--section-phase1').waypoint(function (direction) {
        if (direction == "down") {
            $('.about-us').removeClass('underline');
            $('.phase-1').addClass('underline');
        } 
        if (direction == "up"){
            $('.about-us').addClass('underline');
            $('.phase-1').removeClass('underline');
        };
    }, {
        offset: '150px;'
    });
    
     $('.js--section-phase2').waypoint(function (direction) {
        if (direction == "down") {
            $('.phase-1').removeClass('underline');
            $('.phase-2').addClass('underline');
        } 
        if (direction == "up"){
            $('.phase-1').addClass('underline');
            $('.phase-2').removeClass('underline');
        };
    }, {
        offset: '150px;'
    });
    
    $('.js--section-phase3').waypoint(function (direction) {
        if (direction == "down") {
            $('.phase-2').removeClass('underline');
            $('.phase-3').addClass('underline');
        } 
        if (direction == "up"){
            $('.phase-2').addClass('underline');
            $('.phase-3').removeClass('underline');
        };
    }, {
        offset: '150px;'
    });
    
    $('.js--section-support').waypoint(function (direction) {
        if (direction == "down") {
            $('.phase-3').removeClass('underline');
            $('.our-cause').addClass('underline');
        } 
        if (direction == "up"){
            $('.phase-3').addClass('underline');
            $('.our-cause').removeClass('underline');
        };
    }, {
        offset: '150px;'
    });

    $('.js--section-cause').waypoint(function (direction) {
        if (direction == "down") {
            $('.our-cause').removeClass('underline');
        } 
        if (direction == "up"){
            $('.our-cause').addClass('underline');
        };
    }, {
        offset: '150px;'
    });
    /*
    $('.nav-section').ready(function () {
        var deviceWidth = $(window).width();
        
        if (deviceWidth >= "768px") {
            $(this).css("display", "inline-block");
        };
    })
    */
    
    $('.mobile-nav-icon').click(function () {
        var nav = $('.nav-section');
        var icon = $('.mobile-nav-icon i');
        var isActive = nav.is(":visible");
        nav.slideToggle(200);
        
        if (isActive == false) {
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
        } else {
            icon.removeClass('fa-times');
            icon.addClass('fa-bars');
        };
    });
    
    $('#btn-modal').click(function () {
        $('#myModal').addClass('display-block');
    });

    $('.close').click(function () {
        $('#myModal').removeClass('display-block');
    });

    $('#myModal').click(function (event) {
        var modal = event.target.getAttribute('id');
        if (modal == "myModal") {
            $('#myModal').removeClass('display-block');
        }
    });


});
