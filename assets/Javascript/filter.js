$(document).ready(function(){
$('#filters').hide() 
})

$('#activeFilter').on('click',function(){
    $('#filters').show() 
    })

$('.Corporate').on('click', function(){
  
$('.filterSection').addClass('hidden')

$('section.Corporate').show() 
$('section.Grafik').hide() 
$('section.Publik').hide() 
$('section.Fotografie').hide() 
$('section.Digital').hide()

$('.filterSection').removeClass('hidden')

})


$('.all').on('click', function(){

$('section').show() 

})

