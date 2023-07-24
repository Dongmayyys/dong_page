document.addEventListener("DOMContentLoaded", () => {
  var menuContainer = document.getElementById("menuContainer");
  var dropdownMenu = document.getElementById("dropdownMenu");

  menuContainer.addEventListener("mouseover", function () {
    dropdownMenu.classList.remove("hide");
  });

  menuContainer.addEventListener("mouseout", function () {
    dropdownMenu.classList.add("hide");
  });
});
