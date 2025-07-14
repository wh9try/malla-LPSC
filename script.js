// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const infoModal = document.getElementById("info-modal");
  const infoText = document.getElementById("info-text");
  const prereqText = document.getElementById("prereq-text");
  const closeBtn = document.getElementById("close-info");

  // Abrir modal info
  document.querySelectorAll(".btn-info").forEach(button => {
    button.addEventListener("click", (e) => {
      const materia = e.target.closest(".materia");
      if (!materia) return;

      const info = materia.getAttribute("data-info") || "No hay información";
      const prereq = materia.getAttribute("data-prerrequisito");

      infoText.textContent = info;
      if (prereq) {
        prereqText.textContent = "Prerrequisitos: " + prereq;
        prereqText.style.display = "block";
      } else {
        prereqText.style.display = "none";
      }

      infoModal.classList.remove("hidden");
    });
  });

  // Cerrar modal info
  closeBtn.addEventListener("click", () => {
    infoModal.classList.add("hidden");
  });

  // Cerrar modal si clic afuera del contenido
  infoModal.addEventListener("click", (e) => {
    if (e.target === infoModal) {
      infoModal.classList.add("hidden");
    }
  });

  // Manejar checkbox "Se aprueba"
  document.querySelectorAll(".aprobado-checkbox").forEach(checkbox => {
    checkbox.addEventListener("change", (e) => {
      const materia = e.target.closest(".materia");
      if (!materia) return;

      if (checkbox.checked) {
        materia.classList.add("aprobado");
      } else {
        materia.classList.remove("aprobado");
      }
    });
  });
});
