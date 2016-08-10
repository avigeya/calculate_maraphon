jQuery.noConflict();
    (function( $ ) {

    	/*function addN(a, b){
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

    	*/

    	/*

    	$(document).ready(function() {
    		
    	});*/

    function inputNumb(){
    	var bffr = 0, bffr1 = "", bffr2 =0;
	    	$('#calc_form input[data-type="number"]').click(function(){
	    		bffr = $(this).val();
	    		
	    		if( !isNaN(bffr) ){
	    			bffr1 = $('input[name="input_field"]').val();
		    		bffr1 += bffr;
		    		$('input[name="input_field"]').val(bffr1);
		    		//console.log(bffr1);
	    		}
	    		else{
		    		bffr2 = bffr1;
		    	}


	    	});
	    	return bffr2;
    }

    $(document).ready(function() {
    	/*var txt = inputNumb();
    	console.log(txt);*/
    	//alert(txt);
    	/*var entries = [];
    	var bffr = 0, bffr1 = "", bffr2 =0;
	    	$('#calc_form input[data-type="number"]').click(function(){
	    		bffr = $(this).val();
	    		
	    		if( !isNaN(bffr) ){
	    			bffr1 = $('input[name="input_field"]').val();
		    		bffr1 += bffr;
		    		$('input[name="input_field"]').val(bffr1);
		    		//console.log(bffr1);
	    		}
	    		else if(bffr === '*'){
	    			entries.push(bffr1);
				    entries.push('*');
				    bffr = '';
	    		}
	    		else if(bffr === '/'){
	    			entries.push(bffr1);
				    entries.push('/');
				    bffr = '';
	    		}
	    		else if(bffr === '+'){
	    			entries.push(bffr1);
				    entries.push('+');
				    bffr = '';
	    		}
	    		else if(bffr === '-'){
	    			entries.push(bffr1);
				    entries.push('-');
				    bffr = '';
	    		}

	    		else if(bffr === '='){
	    			entries.push(bffr1);

	    			var nb = Number(entries[0]);

	    			for (var i = 1; i < entries.length; i++;) {
	    			yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyvar nextNum = Number(entries[i+1])
				      var symbol = entries[i];
				      
				      if (symbol === '+') { nt += nextNum; } 
				      else if (symbol === '-') { nt -= nextNum; } 
				      else if (symbol === '*') { nt *= nextNum; } 
				      else if (symbol === '/') { nt /= nextNum; }
				      
				      i++;
	    			};
	    		}


	    	});*/

var entries = [];
var total = 0;

var temp = '';
$("input").on('click', function() {
 	var val = $(this).text();
 	console.log('bum');

  // Got a number, add to temp
  if (!isNaN(val) || val === '.') {
    temp += val;
    $("#answer").val(temp.substring(0,10));
    
  // Got some symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
  } else if (val === '+') {
    entries.push(temp);
    entries.push('+');
    temp = '';
    
  // Change divide symbol to work with eval
  } else if (val === '-') {
    entries.push(temp);
    entries.push('-');
    temp = '';

  // Got the equals sign, perform calculation
  } else if (val === '*') {
    entries.push(temp);
    entries.push('*');
    temp = '';
    
  // Change divide symbol to work with eval
  } else if (val === '/') {
    entries.push(temp);
    entries.push('/');
    temp = '';

  // Got the equals sign, perform calculation
  } else if (val === '=') {
  	entries.push(temp);

    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      var symbol = entries[i];
      
      if (symbol === '+') { nt += nextNum; } 
      else if (symbol === '-') { nt -= nextNum; } 
      else if (symbol === '*') { nt *= nextNum; } 
      else if (symbol === '/') { nt /= nextNum; }
      
      i++;
    }
    
    // Swap the '-' symbol so text input handles it correctly
    if (nt < 0) {
      nt = Math.abs(nt) + '-';
    }
    
    $("#answer").val(nt);
		entries = [];
    temp = '';
    
  // Push number
  } else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});


    });

    })(jQuery);