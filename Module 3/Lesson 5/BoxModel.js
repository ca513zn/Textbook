const marginToggleButton = document.getElementById("toggle-margin");
const paddingToggleButton = document.getElementById("toggle-padding");

function toggle(className) {
  const icons = document.getElementsByClassName("icon");
  const toggle = icons[0].classList.contains(className);
  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];
    if (!toggle) {
      icon.classList.add(className);
    } else {
      icon.classList.remove(className);
    }
  }
}

marginToggleButton.addEventListener("click", function () {
  toggle("no-margin");
});
paddingToggleButton.addEventListener("click", function () {
  toggle("no-padding");
});
