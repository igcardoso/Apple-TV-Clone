document.addEventListener('DOMContentLoaded', function() {
	setTimeout(function() {
		document.querySelector('#loading-app').style.opacity = '0';
	}, 3000);
  setTimeout(() => {
    document.querySelector('#loading-app').style.display = 'none';
  }, 4000);
});