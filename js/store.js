$(function() {
	//이미지 슬라이더 영역
	let index=0;
	let sw=false;
	let auto;
	moveSlider(index);
	autoSlider();
	
	$('.animation_canvas2').hover(function () {
	  clearInterval(auto);
	}, function (){
	  autoSlider();
	});
  
	$('.control_button2').click(function (){
	  index=$(this).index();
	  moveSlider(index);
	});
  
	$('.left_control2').click(function() {
	  index--;
	  moveSlider(index);
	});
  
	$('.right_control2').click(function() {
	  index++;
	  moveSlider(index);
	});
  
	function moveSlider(index) {
	  if(index == 4){
		$('.right_control2').fadeOut(500);
		$('.left_control2').fadeIn(500);
	  }
	  $('.slider_panel2').animate({
		left: -(index*925),
	  },'slow');
	  $('.control_button2').removeClass('active');
	  $('.control_button2').eq(index).addClass('active');  
	}
  
	 function autoSlider() {
	   auto = setInterval(function(){
	   if(index < 4 && sw == false){
		 $('.right_control2').trigger('click');
	   } else {
		 sw=true;
	   }
	   if(index > 0 && sw == true) {
		 $('.left_control2').trigger('click');
	   }else {
		 sw=false;
	   }
	 },3000);    
	 }

  //map 영역
  $('#googleMap').hide();

  $('.clickbtn').click(function () {     
  $('#googleMap').slideToggle('slow');
  }); 
  
  //floor 영역
  $('#fb1>img').css('opacity',0.6);
	let floorb1f;
	$('#fb1>img').click(function () {
		floorb1f=$(this).attr('src');
		$('.floorImgB1f').attr('src',floorb1f);		

		$('#fb1>img').css('opacity',0.6);
         $(this).css('opacity',1);
	});	
	
	$('#f1>img').css('opacity',0.6);  
	let floor1f;
	$('#f1>img').click(function () {
		floor1f=$(this).attr('src');
		$('.floorImg1f').attr('src',floor1f);	
		
		$('#f1>img').css('opacity',0.6);
         $(this).css('opacity',1);
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

});



