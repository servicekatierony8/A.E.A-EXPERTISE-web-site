/* A.E.A EXPERTISE — interactions du site vitrine */
(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("ouverte");
      burger.setAttribute("aria-expanded", nav.classList.contains("ouverte") ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("ouverte");
    });
  }

  /* ---------- Statut d'ouverture en direct (heure d'Abidjan) ----------
     Horaires : lundi–vendredi 08h00–18h00 ; samedi & dimanche fermé. */
  function statutOuverture(date) {
    var jour = date.getDay(); // 0 = dimanche … 6 = samedi
    var heure = date.getHours();
    var semaine = jour >= 1 && jour <= 5;
    if (!semaine) return { ouvert: false, texte: "Fermé — Ouvre lundi à 08h00" };
    if (heure < 8) return { ouvert: false, texte: "Fermé — Ouvre à 08h00" };
    if (heure < 18) return { ouvert: true, texte: "Ouvert — Ferme à 18h00" };
    if (jour === 5) return { ouvert: false, texte: "Fermé — Ouvre lundi à 08h00" };
    return { ouvert: false, texte: "Fermé — Ouvre demain à 08h00" };
  }

  function maintenantAbidjan() {
    try {
      var chaine = new Date().toLocaleString("en-US", { timeZone: "Africa/Abidjan" });
      return new Date(chaine);
    } catch (e) {
      return new Date();
    }
  }

  function majStatut() {
    var st = statutOuverture(maintenantAbidjan());
    document.querySelectorAll("[data-statut]").forEach(function (el) {
      el.textContent = st.texte;
      var point = el.parentElement ? el.parentElement.querySelector(".statut-point") : null;
      if (point) {
        point.classList.toggle("ouvert", st.ouvert);
        point.classList.toggle("ferme", !st.ouvert);
      }
    });
    /* Surligner le jour courant dans le tableau des horaires */
    var jour = maintenantAbidjan().getDay();
    document.querySelectorAll("[data-jour]").forEach(function (tr) {
      tr.classList.toggle("aujourdhui", parseInt(tr.getAttribute("data-jour"), 10) === jour);
    });
  }
  if (document.querySelector("[data-statut]")) {
    majStatut();
    setInterval(majStatut, 60000);
  }

  /* ---------- Révélation douce au défilement ---------- */
  var reveles = document.querySelectorAll(".rv");
  if (reveles.length && "IntersectionObserver" in window) {
    document.body.classList.add("js-rv");
    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (ent) {
        if (ent.isIntersecting) { ent.target.classList.add("visible"); obs.unobserve(ent.target); }
      });
    }, { threshold: 0.08 });
    reveles.forEach(function (el) { obs.observe(el); });
  }

  /* ---------- Visionneuse galerie ---------- */
  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    var lbCap = lightbox.querySelector("p");
    document.querySelectorAll(".galerie figure").forEach(function (fig) {
      fig.addEventListener("click", function () {
        var img = fig.querySelector("img");
        var cap = fig.querySelector("figcaption");
        lbImg.src = img.src; lbImg.alt = img.alt;
        lbCap.textContent = cap ? cap.textContent : img.alt;
        lightbox.classList.add("ouverte");
      });
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target !== lbImg) lightbox.classList.remove("ouverte");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") lightbox.classList.remove("ouverte");
    });
  }

  /* ---------- Formulaire « Demander une expertise » → WhatsApp ---------- */
  var form = document.querySelector("form.demande");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nom = form.querySelector("[name=nom]").value.trim();
      var tel = form.querySelector("[name=telephone]").value.trim();
      var bien = form.querySelector("[name=bien]").value;
      var msg = form.querySelector("[name=message]").value.trim();
      var lignes = [
        "Bonjour A.E.A EXPERTISE,",
        "Je souhaite demander une expertise.",
        "",
        "Nom : " + nom,
        "Téléphone : " + tel,
        "Type de bien : " + bien
      ];
      if (msg) lignes.push("Message : " + msg);
      var url = "https://wa.me/2250707529517?text=" + encodeURIComponent(lignes.join("\n"));
      var ok = form.querySelector(".form-ok");
      if (ok) ok.classList.add("visible");
      window.open(url, "_blank");
    });
  }
})();
