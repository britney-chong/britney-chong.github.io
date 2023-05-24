window.addEventListener('scroll', function() {
  var sections = document.getElementsByTagName('section');
  var navItems = document.querySelectorAll('#header2 nav ul li a');
  var currentSectionIndex = -1;

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSectionIndex = i;
      break;
    }
  }

  for (var j = 0; j < navItems.length; j++) {
    if (j === currentSectionIndex) {
      navItems[j].classList.add('active');
    } else {
      navItems[j].classList.remove('active');
    }
  }
});
