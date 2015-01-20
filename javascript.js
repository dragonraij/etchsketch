$(document).ready(function (){
	newGrid(20);

	$("#newBtn").on("click", function(){
		var size=prompt("Please select grid size","20");
		newGrid(size);

	   $('a.toggler').click(function(){
        $(this).toggleClass('a.toggler.off');
    });

	});
	
});

function newGrid(size){
	$("#main").empty();
	for (var j = 1; j<= size; j++){
		for (var i = 1; i <= size; i++) {
			var id = "'"+i+"'";
			$("#main").append("<div id="+id+" class='blank cell'></div>");
		};
	};
	$(".cell").mouseenter(function(){
		$(this).removeClass("blank");
		$(this).addClass("selected");
	});

}
