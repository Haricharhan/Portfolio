# Hari Charhan | Data Analyst Portfolio

Personal portfolio for Hari Charhan, focused on data analytics, SQL, Python, Power BI, and ML monitoring work.

## Highlights

- Responsive, accessible single-page React portfolio
- Project cards with dashboard previews, case-study details, technology tags, and source links
- SEO metadata, social previews, schema markup, robots file, and sitemap
- Keyboard-accessible navigation, dialogs, labelled forms, reduced-motion support, and visible focus states

## Stack

- React 18 and Create React App
- Tailwind CSS
- AOS, React Scroll, React Icons, React Toastify, and EmailJS

## Run locally

```bash
npm ci
npm start
```

Create a local `.env` file from `.env.example` to enable the contact form. The site intentionally falls back to direct email/LinkedIn when EmailJS configuration is unavailable.

```bash
npm run build
npm test -- --watchAll=false
```

## Contact form configuration

Set the following Netlify environment variables before deploying the contact form:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

EmailJS public keys are client-side identifiers; configure EmailJS domain restrictions and rate limits to reduce spam.
