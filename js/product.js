$(function () {  
   //이미지 슬라이더 영역
	let index=0;
	let sw=false;
	let auto;
	moveSlider(index);
	autoSlider();
	 
	$('.animation_canvas3').hover(function () {
	  clearInterval(auto);
	}, function (){
	  autoSlider();
	});
  
	$('.control_button3').click(function (){
	  index=$(this).index();
	  moveSlider(index);
	});
  
		$('.left_control3').click(function() {
	  index--;
	  moveSlider(index);
	});
  
		$('.right_control3').click(function() {
	  index++;
	  moveSlider(index);
	});
  
		function moveSlider(index) {
	  if(index == 2){
		$('.right_control3').fadeOut(500);
		$('.left_control3').fadeIn(500);
	  }
	  $('.slider_panel3').animate({
		left: -(index*664),
	  },'slow');
	  $('.control_button3').removeClass('active');
	  $('.control_button3').eq(index).addClass('active');  
	}
  
	 function autoSlider() {
	   auto = setInterval(function(){
	   if(index < 2 && sw == false){
		 $('.right_control3').trigger('click');
	   } else {
		 sw=true;
	   }
	   if(index > 0 && sw == true) {
		 $('.left_control3').trigger('click');
	   }else {
		 sw=false;
	   }
	 },3000);    
	 }
    

   //other funiture1 영역
   
    $('#otherfun1List>img:eq(0)').hover(function () {
      $(this).css('opacity','0.1').attr('src','img/' + 'otherfun1_1_2.png').animate({opacity:1},1500);
       } , function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'otherfun1_1_1.png').animate({opacity:1},1500);      
    });

    
    $('#otherfun1List>img:eq(1)').hover(function () {
      $(this).css('opacity','0.1').attr('src','img/' + 'otherfun1_2_2.png').animate({opacity:1},1500);
       } , function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'otherfun1_2_1.png').animate({opacity:1},1500);      
    });

    
    $('#otherfun1List>img:eq(2)').hover(function () {
      $(this).css('opacity','0.1').attr('src','img/' + 'otherfun1_3_2.png').animate({opacity:1},1500);
       } , function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'otherfun1_3_1.png').animate({opacity:1},1500);      
    });

    
    $('#otherfun1List>img:eq(3)').hover(function () {
      $(this).css('opacity','0.1').attr('src','img/' + 'otherfun1_4_2.png').animate({opacity:1},1500);
       } , function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'otherfun1_4_1.png').animate({opacity:1},1500);       
    });

     //other funiture2 영역

    $('#otherfun2List>img:eq(0)').hover(function () {
      $(this).css('opacity','0.1').attr('src','img/' + 'otherfun2_1_2.jpg').animate({opacity:1},1500);
       } , function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'otherfun2_1_1.jpg').animate({opacity:1},1500);      
    });

    
    $('#otherfun2List>img:eq(1)').hover(function () {
      $(this).css('opacity','0.1').attr('src','img/' + 'otherfun2_2_2.jpg').animate({opacity:1},1500);
       } , function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'otherfun2_2_1.jpg').animate({opacity:1},1500);      
    });

    
    $('#otherfun2List>img:eq(2)').hover(function () {
      $(this).css('opacity','0.1').attr('src','img/' + 'otherfun2_3_2.jpg').animate({opacity:1},1500);
       } , function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'otherfun2_3_1.jpg').animate({opacity:1},1500);      
    });

    
    $('#otherfun2List>img:eq(3)').hover(function () {
      $(this).css('opacity','0.1').attr('src','img/' + 'otherfun2_4_2.jpg').animate({opacity:1},1500);
       } , function () {
        $(this).css('opacity','0.1').attr('src','img/' + 'otherfun2_4_1.jpg').animate({opacity:1},1500);       
    });

    

  });