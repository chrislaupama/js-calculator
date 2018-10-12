// DOM vars
$display = $('.number-display');
var $digits = $('.digit');
var $operators = $('.operator');
var $clear = $('.clear');
var $decimal = $('.decimal');
var $equals = $('.equals');

// Data variables
equation = '';

// Listeners
$digits.on('click', function() {	
    var theNumber = $(this).text();
    console.log('a ' + theNumber + ' digit was clicked');
    equation += theNumber;
    $display.text(equation);
});

$operators.on('click', handleOperator);

$decimal.on('click', handleOperator);

$clear.on('click', function() {	
    equation = '';
    $display.text('0');
});

$equals.on('click', function() {	
    var answer = eval(equation);
    $display.text(answer);
});

function handleOperator() {
    var theOperator = $(this).text();
    console.log('a ' + theOperator + ' operator was clicked');

    equation += theOperator;			
}