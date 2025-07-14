document.addEventListener("DOMContentLoaded", () => {
  const materias = document.querySelectorAll(".materia");
  const infoPopup = document.getElementById("info-popup");
  const infoContent = document.getElementById("info-content");
  const closePopupBtn = document.getElementById("close-popup");

  // Mostrar info al dar click en el botón "+"
  materias.forEach((materia) => {
    const btn = materia.querySelector(".btn-info");
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Evitar que se active el tache
      const info = materia.getAttribute("data-info");
      infoContent.textContent = info;
      infoPopup.classList.remove("hidden");
    });

    // Tachar materia al hacer click en el div materia (no en el boton)
    materia.addEventListener("click", () => {
      materia.classList.toggle("aprobada");
    });
  });

  // Cerrar popup info
  closePopupBtn.addEventListener("click", () => {
    infoPopup.classList.add("hidden");
  });

  // Cerrar popup si clic afuera
  window.addEventListener("click", (e) => {
    if (!infoPopup.classList.contains("hidden") && !infoPopup.contains(e.target)) {
      infoPopup.classList.add("hidden");
    }
  });
});
