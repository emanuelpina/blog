$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".navbar-wrap").addClass("scroll");
    } else {
        $(".navbar-wrap").removeClass("scroll");
    }
});

$(document).on('click', '.menu-trigger', function() {
    $('.navmenu').addClass('navmenu-show');
    $('.navbar-wrap').addClass('navbar-menu');
    $('.menu-trigger').addClass('menu-triggered');
    $('.menu-triggered > .icon-menu').replaceWith('<svg class="icon-close"><use xlink:href="/images/sprite.svg#close"></use></svg>');
});

$(document).on('click', '.menu-triggered', function() {
    $('.menu-triggered > .icon-close').replaceWith('<svg class="icon-menu"><use xlink:href="/images/sprite.svg#menu"></use></svg>');
    $('.menu-trigger').removeClass('menu-triggered');
    $('.navbar-wrap').removeClass('navbar-menu');
    $('.navmenu').removeClass('navmenu-show');
});

$(document).on('click', '.has-children > a', function(e) {
    var isTouch = ('ontouchstart' in document.documentElement);
    if ( isTouch ){
        e.preventDefault();
    }
});

// Lazyload and responsive Youtube videos
$('.youtube').each(function(){
	var youtubeembed = $(this).attr("data-embed");
    $('[data-embed=' + youtubeembed + '] > .play').prepend('<svg class="icon-play" viewBox="0 0 68 48"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>');
    $('[data-embed=' + youtubeembed + ']').prepend('<img src="https://img.youtube.com/vi/' + youtubeembed + '/sddefault.jpg" />');
  $(document).on('click', '[data-embed=' + youtubeembed + ']', function() {
  	$('[data-embed=' + youtubeembed + '] > .play').replaceWith('<iframe src="https://www.youtube.com/embed/' + youtubeembed + '?autoplay=1&rel=0" frameborder="0" allowfullscreen="true" ></iframe>');
  });
});

// Lazyload and responsive Twitch videos
$('.twitch').each(function(){
	var twitchid = '0fi1un4gx6l39gwtz3j10eeqalv2mi'; //Twich API Client ID
	var twitchembed = $(this).attr("data-embed");
    $('[data-embed=' + twitchembed + '] > .play').prepend('<svg class="icon-play" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M22.447 14.105l-14-7A1 1 0 0 0 7 8v14a.999.999 0 0 0 1.447.894l14-7a1 1 0 0 0 0-1.789"></path></svg>');
	$.getJSON('https://api.twitch.tv/kraken/videos/' + twitchembed + '?client_id=' + twitchid, function(data) {
  	var twitchthumb = data.preview;
  	var twitchthumblarge = twitchthumb.replace('320x240', '640x480');
  	$('[data-embed=' + twitchembed + ']').prepend('<img src=' + twitchthumblarge + ' />')
	});
  $(document).on('click', '[data-embed=' + twitchembed + ']', function() {
  	$('[data-embed=' + twitchembed + '] > .play').replaceWith('<iframe src="https://player.twitch.tv/?autoplay=true&video=v' + twitchembed + '&t=0h0m0s" frameborder="0" allowfullscreen="true" scrolling="no" ></iframe>');
  });
});

// GDPR box checker
$( '.contact-form' ).submit(function( event ) {
    if($('.contact-form-gdpr-box').prop('checked') == false){
        $('.contact-form-gdpr-wrap').addClass('unchecked');
        event.preventDefault();
    }
    $('.contact-form-gdpr').on('click', function(){
        $('.contact-form-gdpr-wrap').removeClass('unchecked');
    });
});

// Honeypot Field
$('.contact-form').submit(function(){    
    if ($('input#contact-form-website').val().length != 0) {
        return false;
    } 
});

// Click on site title to scroll up
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $('.site-title > a').addClass('to_top');
        } else {
            $('.site-title > a').removeClass('to_top');
        }
});
$(document).on('click', '.to_top', function(e) {
    var scroll = $(window).scrollTop(),
        scrollspeed = (scroll * 0.133); // scroll 7500px per second
    e.preventDefault();
    $("html, body").animate({scrollTop: 0}, scrollspeed);
 });

// Add a link tag to each h3 heading on post-content
$('.post-content > h3').each(function(){
    var headingid = $(this).attr('id');
    var isTouch = ('ontouchstart' in document.documentElement);
    $(this).append('<a class="post-heading-link" href="#' + headingid + '"><svg class="icon-link" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M6.879 9.934c-0.208 0-0.416-0.079-0.575-0.238-1.486-1.486-1.486-3.905 0-5.392l3-3c0.72-0.72 1.678-1.117 2.696-1.117s1.976 0.397 2.696 1.117c1.486 1.487 1.486 3.905 0 5.392l-1.371 1.371c-0.317 0.317-0.832 0.317-1.149 0s-0.317-0.832 0-1.149l1.371-1.371c0.853-0.853 0.853-2.241 0-3.094-0.413-0.413-0.963-0.641-1.547-0.641s-1.134 0.228-1.547 0.641l-3 3c-0.853 0.853-0.853 2.241 0 3.094 0.317 0.317 0.317 0.832 0 1.149-0.159 0.159-0.367 0.238-0.575 0.238z"></path><path d="M4 15.813c-1.018 0-1.976-0.397-2.696-1.117-1.486-1.486-1.486-3.905 0-5.392l1.371-1.371c0.317-0.317 0.832-0.317 1.149 0s0.317 0.832 0 1.149l-1.371 1.371c-0.853 0.853-0.853 2.241 0 3.094 0.413 0.413 0.962 0.641 1.547 0.641s1.134-0.228 1.547-0.641l3-3c0.853-0.853 0.853-2.241 0-3.094-0.317-0.317-0.317-0.832 0-1.149s0.832-0.317 1.149 0c1.486 1.486 1.486 3.905 0 5.392l-3 3c-0.72 0.72-1.678 1.117-2.696 1.117z"></path></svg></a>');
    if ( isTouch ){
        $('.post-heading-link').css("display", "inline");
    }
});