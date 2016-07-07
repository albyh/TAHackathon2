count = 0
logos = ['#a1','#a2','#a3','#a4','#a5','#a6']
answer = ['bentley','pepsi','xbox','beats','android','wwf']
$( document ).ready(function() {
	function init(){
		console.log('init');

		$('#guessBtn').on('click', function(){ guess();

		});
		//show first logo
		showLogo()
	}

	function guess(){
		console.log('guess');
		var g = $('#guess').val().toLowerCase().trim();
		$('#guess').val("");		
		console.log(g);

		if ( g == answer[count] ){
			console.log('correct');
			removeLogo();
			counter();
			correct()

		} else {
			console.log('wrong')
			removeLogo();
			counter();
			wrong()
		}

		showLogo();
	}

	function counter(){
		count++
		if (count>=answer.length){
			count = 0
		}
		console.log('counter= '+count)
	}

	function showLogo(){
		console.log('show logo');
		$(logos[count]).removeClass("hidden");
	}

	function removeLogo(){
		console.log('remove logo');
		$(logos[count]).addClass("hidden");
	}

	function correct(){
		$('#score').text(count);
		$('.scoreboard').addClass('green');
		$('.scoreboard').removeClass("red");
	}

	function wrong(){
		$('.scoreboard').removeClass("green");
		$('.scoreboard').addClass('red');
	}

	init();

});