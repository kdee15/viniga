$( document ).ready(function() {
    console.log( "ready!" );

// A.1. User Interaction
	
	//A.1.1 Show/Hide element
	

	$(".reveal").click(function(e) {
		var target = $(this).attr('href');
		if ($(target).css('display') === 'none') {
		  $('.reveal-body').fadeOut(50);
		  $(target).fadeIn(100);
		}
		else {
		  $(target).fadeOut(50);
		}
		e.preventDefault();
	  });

	
	//A.1.1 End
	
	//A.1.2 Show/Hide element for mobile
	
	$(".mobi-reveal").click(function(e) {
		var target = $(this).attr('href');
		if ($(target).css('display') === 'none') {
		  $(target).fadeIn(130);
		}
		else {
		  $(target).fadeOut(130);
		}
		e.preventDefault();
	  });
	
	//A.1.2 End
		
	//A.1.3 Show/Hide element on hover
	
	$(".reveal-hover").bind('mouseenter',function(e) {
		var target = $(this).attr('href');
		if ($(target).css('display') === 'none') {
		  $(target).fadeIn(130);
		}
		else {
		  $(target).fadeOut(130);
		}
		e.preventDefault();
        
        
    }).bind('mouseleave',function(e) {
		var target = $(this).attr('href');
		if ($(target).css('display') === 'none') {
		  $(target).fadeIn(130);
		}
		else {
		  $(target).fadeOut(130);
		}
		e.preventDefault();
        
        
	  });
	
	//A.1.3 End
	
// A.1. End
	
// A.2. Random Image
    
/* Random Image Generator START 
var totalImages = 4;

var RandomNum = Math.floor( Math.random() * totalImages);

	$(document).ready(function(){
		$('#top').attr("style","background-image:url('http://localhost/KD/ctba.co.za/website/6_root/sites/all/themes/ctba/assets/images/random-bg/OUT"+RandomNum+".png')");
	});

/* Random Image Generator END */

    
    
// A.2. End
    
// A.3. Toggle Div Display - onClick
    
var currentContent = '';	
	$(".div-toggle").on('click', function(){
		currentContent = $(this).attr('name');
		if($('#'+currentContent).hasClass('on')){
			$('#'+currentContent).hide(0);
			$('#'+currentContent).removeClass('on');			
		}else{
			hideAllContent();
			showCurrentContent(currentContent);
		}
	});

	function hideAllContent(){
		$('.toggle-content').hide();
		$('.toggle-content').removeClass('on');
	};
	
	function showCurrentContent(currentContentDiv){
		$('#'+currentContentDiv).addClass('on');
		$('#'+currentContentDiv).show(1000,'left', 1000);
	};	
			 
// A.3. End
    
// A.3. Toggle Div Display - onHover
    
var hoverContent = '';	
	$(".div-hover").bind('mouseenter', function(){
		hoverContent = $(this).attr('name');
		if($('#'+hoverContent).hasClass('on')){
			$('#'+hoverContent).hide(0);
			$('#'+hoverContent).removeClass('on');			
		}else{
			hideHoverContent();
			showHoverContent(hoverContent);
		}
	});

	function hideHoverContent(){
		$('.hover-content').hide();
		$('.hover-content').removeClass('on');
	};
	
	function showHoverContent(hoverContentDiv){
		$('#'+hoverContentDiv).addClass('on');
		$('#'+hoverContentDiv).show(1000,'left', 1000);
	};	
			 
// A.3. End
    
    
// A.3. End
    
$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });
});  
    
// A.3. End
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
	
});	