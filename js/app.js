var x;
var y;
var z;

$(document).ready(function() {
	// alert("This is working");
	$("button").click(function(event) {
		event.preventDefault();
		// validateInputs();
		doCalculation($(this).attr('id'));
		populateResults($(this).attr('id'));
		$('.result').show();
	})
});

function doCalculation(operator) {
	x = +$('#x').val();
	y = +$('#y').val();
	if (operator === "plus") {
		z = x+y;
	} else {
		z = x-y;
	}
}

function populateResults(operator) {
	$(".x").text(x);
	$(".y").text(y);
	$(".operator").text(operator);
	$('.z').text(z);
}