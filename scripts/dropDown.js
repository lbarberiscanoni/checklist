$("button.show").click(function(){
	$(this).closest("div.topic").find("ul.dropDown").toggle(600);
});
