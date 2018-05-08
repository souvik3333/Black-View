$(function(){
	chrome.storage.sync.get('total_amount',function(cost){
		if(cost.total_amount){
			$('#total_spent').text(parseInt(cost.total_amount));
		}
	});
	$('#submit').click(function(){
		chrome.storage.sync.get('total_amount',function(cost){
			var newTotal= 0;
			if(cost.total_amount){
			newTotal+=parseInt( cost.total_amount );
			}
			newTotal+= parseInt($('#amount').val());
			chrome.storage.sync.set({'total_amount':newTotal});
			$('#total_spent').text(newTotal);
			$('#amount').text('');
		});
	});
});