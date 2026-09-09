(function () {
  var toggle = document.querySelector('.mobile-toggle');
  var nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('mobile-open');
    toggle.textContent = open ? '✕' : '☰';
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
