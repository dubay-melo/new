function toggleTheme() {
  document.body.classList.toggle("light");

  const switchButton = document.querySelector("#switch button");
  switchButton.addEventListener("click", toggleTheme);

  const img = document.querySelector("#profile img");
  if (document.body.classList.contains("light")) {
    img.src = "./assets/profile-light.png";
  } else {
    img.src = "./assets/profile.png";
  }

}
