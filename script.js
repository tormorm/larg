// LARG — väike interaktsioonikiht
(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('primary-nav');

  // Header vari scroll'imisel
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobiilimenüü
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const open = navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Sulge menüü' : 'Ava menüü');
    });
    navList.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navList.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Ameti järelevalve
  console.log(
    '%cLASNAMÄE RIIGIGÜMNAASIUM · TOIMIK 01',
    'font-weight:700;color:#0f2a4a'
  );
  console.log(
    'Käesolev konsool kuulub kooli valdusesse.\n' +
    'Puudumistõend esitada vormil 51-K. Vaiet ei rahuldata.\n' +
    'Rahastaja: https://kutify.ee'
  );
})();
