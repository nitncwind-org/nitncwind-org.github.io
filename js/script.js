// http://photoshopvip.net/97481 Menu 1

if ("ontouchstart" in window) {
  	var click = "touchstart";
} else {
  	var click = "click";
}

$("div.burger").on(click, function() {
	if (!$(this).hasClass("open")) {
		openMenu();
	} else {
		closeMenu();
	}
});

$("div.menu ul li a").on(click, function(e) {
	e.preventDefault();
	closeMenu();
});

function openMenu() {
	$("div.circle").addClass("expand");

	$("div.burger").addClass("open");
	$("div.x, div.y, div.z").addClass("collapse");
	$(".menu li").addClass("animate");

	setTimeout(function() {
		$("div.y").hide();
		$("div.x").addClass("rotate30");
		$("div.z").addClass("rotate150");
	}, 100);
	setTimeout(function() {
		$("div.x").addClass("rotate45");
		$("div.z").addClass("rotate135");
	}, 180);
}

function closeMenu() {
	$("div.burger").removeClass("open");
	$("div.x")
		.removeClass("rotate45")
		.addClass("rotate30");
	$("div.z")
		.removeClass("rotate135")
		.addClass("rotate150");
	$("div.circle").removeClass("expand");
	$(".menu li").removeClass("animate");

	setTimeout(function() {
		$("div.x").removeClass("rotate30");
		$("div.z").removeClass("rotate150");
	}, 100);
	setTimeout(function() {
		$("div.y").show();
		$("div.x, div.y, div.z").removeClass("collapse");
	}, 180);
}

$(".link").click(function() {
	console.log("hogehgoehgeo");
	  // windows.location.href = $(this).attr("href");
	window.location.href = "http://127.0.0.1:5500/base.html";
});
