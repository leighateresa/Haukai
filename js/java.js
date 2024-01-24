
  document.addEventListener('keydown', function(event) {
    var currentLink = document.activeElement;
    var menuItems = document.querySelectorAll('#top a');
    var currentIndex = Array.from(menuItems).indexOf(currentLink);
  
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (currentIndex < menuItems.length - 1) {
            menuItems[currentIndex + 1].focus();
        } else {
            // Scroll down to the "reserve" link or desired element
            var reserveLink = document.getElementById('reservelink');
            reserveLink.scrollIntoView();
            reserveLink.focus();
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (currentIndex > 0) {
            menuItems[currentIndex - 1].focus();
        }
    } else if (event.key === 'e') {
      event.preventDefault();
      var emailLink = document.getElementById('email');
      emailLink.scrollIntoView();
      emailLink.click();
    } else if (event.key === 'p') {
      event.preventDefault();
      var phoneLink = document.getElementById('phone');
      phoneLink.scrollIntoView();
      phoneLink.click();
    }
});