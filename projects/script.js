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

	if (wi <= 799){
		$(".menu").removeClass("menu").addClass("menu-mobile");
		$(".content").removeClass("content").addClass("content-mobile");
		}
	else if (wi >= 800){
		$(".menu-mobile").removeClass("menu-mobile").addClass("menu");
		$(".content-mobile").removeClass("content-mobile").addClass("content");
		}
}

function menu() {
	$("#menuButt").click(function() {
		$("#menu-mobile").slideToggle( 'slow');
	})
}

function typetoggle() {
   $("h1").click(function() {
      if ($(this).hasClass( "roboto" )) {
         $("h1").removeClass("roboto").addClass("slab");
      } else if ($(this).hasClass( "slab" )){
         $("h1").removeClass("slab").addClass("chenga");
      } else if ($(this).hasClass( "chenga" )){
         $("h1").removeClass("chenga").addClass("crimson");
      } else if ($(this).hasClass( "crimson" )){
         $("h1").removeClass("crimson").addClass("encode");
      } else if ($(this).hasClass( "encode" )){
         $("h1").removeClass("encode").addClass("open");
      } else {
         $("h1").removeClass().addClass("roboto");
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
   typetoggle();
   italicstoggle();
});
