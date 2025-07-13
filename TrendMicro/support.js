// Toggle dropdown on Contact button click
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("contactBtn");
  const dropdown = document.getElementById("contactDropdown");

  if (btn && dropdown) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
    });

    // Hide dropdown on outside click
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
        dropdown.classList.add("hidden");
      }
    });
  }
});
