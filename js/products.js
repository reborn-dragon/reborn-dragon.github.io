var isSlide = false;
var slideElem = $('.slide');
var arrowElem = $('.p-footer .arrow-d');
var pageElem = $('.page');
/** Init fullpage.js */
$(document).ready(function () {
    $('#mainpage').fullpage({
        menu: '#qmenu',
        anchors: ['home', 'product-1', 'product-2', 'product-3', 'product-4', 'product-5', 'product-6'],
        scrollOverflow: true,
        css3: false,
        navigation: true,
        onLeave: function (index, nextIndex, direction) {
            arrowElem.addClass('gone');
            pageElem.addClass('transition');
            slideElem.removeClass('transition');
            isSlide = false;
        },
        afterLoad: function (anchorLink, index) {
            arrowElem.removeClass('gone');
            pageElem.removeClass('transition');
            if (isSlide) {
                slideElem.removeClass('transition');
            }
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            slideElem.removeClass('transition');
            isSlide = true;
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction) {
            if (isSlide) {
                slideElem.addClass('transition');
            }
        },
        afterRender: function () {
        }
    });
});

/* Clock */
var dateReadableText = 'Upcoming date';
if ($('.site-config').attr('data-date-readable') && ($('.site-config').attr('data-date-readable') != '')) {
    $('.timeout-day').text('');
    dateReadableText = $('.site-config').attr('data-date-readable');
    $('.timeout-day').text(dateReadableText);
}
$('.clock-countdown').downCount({
    date: $('.site-config').attr('data-date'),
    offset: +10
}, function () {
    var zerodayText = 'An upcoming date';
    if ($('.site-config').attr('data-zeroday-text') && ($('.site-config').attr('data-zeroday-text') != '')) {
        $('.timeout-day').text('');
        zerodayText = $('.site-config').attr('data-zeroday-text');
    }
    $('.timeout-day').text(zerodayText);
});
$(function () {
    $("#second-knob").knob();
});
