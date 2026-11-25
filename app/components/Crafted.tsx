import Image from "next/image";

const categories = [
  { name: "Cakes", img: "/images/cat-cakes.svg" },
  { name: "Pastries", img: "/images/cat-pastries.svg" },
  { name: "Cupcakes", img: "/images/cat-cupcakes.svg" },
  { name: "Cookies", img: "/images/cat-cookies.svg" },
  { name: "Brownies", img: "/images/cat-brownies.svg" },
  { name: "Doughnuts", img: "/images/cat-doughnuts.svg" },
];

export default function Crafted() {
  return (
    <section className="container-x mt-16 grid grid-cols-1 items-center gap-10 lg:mt-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
      <div>
        <h2 className="font-serif text-[34px] font-medium leading-tight text-ink sm:text-[40px]">
          Crafted for Every Craving
        </h2>
        <p className="mt-3 max-w-[360px] text-[15.5px] leading-[1.65] text-body">
          Explore our wide range of baked goodies made just for you.
        </p>

        <div className="mt-8 grid max-w-[460px] grid-cols-3 gap-4">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#"
              className="group flex flex-col items-center gap-2.5 rounded-[16px] bg-blush px-2 py-5 transition-all hover:-translate-y-0.5 hover:bg-pink-soft"
            >
              <Image
                src={c.img}
                alt=""
                width={56}
                height={56}
                className="size-11 object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-[14px] font-medium text-ink">{c.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex max-w-[460px] justify-center">
          <a href="#" className="btn btn-primary h-12 px-9 text-[15px]">
            View Full Menu
          </a>
        </div>
      </div>

      <div className="relative mx-auto aspect-[1.06] w-full max-w-[500px] overflow-hidden rounded-[24px] shadow-card">
        <Image
          src="/images/crafted.jpg"
          alt="Baker decorating cakes in the Anti bakery"
          fill
          sizes="(min-width: 1024px) 560px, 90vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
