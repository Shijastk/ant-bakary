import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const products = [
  { name: "Chocolate Cupcake", price: "$2.50", img: "/images/cupcake.jpg" },
  { name: "Berry Cheesecake", price: "$3.75", img: "/images/cheesecake.jpg" },
  { name: "Chocolate Brownie", price: "$2.99", img: "/images/brownie.jpg" },
  { name: "Classic Doughnut", price: "$1.99", img: "/images/doughnut.jpg" },
];

export default function Bestsellers() {
  return (
    <section id="menu" className="container-x mt-16 lg:mt-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-serif text-[28px] font-medium leading-tight text-ink sm:text-[40px]">Our Bestsellers</h2>
          <span className="mt-3 block h-[3px] w-12 rounded-full bg-primary" />
        </div>
        <a href="#" className="btn btn-primary mb-3 h-10 px-6 text-sm">
          View All
        </a>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.name}
            className="group rounded-[18px] border border-line bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-4"
          >
            <div className="relative aspect-[1.27] overflow-hidden rounded-[14px] bg-lavender">
              <Image
                src={p.img}
                alt={p.name}
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-end justify-between gap-2 px-1 pb-1">
              <div>
                <h3 className="text-[14px] font-semibold text-ink sm:text-[16px]">{p.name}</h3>
                <p className="mt-1.5 text-[15px] font-bold text-ink sm:text-[17px]">{p.price}</p>
              </div>
              <button
                aria-label={`Add ${p.name} to cart`}
                className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark sm:size-11"
              >
                <ShoppingCart className="size-[18px]" strokeWidth={2} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
