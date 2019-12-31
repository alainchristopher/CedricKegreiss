$(document).ready(function(){
$('#filters').hide() 
})

$('.show-filters').on('click',function(){
    $('#filters').toggle() 
    $('header').toggleClass('expanded')
    })


$('.Corporate').on('click', function(){

$('section.Corporate').show() 
$('section.Grafik').hide() 
$('section.Publik').hide() 
$('section.Fotografie').hide() 
$('section.Digital').hide()
$('#filters').hide() 
$('header').toggleClass('expanded')
})

$('.Grafik').on('click', function(){

    $('section.Corporate').hide() 
    $('section.Grafik').show() 
    $('section.Publik').hide() 
    $('section.Fotografie').hide() 
    $('section.Digital').hide()
    $('#filters').hide() 
    $('header').toggleClass('expanded')
    })

    $('.Publik').on('click', function(){

        $('section.Corporate').hide() 
        $('section.Grafik').hide() 
        $('section.Publik').show() 
        $('section.Fotografie').hide() 
        $('section.Digital').hide()
        $('#filters').hide() 
        $('header').toggleClass('expanded')
        })

        $('.Fotografie').on('click', function(){

            $('section.Corporate').hide() 
            $('section.Grafik').hide() 
            $('section.Publik').hide() 
            $('section.Fotografie').show() 
            $('section.Digital').hide()
            $('#filters').hide() 
            $('header').toggleClass('expanded')
            })
    
            $('.Digital').on('click', function(){

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

