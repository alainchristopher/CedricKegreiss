

1

$('.2k19').on('click', function(){

2

  $('.filterDiv').addClass('hidden')

3

​

4

 $('div.2019').show() 

5

  $('div.2018').hide() 

6

 $('div.2017').hide() 

7

   $('div.2016').hide() 

8

   $('.filterDiv').removeClass('hidden')

9

})

10

​

11

$('.2k18').on('click', function(){

12

  $('.filterDiv').addClass('hidden')

13

​

14

 $('div.2018').show() 

15

 $('div.2019').hide()

16

 $('div.2017').hide() 

17

 $('div.2016').hide() 

18

 $('.filterDiv').removeClass('hidden')

19

})

20

​

21

$('.2k17').on('click', function(){

22

  $('.filterDiv').addClass('hidden')

23

  $('.filterDiv').removeClass('hidden')

24

   $('div.2017').show()

25

  $('div.2019').hide()

26

 $('div.2018').hide() 

27

   $('div.2016').hide()

28

})

29

​

30

$('.2k16').on('click', function(){

31

  $('.filterDiv').addClass('hidden')

32

  $('.filterDiv').removeClass('hidden')

33

   $('div.2016').show() 

34

  $('div.2019').hide()

35

 $('div.2018').hide() 

36

   $('div.2017').hide() 

37

})

38

$('.all').on('click', function(){

39

  $('.filterDiv').addClass('hidden')

40

  $('.filterDiv').removeClass('hidden')

41

 $('div').show() 

42

})

