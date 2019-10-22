 $(function(){
	 thoigian = setInterval(function(){
	 	$('.red').toggleClass('chuyenhieuung');
	 },500);

	 
	 $(window).scroll(function() {
		vitri=$('html').scrollTop()
		console.log(vitri);
		if(vitri>100)
	 {
	 	$('.back-to-top').addClass('hienra');
	 }
	 else
	 {
	 	$('.back-to-top').removeClass('hienra');
	 }

	});
	 $('.back-to-top').click(function(event) {
 		$('html').animate({scrollTop:0},4000,"easeOutBounce");
 		return false;
 	});
	 
})  
 