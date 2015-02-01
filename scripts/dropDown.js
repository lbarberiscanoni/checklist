$("button.show").click(function() {
	console.log("Button Fired")
	$(this).closest("div.topic").find("ul.dropDown").toggle();
});
