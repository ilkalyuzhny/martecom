$(function() {
    
    //при нажатии на ссылку
    $(".navbar-collapse a").click(function() {
        //если она не имеет класс dropdown-toggle
        if (!$(this).hasClass("dropdown-toggle")) {
            //то закрыть меню
            $(".navbar-collapse").collapse('hide');
        }
    });
    
//    (function($){
//        // menu fixed
//        var navHeight = 40;
//        var nav = $('.header-section');
//        $(window).scroll(function () {
//            if ($(this).scrollTop() > navHeight ) {
//                nav.addClass("fixed");
//            } else {
//                nav.removeClass("fixed");
//            }
//        });
//
//    })(jQuery);
    
    //поиск
    $(".search-btn").click(function(event){
        event.preventDefault()
        $(".search-section").slideToggle(500);
    });
    
//    $(".search-btn").on("click", function() {
//        $(".search-section").toggle();
//    });
    
    $(".subscribe-from").click(function() {
        $(this).slideUp({
            duration: 'slow',
            easing: 'linear'
        });
    });
    

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
    
    
    
    //Product filter1
    //Все элементы
    $(".all").click(function () {
        $("[class^=tovar]").fadeIn("slow").show();
    });
    
    //Dresses and Suits
    $(".butdressers").click(function () {
        $("[class^=tovar]").hide();
        $("[class*=dressers]").fadeIn("slow").show();
    });
    
    //Accessories
    $(".butaccessories").click(function () {
        $("[class^=tovar]").hide();
        $("[class*=accessories]").fadeIn("slow").show();
    });
    
    //Miscellaneous
    $(".butmiscellaneous").click(function () {
        $("[class^=tovar]").hide();
        $("[class*=miscellaneous]").fadeIn("slow").show();
    });
    
    
    wow = new WOW(
      {
        animateClass: 'animated',
        offset: 100
      }
    );
    wow.init();
    
});
