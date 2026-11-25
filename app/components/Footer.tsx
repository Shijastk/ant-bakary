import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Instagram, Pinterest, Youtube } from "./icons";

const quickLinks = ["Home", "Menu", "About Us", "Our Story", "Contact"];
const service = ["FAQs", "Shipping Policy", "Return Policy", "Terms & Conditions", "Privacy Policy"];
const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "YouTube", Icon: Youtube },
  { label: "Pinterest", Icon: Pinterest },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white lg:mt-20">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <Link href="/" className="font-script text-[48px] leading-none text-primary">
            Anti
          </Link>
          <p className="mt-4 max-w-[260px] text-[14.5px] leading-[1.7] text-body">
            Baking happiness into every bite. Fresh ingredients, handmade with love.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-9 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links" items={quickLinks} />
        <FooterCol title="Customer Service" items={service} />

        <div>
          <h4 className="text-[16px] font-semibold text-ink">Contact Us</h4>
          <ul className="mt-5 space-y-3.5 text-[14.5px] text-body">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-[18px] shrink-0 text-ink" />
              <span>
                123 Sweet Avenue,
                <br />
                Bakery Town, USA
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-[18px] shrink-0 text-ink" />
              <a href="tel:+1234567890" className="hover:text-primary">+1 234 567 890</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-[18px] shrink-0 text-ink" />
              <a href="mailto:hello@anti.com" className="hover:text-primary">hello@anti.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-6 text-center text-[13.5px] text-muted">
        © 2025 Anti Bakery. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[16px] font-semibold text-ink">{title}</h4>
      <ul className="mt-5 space-y-3 text-[14.5px] text-body">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="transition-colors hover:text-primary">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
