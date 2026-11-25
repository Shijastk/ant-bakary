# Anti Bakery — Next.js landing page

A pixel-faithful clone of the "Anti" bakery landing page, built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4** and **lucide-react** icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
# production
npm run build && npm start
```

## Design tokens

| Token | Value | Used for |
|---|---|---|
| `primary` | `#664CA7` | Buttons, headings accents, trust bar, CTA |
| `blob` | `#C8BCE2` | Hero blob |
| `lavender` | `#F8F5FC` | Feature card, About block, testimonials bg |
| `pink` | `#F25769` | Deal text/button, stars, cart badge |
| `pink-soft` | `#FDE1EB` | Deal of the Day card |
| `ink` | `#1C1A24` | Body headings |

Fonts (loaded with `next/font/google`):
- **Lora**: serif headings ("Baked with Love, Made for You!")
- **DM Sans**: body and UI text
- **Allura**: the script "Anti" logo

All tokens are in `app/globals.css` under `@theme`.

## Structure

```
app/
  layout.tsx          fonts + metadata
  page.tsx            assembles the sections
  globals.css         Tailwind theme + small utilities
  components/
    Navbar.tsx        sticky nav + mobile menu
    Hero.tsx
    Features.tsx      Freshly Baked / Premium / Handmade / Delivery
    Promos.tsx        Sweet Delights + Deal of the Day
    Bestsellers.tsx
    About.tsx
    TrustBar.tsx
    Crafted.tsx       Crafted for Every Craving + categories
    Testimonials.tsx
    CallToAction.tsx  Life is Better with Cake!
    Footer.tsx
    icons.tsx         heart doodle + social icons
public/images/        all imagery
```

## Images

The photos (hero cake, cookies, pastry, the four bestsellers, the about cake, the baker and the CTA cake) and the four feature icons were cropped directly from the reference design and AI-upscaled (Real-ESRGAN).
The customer avatars and category icons were too small in the reference to recover, so they use stand-ins: randomuser.me portraits and Microsoft Fluent Emoji (MIT).

If you have the original high-res assets, drop them into `public/images/` using the same file names.
