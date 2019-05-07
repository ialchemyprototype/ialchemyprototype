function myFunction() {
   var x = document.getElementById("menulist");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
};

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
};

function menu() {
	$("#menuButt").click(function() {
		$("#menu-mobile").slideToggle( 'slow');
	})
};

$(document).ready(function() {
	responsive();
	menu();
	$(window).resize(responsive);
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
