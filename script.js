/* ============================================================
   Enlil Technologies — script.js
   ============================================================ */

(function () {
  "use strict";

  /* ---- Current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Mobile nav toggle ---- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after clicking a link (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Scroll reveal animation ---- */
  var revealTargets = document.querySelectorAll(
    ".card, .feature, .step, .stat, .about-copy, .contact-copy, .contact-form, .section-head"
  );

  if ("IntersectionObserver" in window) {
    revealTargets.forEach(function (el) { el.classList.add("reveal"); });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Contact form (front-end only — no backend yet) ---- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk || !message) {
        setStatus("Please fill in your name, a valid email, and a message.", "err");
        return;
      }

      // No backend is wired up yet. This simulates a successful send.
      // To make it live, connect this to a form service (Formspree, Netlify
      // Forms, your own API, etc.) — see the note in this file.
      setStatus("Thanks, " + name + "! Your message has been received. We'll be in touch within one business day.", "ok");
      form.reset();
    });
  }

  function setStatus(text, kind) {
    if (!status) return;
    status.textContent = text;
    status.className = "form-status " + (kind || "");
  }
})();
