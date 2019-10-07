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

function headertoggle() {
   $(".header").click(function() {
      if ($(this).hasClass( "header1" )) {
         $(".header").removeClass("header1").addClass("header2");
      } else if ($(this).hasClass( "header2" )){
         $(".header").removeClass("header2").addClass("header3");
      } else if ($(this).hasClass( "header3" )){
         $(".header").removeClass("header3").addClass("header4");
      } else {
         $(".header").removeClass("header4").addClass("header1");
      }
   })
};

function italicstoggle() {
   $("h2").click(function() {
      $(this).toggleClass("italic");
   })
}

$(document).ready(function() {
	responsive();
	$(window).resize(responsive);
   headertoggle();
   italicstoggle();
});
