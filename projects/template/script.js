function myFunction() {
   var x = document.getElementById("menulist");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
}

function responsive() {
	var wi = $(window).width();

	if (wi <= 999){
		$(".menu").removeClass("menu").addClass("menu-mobile");
		$(".content").removeClass("content").addClass("content-mobile");
		}
	else if (wi >= 1000){
		$(".menu-mobile").removeClass("menu-mobile").addClass("menu");
		$(".content-mobile").removeClass("content-mobile").addClass("content");
		}
}

function menu() {
	$("#menuButt").click(function() {
		$("#menu-mobile").slideToggle( 'slow');
	})
}

$(document).ready(function() {
	responsive();
	menu();
	$(window).resize(responsive);
})
