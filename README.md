# Enlil Technologies — Website

A one-page marketing website for Enlil Technologies (digital transformation & IT services).
Built as a plain static site — no build step, no dependencies.

## Files
- `index.html` — all page content (Hero, Services, About, Why Us, Process, Contact, Footer)
- `styles.css` — all styling and responsive layout
- `script.js` — mobile menu, scroll animations, contact-form handling

## View it locally
Just double-click `index.html` to open it in your browser. That's it.

## Edit the content
Open `index.html` in any text editor. Things you'll likely want to change:
- **Contact details** — search for `hello@enliltechnologies.com` and `+1 (000) 000-0000` and replace with the real email/phone.
- **Service descriptions** — under the `<!-- SERVICES -->` section.
- **Company copy** — under the `<!-- ABOUT -->` section.

## Make the contact form actually send
Right now the form validates and shows a thank-you message, but does **not** email
anyone yet (a static site can't send email on its own). To make it live, the easiest
option is a free form service:
1. Sign up at [Formspree](https://formspree.io) (or use Netlify Forms if hosting there).
2. They give you a form URL.
3. In `index.html`, add `action="<your-formspree-url>" method="POST"` to the `<form>` tag,
   and remove the `e.preventDefault()` line in `script.js`.

I can wire this up for you — just say the word and tell me which service you prefer.

## Publish it (free options)
- **Netlify** — drag this folder onto app.netlify.com/drop. Live in seconds.
- **GitHub Pages** — push to a repo, enable Pages in settings.
- **Your own domain** — upload these files to any web host.
