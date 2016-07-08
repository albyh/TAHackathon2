var x = {
	start: false, 
	count: 0,
	logos: ['#a1','#a2','#a3','#a4','#a5','#a6'],
	answer: ['bentley','pepsi','xbox','beats','android','wwf'],
	starttime: 0,
	endtime: 0
}
//links = ['a1','a2','a3','a4','a5','a6']

$( document ).ready(function() {
	function init(){
		console.log('init');

		$('#guessBtn').on('click', function(){ 
			if(!x.start){
				start()
			} else {
				guess();
			}
		});

		//show first logo
		//showLogo()
	}

	function guess(){
		console.log('guess');
		var g = $('#guess').val().toLowerCase().trim();
		$('#guess').val("");		
		console.log(g);

		if ( g == x.answer[x.count] ){
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

	function start(){
		x.startTime = Date.now();
		$('#guessBtn').text('Submit Guess!');
		showLogo();
		x.start = true;
	}

	function finish(){
		x.endtime = Date.now()
		$('#timer').text=(((x.endTime - x.startTime) / 1000) +' seconds')
	}

	function counter(){
		x.count++
		if (x.count>=x.answer.length){
			x.count = 0
			finish()
		}
		console.log('counter= '+x.count)
	}

	function showLogo(){
		console.log('show logo');
		$(x.logos[x.count]).removeClass("hidden");
	}

	function removeLogo(){
		console.log('remove logo');
		$(x.logos[x.count]).addClass("hidden");
	}

	function correct(){
		$('#score').text(x.count);
		$('.scoreboard').addClass('green');
		$('.scoreboard').removeClass("red");
	}

	function wrong(){
		$('.scoreboard').removeClass("green");
		$('.scoreboard').addClass('red');
	}

	init();

});