//$('#counter')
///$('#timer')

counter = 0
solution = [ 'beats', 'xbox', 'bentley', 'wwf', 'world wildlife fund', 'pepsi', 'android' ]
images		=[ '/a1.jpg', , , , , ]

function init(){
	console.log("test")
	$('#submitButton').on('click', function(){
		guess();
	});

	$('#startButton').on('click', function(){
		//Start the timer and laod the first image
		start( );
	});

	start( );
}

function start(){
	console.log("start")
	//load the first image
	loadImage()
	//start the timer
}

function guess() {
	
	for ( var i = 0; i < solution.length; i++ ) {
	//	if $(#textInput) = 

	//if correct increment counter 

	//and load next image

 

	}
}

function loadImage(){
	//load the image 
	//.imageBox
	console.log("imageload")
	//$('.imageBox').append("<img id='theImg' src=images[counter] />")
	//$('#imageBack').append($('<img>',{id:'theImg',src:'a1.jpg'}) );
	//$('#imageBackBox').style.backgroundImage = "url('a1.jpg')"
    var img = document.createElement("IMG");
    img.src = "a1.jpg";
    $('#imageBack').html(img); 


}

init()