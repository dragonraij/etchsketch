$(document).ready(function (){
	newGrid(20);

	$(".cell").mouseenter(function(){
		$(this).removeClass("blank");
		$(this).addClass("selected");
	});
});

function newGrid(size){
for (var j = 1; j<= size; j++){
		for (var i = 1; i <= size; i++) {
			var id = "'"+i+"'";
			$("#main").append("<div id="+id+" class='blank cell'></div>");
		};
	};

}
