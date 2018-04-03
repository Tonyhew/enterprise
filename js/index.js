$("#header").load("header.html");
$("#footer").load("footer.html");

$(".banspan span").eq(0).addClass("current");
//$(".banimg li").eq(0).show().siblings("a").hide();
$(".banspan span").mouseover(function() {
	numa = $(this).index();
	$(this).addClass("current").siblings("span").removeClass("current");
	$(".banimg li").eq(numa).fadeIn().siblings("li").fadeOut();
});

var t = setInterval(function() {
	var a = $(".banspan .current").index();
	var b = $(".banspan span:last").index();
	if(a == b) {
		$(".banspan span").eq(0).trigger("mouseover");
	}
	$(".banspan span").eq(a + 1).trigger("mouseover");
}, 3000);

$(".banspan span").mouseenter(function(){
	
});

$(".banspan span").mouseleave(function(){
	
})