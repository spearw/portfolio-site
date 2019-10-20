$(document).on('turbolinks:load', function(event) { 
    $(window).scroll(function() {
    $('#project_list').children().each(function(){
    var imagePos = $(this).offset().top;

    var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (imagePos < bottomOfWindow-200) {
            $(this).addClass("slideUp");
        }
    });
   });
});

$(document).on('turbolinks:load', function(event) { 
    $('#projects_page').children().each(function(){
        $(this).removeClass("hidden");
    });
});