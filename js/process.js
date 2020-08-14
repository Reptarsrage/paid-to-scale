(() => {
  const cards = document.querySelectorAll('.js-scroll');
  let scrolling = false;

  const checkTimelineScroll = () => {
    cards.forEach((card) => {
      const bounds = card.getBoundingClientRect();
      if (card.classList.contains('hidden') && bounds.top <= window.innerHeight * 0.8) {
        card.classList.remove('hidden');
        card.classList.add('shown');
      }
    });

    scrolling = false;
  };

  // show timeline cards on scrolling
  window.addEventListener('scroll', () => {
    if (!scrolling) {
      scrolling = true;
      if (!window.requestAnimationFrame) {
        setTimeout(checkTimelineScroll, 250);
      } else {
        window.requestAnimationFrame(checkTimelineScroll);
      }
    }
  });

  checkTimelineScroll();
})();
