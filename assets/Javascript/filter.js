$(document).ready(function(){
$('#filters').hide() 
})

$('.show-filters').click(function(){
    $('#filters').toggle();
    $('header').toggleClass('expanded');
    })


$('.corporate').on('click', function(){

$('section.Corporate').show() 
$('section.Grafik').hide() 
$('section.Publik').hide() 
$('section.Fotografie').hide() 
$('section.Digital').hide()
$('#filters').hide() 
    $('header').toggleClass('expanded')
    $("html, body").animate({

        scrollTop: 0

    }, "slow")
})

$('.grafik').on('click', function(){

    $('section.Corporate').hide() 
    $('section.Grafik').show() 
    $('section.Publik').hide() 
    $('section.Fotografie').hide() 
    $('section.Digital').hide()
    $('#filters').hide() 
    $('header').toggleClass('expanded')
    
        $("html, body").animate({

            scrollTop: 0

        }, "slow")
    })

    $('.publik').on('click', function(){

        $('section.Corporate').hide() 
        $('section.Grafik').hide() 
        $('section.Publik').show() 
        $('section.Fotografie').hide() 
        $('section.Digital').hide()
        $('#filters').hide() 
        $('header').toggleClass('expanded')
        $("html, body").animate({

            scrollTop: 0

        }, "slow")
        })

        $('.fotografie').on('click', function(){

            $('section.Corporate').hide() 
            $('section.Grafik').hide() 
            $('section.Publik').hide() 
            $('section.Fotografie').show() 
            $('section.Digital').hide()
            $('#filters').hide() 
            $('header').toggleClass('expanded')
            $("html, body").animate({

                scrollTop: 0

            }, "slow")
            })
    
            $('.digital').on('click', function(){

                $('section.Corporate').hide() 
                $('section.Grafik').hide() 
                $('section.Publik').hide() 
                $('section.Fotografie').hide() 
                $('section.Digital').show()
                $('#filters').hide() 
                $('header').toggleClass('expanded')
                $("html, body").animate({

                    scrollTop: 0

                }, "slow")
                })




$('.show-filters').on('click', function(){

$('section').show() 

})

$('.h1Left').on('click', function () {

    $('section').show()
    $("html, body").animate({

        scrollTop: 0

    }, "slow")
})



