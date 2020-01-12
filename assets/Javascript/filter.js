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
})

$('.grafik').on('click', function(){

    $('section.Corporate').hide() 
    $('section.Grafik').show() 
    $('section.Publik').hide() 
    $('section.Fotografie').hide() 
    $('section.Digital').hide()
    $('#filters').hide() 
    $('header').toggleClass('expanded')
    })

    $('.publik').on('click', function(){

        $('section.Corporate').hide() 
        $('section.Grafik').hide() 
        $('section.Publik').show() 
        $('section.Fotografie').hide() 
        $('section.Digital').hide()
        $('#filters').hide() 
        $('header').toggleClass('expanded')
        })

        $('.fotografie').on('click', function(){

            $('section.Corporate').hide() 
            $('section.Grafik').hide() 
            $('section.Publik').hide() 
            $('section.Fotografie').show() 
            $('section.Digital').hide()
            $('#filters').hide() 
            $('header').toggleClass('expanded')
            })
    
            $('.digital').on('click', function(){

                $('section.Corporate').hide() 
                $('section.Grafik').hide() 
                $('section.Publik').hide() 
                $('section.Fotografie').hide() 
                $('section.Digital').show()
                $('#filters').hide() 
                $('header').toggleClass('expanded')
                })




$('.show-filters').on('click', function(){

$('section').show() 

})

