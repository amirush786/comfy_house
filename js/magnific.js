    $(document).ready(function () {
        $('.parent-container').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
  

    //owl logo 
    $(document).ready(function () {
        $('#logo').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed:4000,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    });


    //owl work 
    $(document).ready(function () {
        $('#owl-work').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed:3000,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })
    });

    customers
    
    
    //owl Quotes Section 
    $(document).ready(function () {
        $('#customers').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed:3000,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    });



//navbar
$(document).ready(function () {
 $(window).scroll(function (){
    var location =$(this).scrollTop();
     if(location<70){
     $("nav").removeClass("transparent");    
     }
     else{
         $("nav").addClass("transparent");  
     }
     
     
 }) ;    
});


