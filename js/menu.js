(() => {
  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */
  window.toggleMenu = () => {
    var x = document.getElementById("nav-menu");
    var icon = document.querySelector(".icon i");

    if (x.style.display === "flex") {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    }
  };

  // Auto hide menu when clicking away
  document.body.addEventListener("click", function (event) {
    var x = document.getElementById("nav-menu");
    var icon = document.querySelector(".icon i");
    if (
      x.style.display === "flex" &&
      !icon.contains(event.target) &&
      !x.contains(event.target)
    ) {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      x.style.display = "none";
    }
  });
})();
