$(document).ready(function (){
	newGrid(20);

	$("#newBtn").on("click", function(){
		var size=prompt("Please select grid size","20");
		newGrid(size);
	});

	$("#erase").on("click", function(){
		$(".cell").mouseenter(function(){
		$(this).removeClass("selected");
	})	;
});
});

function newGrid(size){
	$("#main").empty();
	var length= (1000-(size*2))/size;
	
	for (var j = 1; j<= size; j++){
		for (var i = 1; i <= size; i++) {
			var id = "'"+i+"'";
			$("#main").append("<div id="+id+" class='cell'></div>");
		};
	};
	$(".cell").css("height", length);
	$(".cell").css("width", length);
	$(".cell").mouseenter(function(){
		$(this).addClass("selected");
	});

}
