var isSlide = false;
var slideElem = $('.slide');
var arrowElem = $('.p-footer .arrow-d');
var pageElem = $('.page');
/** Init fullpage.js */
$(document).ready(function () {
    $('#mainpage').fullpage({
        menu: '#qmenu',
        anchors: ['home', 'portfolio-1', 'portfolio-2', 'portfolio-3', 'portfolio-4', 'portfolio-5', 'portfolio-6'],
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