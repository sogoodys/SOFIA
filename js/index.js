$(function() {
  //슬라이더 영역
  let index=0;
  let sw=false;
  let auto;
  moveSlider(index);
  autoSlider();
  

  $('.animation_canvas').hover(function () {
    clearInterval(auto);
  }, function (){
    autoSlider();
  });


  $('.control_button').click(function (){
    index=$(this).index();
    moveSlider(index);
  });


  $('.left_control').click(function() {
    index--;
    moveSlider(index);
  });


  $('.right_control').click(function() {
    index++;
    moveSlider(index);
  });


  function moveSlider(index) {
    if(index == 4){
      $('.right_control').fadeOut(500);
      $('.left_control').fadeIn(500);
    }
    $('.slider_panel').animate({
      left: -(index*1280),
    },'slow');
    // $('.control_button').removeClass('active');
    // $('.control_button').eq(index).addClass('active');  
  }

   function autoSlider() {
     auto = setInterval(function(){
     if(index < 4 && sw == false){
       $('.right_control').trigger('click');
     } else {
       sw=true;
     }
     if(index > 0 && sw == true) {
       $('.left_control').trigger('click');
     }else {
       sw=false;
     }
   },4000);    
   }

   //스크롤 영역

   $('.adFadein').animate({
    'opacity' : 1 
     },2000);

    $(window).scroll( function(){
         $('.scrollFadein').each( function(i){           
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();              
          if( bottom_of_window > bottom_of_element ){
             $(this).animate({
              'opacity':'1','margin-left':'0px'
            },2000);
              }
              });
            });
      
             
          });


        
           


                      
                      
                      
                      
                      
                      
                      
