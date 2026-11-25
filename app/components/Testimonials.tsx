import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "Anti never disappoints! The cakes are fresh, delicious & beautiful.",
    name: "Sarah J.",
    img: "/images/avatar-1.jpg",
    highlight: true,
  },
  {
    quote: "The best bakery in town! Always my go-to for every celebration.",
    name: "Michael T.",
    img: "/images/avatar-2.jpg",
  },
  {
    quote: "Amazing taste and fantastic service! Highly recommended.",
    name: "Priya S.",
    img: "/images/avatar-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="mt-16 bg-lavender py-16 lg:mt-20 lg:py-20">
      <div className="container-x">
        <h2 className="text-center font-serif text-[32px] font-medium text-ink sm:text-[38px]">
          What Our Customers Say
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-[20px] bg-white p-7 shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={r.img}
                  alt={r.name}
                  width={52}
                  height={52}
                  className="size-[52px] shrink-0 rounded-full object-cover"
                />
                <blockquote
                  className={`text-[15.5px] leading-[1.65] ${r.highlight ? "font-medium text-primary" : "text-body"}`}
                >
                  {r.quote}
                </blockquote>
              </div>
              <figcaption className="mt-4 pl-[68px] text-[14px] text-muted">— {r.name}</figcaption>
              <div className="mt-5 flex gap-1 pl-[68px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-pink text-pink" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
