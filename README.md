# JVS Homepage

Next.js (App Router) + TypeScript + CSS Modules.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        Font, page title, global CSS
  page.tsx          Puts all sections together in order
  globals.css       Colors, spacing and shared classes
components/
  Header, Hero, HeroGlance, BrandStrip, About, Services, ServiceDetail,
  PlacementJourney, Brands, Quotes, Contact, ContactForm, Footer, Logo
  EnquiryContext    Shares the selected services between Services and the contact form
  ui/Icon           All SVG icons in one place
data/
  homepage.ts       ALL text, links and images
public/images/      Put your own images here
```

Each component has a `.module.css` file next to it with the same name.

## Updating content

Edit `data/homepage.ts`. You don't need to touch the components.

### Changing an image

Every image is one `{ src, alt }` object. To use your own photo:

1. Put the file in `public/images/`, e.g. `public/images/about-main.jpg`
2. Update the `src` in `data/homepage.ts`:

```ts
mainImage: {
  src: "/images/about-main.jpg",
  alt: "Students collaborating on laptops",
},
```

If you load images from a new remote domain (not Unsplash), add that domain to
`images.remotePatterns` in `next.config.ts`.

### Changing colors

The brand colors are CSS variables at the top of `app/globals.css`
(`--gradient`, `--accent`, `--accent-2`, `--bg-soft`).

## Contact form

The form currently only shows a thank-you message. Connect it to an API or
email service in `handleSubmit` inside `components/ContactForm.tsx`.
