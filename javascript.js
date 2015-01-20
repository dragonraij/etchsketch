$(document).ready(function (){
for (var j = 1; j<= 20; j++){
for (var i = 1; i <= 20; i++) {
	var id = "'"+i+"'";
	$("#main").append("<div id="+id+" class='blank'></div>");
};
};
});