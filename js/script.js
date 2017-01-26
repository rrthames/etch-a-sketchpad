$(document).ready( function () {
	var gridSquares = 16;
	var count = 0;  



	$('body').append('<button type="button" id="button">Reset</button>');
	$('body').append('<div id="container"></div>');


	function display() {
		while (count<gridSquares) {
			count+=1;
			$('#container').append('<div class = "screen" id="row'+count + '"></div>');
			var count1=0;
			while (count1<gridSquares) {
				$('#row'+count).append ('<div class = "screen">');
				count1+=1;
			}
		}
	}
	display();
	$(document).on('click',':button', function screenReset() {
		gridSquares= prompt("Please input the size of the new screen. 1 - 128","16");
		while (gridSquares<1 || gridSquares >128) {
			gridSquares= prompt("Please input the size of the new screen.1 - 128","16");
		}
		$('#container').empty();
		$(".screen").css('background-color','#454343');
		var dimension = 500/gridSquares;
		count=0;
		display();
		$(".screen").css('height',dimension);		
		$(".screen").css('width',dimension);
		shader();
	});
	function shader() {
		$('.screen').hover(function () {
			$(this).css('background-color', "#ff69b4");
		});
	}
	shader();
	$('body').append('<footer><p><small>RThames 2017</small></p></footer>');
});
