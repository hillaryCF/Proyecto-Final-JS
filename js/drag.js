(function() {
	var items = document.querySelectorAll('.hola');
  for (let i = 0;i < items.length; i ++) {
		items[i].setAttribute('draggable', 'true');
	}
  
  var item = null;
  document.addEventListener('dragstart', function(e) {
    item = e.target;
		e.dataTransfer.setData('text', '');
	}, false);

	
	document.addEventListener('dragover', function(e) {
		if(item) {
			e.preventDefault();
		}
	}, false);	


	document.addEventListener('drop', function(e) {
		if(e.target.getAttribute('class') == 'lista') {
			e.target.appendChild(item);
			e.preventDefault();
		}
	}, false);
	

	document.addEventListener('dragend', function(e) {
		item = null;
	}, false);

})();	


