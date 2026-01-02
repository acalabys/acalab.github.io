(function () {
  // footer year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // mobile nav toggle
  const btn = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }

  // publications search filter
  const search = document.getElementById("pubSearch");
  const list = document.getElementById("pubList");
  if (search && list) {
    const items = Array.from(list.querySelectorAll("li.pub"));
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      items.forEach((li) => {
        const text = li.textContent.toLowerCase();
        li.style.display = text.includes(q) ? "" : "none";
      });
    });
  }
})();