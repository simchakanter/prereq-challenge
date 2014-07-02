var x;
var y;
var z;

$(document).ready(function() {
	// alert("This is working");
	$("button").click(function(event) {
		event.preventDefault();
		$('.result').hide();
		if (validateInputs() === false) {
			return false;
		}
		doCalculation($(this).attr('id'));
		populateResults($(this).attr('id'));
		$('.result').show();
	})
});

function validateInputs() {
	var validateX = +$('#x').val();
	var validateY = +$('#y').val();
	console.log("Validation: X is: " + validateX);
	console.log("Validation: Y is: " + validateY);
	if (isNaN(validateX) || isNaN(validateY)) {
		console.log("Validation failed: not a number");
		$('.error-messages').show();
		return false;
	}
	if (validateX !== parseInt(validateX) || validateY !== parseInt(validateY)) {
		console.log("Validation failed: not an integer");
		$('.error-messages').show();
		return false;
	}
}

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
	$(".error-messages").hide();
	$(".x").text(x);
	$(".y").text(y);
	$(".operator").text(operator);
	$('.z').text(z);
}