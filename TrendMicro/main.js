// Scroll animation for review cards
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document.querySelectorAll(".review-card").forEach((card) => {
    observer.observe(card);
  });
});

// Scroll animation for 'Why Buy From Official Store' section
document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll(".store-feature");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }, index * 150); // staggered delay
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  features.forEach((feature) => observer.observe(feature));
});

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

//Login page
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.getElementById("loginMessage");
  message.classList.remove("hidden");
});

// Alerts Dropdown
function toggleAlertsDropdown() {
  const dropdown = document.getElementById("alertsDropdown");
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
    setTimeout(() => {
      dropdown.classList.remove("opacity-0", "scale-95");
      dropdown.classList.add("opacity-100", "scale-100");
    }, 10);
  } else {
    dropdown.classList.add("opacity-0", "scale-95");
    dropdown.classList.remove("opacity-100", "scale-100");
    setTimeout(() => {
      dropdown.classList.add("hidden");
    }, 300);
  }
}

// Optional: Close dropdown on outside click
document.addEventListener("click", (e) => {
  const alertBtn = e.target.closest(".group");
  const dropdown = document.getElementById("alertsDropdown");
  if (!alertBtn && !dropdown.contains(e.target)) {
    dropdown.classList.add("opacity-0", "scale-95");
    dropdown.classList.remove("opacity-100", "scale-100");
    setTimeout(() => dropdown.classList.add("hidden"), 300);
  }
});

//My products
