function money(box){
		$(box).find('.add').click(function(event) {		
		 var index=$(box).find('.add').index(this);
		 var a = $(box).find('.num').eq(index).val();
		 a++;
		 $(box).find('.num').eq(index).val(a);
		});
	// 减少
		$(box).find('.reduce').click(function(event) {
			  var index=$(box).find('.reduce').index(this);
			 var a = $(box).find('.num').eq(index).val();
			 a--;
			 // 小于1
			if(a<=0){
					a=0;
			}
		$(box).find('.num').eq(index).val(a);

	});
