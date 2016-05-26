$(document).ready(function(){
	var catagories;  	//array of topics
	var dollar;				//dollar amount of categories
	var question;			//question to be displayed
	var answer;				//answer to be displayed
	var	restore;			//this clears the click for the next step
	var innerCell			//cell for the onclick
	var score = 0;    // keeps track of number of score
	var activecell;		//active cell


// Get elements
	var innerCell = document.getElementById('inner-cell');
  var showquestion = document.getElementById('question');
  var showanswer = document.getElementById('answer');

$('.question').on('click', function(){
	$(this).data('answer')
})


// Selects the cell with question.
$('#q1').on("click", function innerCell(mycell){
  location.href='#';
  $(mycell).addClass('activecell');
  $(mycell).children('.dollar').hide();
  $(mycell).children('.question').show();
  console.log(question);
});

// Displays question.
function showquestion(){
    $('#qscreen').show();
    $('#qscreen').html(item);
    $('#qscreen').attr('onclick','showanswer()');
}
// Displays Answer.
function showanswer(){
    $('#qscreen .question').hide();
    $('#qscreen .answer').show();
    $('#qscreen').attr('onclick','restore()');
}
// Restores the cells to display the next step in the game
function restore(){
    $('.activecell .answer').show();
    $('.activecell .question').show();
    $('.activecell .question').css('font-size','14px');
    $('.activecell .answer').css('font-size','14px');
    $('.activecell').removeClass('activecell');
    $('#qscreen').attr('onclick','showanswer()');
    $('#qscreen').hide();
}

$(document).ready(function(){
    $('#qscreen').css('padding-top',0.33*screen.height);    
    $('#qscreen').show();
    setTimeout("$('#x').html('vin')",2000);
    $('#qscreen').append('<div style="position:absolute;bottom:0px;right:-100px"><a href="http://vimeo.com/47875656" style="color:#f1f1f1;" target="_blank">Muscles</a></div><div"><marquee style="position:absolute;bottom:0px"><h1>All Your Base Are Belong To Us</h1></marquee></div>');
});

});











