$(document).ready(function(){
    $('#header,.info').ripples({
  dropRadius: 7,
  perturbance: 0.01,
  
});
})

/*navbar toggler*/
$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 670){
        $('.navbar').addClass('navbar-background');
        $('.navbar').addClass('fixed-top');
    }
    else{
        $('.navbar').removeClass('navbar-background');
        $('.navbar').removeClass('fixed-top');
    }
    
})

$('.nav-item a, .header-link, #back-to-top').click(function(link){
    link.preventDefault();
    let target =$(this).attr('href');
    $('html,body').stop().animate({
        scrollTop:$(target).offset().top - 25
    },3000);
})

/*Back to top*/
$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 670){
        $('#back-to-top').addClass('scrollTop');
        
    }
    else{
       $('#back-to-top').removeClass('scrollTop'); 
    }
    
})