jQuery.noConflict();
    (function( $ ) {

    	function addN(a, b){
    		return a+b;
    	}
    	function subsN(a, b){
    		return a-b;
    	}
    	function multiN(a,b){
    		return a*b;
    	}
    	function divN(a,b){
    		return a / b;
    	}

    	$(document).ready(function() {
    		var bffr = 0, bffr1 = "";
	    	$('#calc_form input').click(function(){
	    		bffr = $(this).val();
	    		console.log(bffr);
	    		bffr1 = $('input[name="input_field"]').val();
	    		bffr = bffr1 + bffr;
	    		$('input[name="input_field"]').val(bffr);

	    	});
    	});

    })(jQuery);