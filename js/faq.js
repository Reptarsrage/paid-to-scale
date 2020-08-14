/* expand/collapse */
const elements = document.getElementsByClassName('accordion');
for (element of elements) {
  element.addEventListener('click', function () {
    const icon = this.querySelector('.dot i');

    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
      content.style.display = 'none';
    } else {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
      content.style.display = 'block';
    }
  });
}
