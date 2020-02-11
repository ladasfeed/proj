

function closess() {
let var_1 = Array.from(document.getElementsByClassName('header__item'));
	
	var_1.forEach(function(item) {
		item.style.display = "none";
		
	})
	alert('Are you sure?');
}