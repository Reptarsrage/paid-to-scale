(() => {
  const video = document.getElementById('testimonial');
  video.addEventListener('ended', function () {
    video.load();
  });
})();
