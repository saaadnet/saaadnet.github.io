jQuery(document).ready(function($) {

/* ------------------------------------- wiki_all page, bootsrap style scrolling */

	$('body.page-wiki-all').scrollspy({
    		offset: 120
	});

	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({ 'scrollTop': $target.offset().top}, 900, 'swing', function () {
			window.location.hash = target;
		}); 
	});

	function fixDiv320() {
	    $('#wiki_right').css({'position': 'relative', 'top': '0px'});
	  if ($(window).scrollTop() > 690){
	    $('#wiki_search').css({'position': 'fixed', 'top': '0px', 'width': '75%'}); 
	  }else{
	    $('#wiki_search').css({'position': 'absolute', 'top': '0px', 'width': '82%'});
	  }
	}
	function fixDiv480() {
	    $('#wiki_right').css({'position': 'relative', 'top': '0px'});
	  if ($(window).scrollTop() > 690){
	    $('#wiki_search').css({'position': 'fixed', 'top': '0px', 'width': '83%'}); 
	  }else{
	    $('#wiki_search').css({'position': 'absolute', 'top': '0px', 'width': '89%'});
	  }
	}
	function fixDiv740() {
	    $('#wiki_right').css({'position': 'relative', 'top': '0px'});
	  if ($(window).scrollTop() > 290){
		$('#wiki_right').css({'position': 'fixed', 'top': '40px'});
	    $('#wiki_search').css({'position': 'fixed', 'top': '0px', 'width': '54%'}); 
	  }else{
		$('#wiki_right').css({'position': 'absolute', 'top': 'auto'});
	    $('#wiki_search').css({'position': 'absolute', 'top': '0px', 'width': '86%'});
	  }
	}
	function fixDiv980() {
	  if ($(window).scrollTop() > 290){
	    $('#wiki_right').css({'position': 'fixed', 'top': '40px'});
	    $('#wiki_search').css({'position': 'fixed', 'top': '0px', 'width': '47%'}); 
	  }else{
	    $('#wiki_right').css({'position': 'absolute', 'top': 'auto'});
	    $('#wiki_search').css({'position': 'absolute', 'top': '0px', 'width': '89%'});
	  }
	}
	function fixDiv1220() {
	  if ($(window).scrollTop() > 290){
	    $('#wiki_right').css({'position': 'fixed', 'top': '40px'});
	    $('#wiki_search').css({'position': 'fixed', 'top': '0px'}); 
	  }else{
	    $('#wiki_right').css({'position': 'absolute', 'top': 'auto'});
	    $('#wiki_search').css({'position': 'absolute', 'top': '0px'});
	  }
	}
	$(window).bind('enterBreakpoint320',function() {
		$(window).scroll(fixDiv320);
		fixDiv320();
	});
	$(window).bind('enterBreakpoint480',function() {
		$(window).scroll(fixDiv480);
		fixDiv480();
	});		
	$(window).bind('enterBreakpoint740',function() {
		$(window).scroll(fixDiv740);
		fixDiv740();
	});
	$(window).bind('enterBreakpoint980',function() {
		$(window).scroll(fixDiv980);
		fixDiv980();
	});
	$(window).bind('enterBreakpoint1220',function() {
		$(window).scroll(fixDiv1220);
		fixDiv1220();
	});

/* ------------------------------- END wiki_all page, bootsrap style scrolling */

/* ----------------------------------------------------- autocomplete 'search' */

	$("#search_wiki_text").autocomplete({
		appendTo: "#wiki_search",
	        source:poss_results,
	   	minLength:2,
	   	position: { offset:'-300 0' },  
	   	select: function(event, ui ) { 
	   		goTo(ui.item.value);
	   		return false;
	   	},
		focus: function( event, ui ) {
                return false;  
     		},  
	}); 
	//trigger autcomplete if box populated
    if ($("#search_wiki_text").val().length > 0){ 
		$("#search_wiki_text").trigger('keydown.autocomplete');
	}
	/*
	    .data("autocomplete")._renderItem = function( ul, item ) {
	        return $( "<li></li>" )
	        .data( "item.autocomplete", item )
	        .append('<a>' + item.label + '</a>')
	        .appendTo( ul );
	    };
	*/
	
/* ------------------------------------------------- END autocomplete 'search' */

	function goTo(id) {
	var element = $('div#t' + id);
	$('html, body').stop().animate({ 'scrollTop': element.offset().top-110}, 900, 'swing', function () {
	//	window.location.hash = '#t' + id;
	});
	}
	
	// intercept incoming anchor links 
	var link = document.location.toString();
	if (link.match('#t')) {
	    //get the value and send via goTo
	    id =  link.substr ( link.indexOf ( '#' ) + 2 ); 
	    //goTo(id);
	    var element = $('div#t' + id);
	    $('html, body').stop().animate({ 'scrollTop': element.offset().top-200}, 900, 'swing',   function() {
		//	window.location.hash = '#t' + id;
		});
	   	
	   return false;
	}
	
});
;
