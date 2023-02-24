$(function() {

    //서브메뉴 영역
    $('.depth2').hide();
    $('.depth2:eq(0)').slideDown();
 	

	$('.lnb').click(function () {
		$('.depth2').slideUp('fast'); 
		$(this).next().slideDown('fast');
		$('.lnb').removeClass('on');
		$(this).addClass('on');	


});

     //best 영역
   
     $('#bestList>img:eq(0)').hover(function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'product1-2.jpg').animate({opacity:1},1500);
         } , function () {
          $(this).css('opacity','0.1').attr('src','img/' + 'product1-1.jpg').animate({opacity:1},1500);     
      });
  
      
      $('#bestList>img:eq(1)').hover(function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'product2-2.jpg').animate({opacity:1},1500);
         } , function () {
          $(this).css('opacity','0.1').attr('src','img/' + 'product2-1.jpg').animate({opacity:1},1500);       
      });
  
      
      $('#bestList>img:eq(2)').hover(function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'product3-2.jpg').animate({opacity:1},1500);
         } , function () {
          $(this).css('opacity','0.1').attr('src','img/' + 'product3-1.jpg').animate({opacity:1},1500);       
      });
  
      
      $('#bestList>img:eq(3)').hover(function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'product4-2.jpg').animate({opacity:1},1500);
         } , function () {
          $(this).css('opacity','0.1').attr('src','img/' + 'product4-1.jpg').animate({opacity:1},1500);    
      });
	
   
      //스크롤 영역
   $(window).scroll( function(){
   $('.scrollFadein').each( function(){           
        let bottom_of_element = $(this).offset().top + $(this).outerHeight();
        let bottom_of_window = $(window).scrollTop() + $(window).height();              
        if( bottom_of_window > bottom_of_element ){
          $(this).animate({
            'opacity':'1'
        },3000);
              }
              });               
             });

             $('.brandRfadein').animate({
                'opacity' : 1 
                 },3000);

     
                 $("#topBtn button").click(function() {
                  $('html, body').animate({
                      scrollTop : 0
                  }, 400);
                  return false;
              });


    });