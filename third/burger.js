let value=false;

function burger() {
	let some = Array.from(document.getElementsByClassName('vis'));
	
	
	if (value==false) {
		some.forEach(function(item) {
			item.style.display = "flex";
			
		})
		
	
		value = true;
	}
	else {
		some.forEach(function(item) {
			item.style.display = "none";

		})
		
		
		value= false;
		
	}
	
	
	
	
}