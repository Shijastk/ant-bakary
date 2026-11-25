import Image from "next/image";
import { SmallHeart } from "./icons";

export default function CallToAction() {
  return (
    <section className="container-x mt-16 lg:mt-20">
      <div className="relative isolate grid grid-cols-1 overflow-hidden rounded-[26px] bg-primary md:grid-cols-[1fr_1.15fr]">
        <div className="relative z-10 px-8 py-12 sm:px-14 sm:py-16">
          <h2 className="font-serif text-[40px] leading-[1.15] text-white sm:text-[52px]">
            Life is Better
            <br />
            with Cake!
          </h2>
          <p className="mt-4 max-w-[260px] text-[15.5px] leading-[1.6] text-white/85">
            Order now and make every moment sweeter.
          </p>
          <a href="#" className="btn mt-8 h-12 bg-white px-8 text-[15px] text-ink hover:bg-lavender">
            Order Now
          </a>
        </div>

        <div className="relative min-h-[240px] md:min-h-0">
          <SmallHeart className="absolute left-[12%] top-[26%] z-10 hidden w-11 -rotate-12 text-pink drop-shadow-[0_4px_10px_rgba(242,87,105,0.45)] md:block" />
          <SmallHeart className="absolute left-[4%] top-[18%] z-10 hidden w-5 rotate-12 text-pink/60 md:block" />
          <span className="absolute left-[22%] top-[44%] hidden size-1 rounded-full bg-pink/70 md:block" />
          <Image
            src="/images/cta-cake.jpg"
            alt="Rich chocolate layer cake slice with berries"
            fill
            sizes="(min-width: 768px) 620px, 100vw"
            className="object-cover md:fade-left-wide object-right md:object-center"
          />
        </div>
      </div>
    </section>
  );
}
