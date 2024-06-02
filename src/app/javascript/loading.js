document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#pages-and-header').style.display = 'none';
  setTimeout(function() {
    document.querySelector('#loading-app .loading-icon').classList.add('hidden');
  }, 3000);
	setTimeout(function() {
		document.querySelector('#loading-app').style.transform = 'translate(-100%)';
		// document.querySelector('#loading-app').style.display = 'none';
		document.querySelector('#pages-and-header').style.display = 'block';
	}, 4000);
}); /*o paradoxo coverfild*/