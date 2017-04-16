
$(".sbox").click(function(e){
	var newdiv=$("<div></div>");
	var bg=$('<div></div>');
	newdiv.addClass("bigdiv");
	newdiv.text($(this).index());
	bg.addClass("bg");
	bg.click(function(event) {
		newdiv.remove();
		this.remove();
	});
	newdiv.click(function(event) {
		bg.remove();
		this.remove();
	});
	$('.box1').append(newdiv);
	$('body').append(bg);
});

$(".box2-button div").click(function(){
	$(".box2-button").children().removeClass("choose");
	$(this).addClass("choose");
	$(".box2-box").text($(this).index()+1);
});

$(".box3-button").click(function(){
	var item1=$("<div></div>");
	var item2=$("<div></div>");
	var item3=$("<div></div>");
	var item0=$("<div></div>");
	item0.addClass("item");
	item1.addClass("item-left");
	item2.addClass("item-text");
	item3.addClass("item-delete");
	item1.text($(".item-left").length+1);
	item3.text("Delete");
	item3.on("click",del);
	item0.append(item1);
	item0.append(item2);
	item0.append(item3);
	$(".box3-itembox").append(item0);
});

$(".item-delete").on("click",del);

function del(e){
	console.log($(this).parent().index());
	$(this).parent().remove();
	var del=$(".item");
	for(var i=0;i<del.length;i++) {
		del.eq(i).children(".item-left").text(i+1);
	}
}