document.addEventListener("DOMContentLoaded", function () {
  const modalElement = document.getElementById("profileModal");
  if (!modalElement || typeof bootstrap === "undefined") return;
  const teamBoxes = document.querySelectorAll(".box-3");
  const profileModal = new bootstrap.Modal(modalElement);
  const modalName = document.getElementById("modalName");
  const modalTitle = document.getElementById("modalTitle");
  const modalBio = document.getElementById("modalBio");
  const modalImage = document.getElementById("modalImage");
  /*     const modalRrssLinks = document.getElementById('modalRrssLinks'); */

  teamBoxes.forEach((box) => {
    box.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        return;
      }
      const name = this.querySelector("h4").textContent;
      const title = this.querySelector("p.boton-link").textContent;
      const bio = this.dataset.bio || "Biografía no disponible.";
      const imgSrc = this.dataset.imgSrc || this.querySelector("img").src;
      const linkedin = this.dataset.linkedin;
      const x = this.dataset.x;
      modalName.textContent = name;
      modalTitle.textContent = title;
      modalBio.textContent = bio;
      modalImage.src = imgSrc;

      profileModal.show();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const collapseElement = document.getElementById("moreNews");
  const toggleButton = document.getElementById("toggleNewsButton");

  if (collapseElement && toggleButton) {
    collapseElement.addEventListener("show.bs.collapse", function () {
      toggleButton.textContent = "Load less";
    });

    collapseElement.addEventListener("hide.bs.collapse", function () {
      toggleButton.textContent = "Load more";
    });
  }
});
