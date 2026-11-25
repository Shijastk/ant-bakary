import Image from "next/image";
import { Play } from "lucide-react";
import { HeartDoodle } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid grid-cols-1 items-center gap-10 pb-10 pt-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-4 lg:pb-6 lg:pt-4">
        {/* Copy */}
        <div className="relative z-10">
          <h1 className="font-serif text-ink">
            <span className="block text-[38px] leading-[1.1] sm:text-[48px] lg:text-[54px]">Baked with</span>
            <span className="relative block text-[84px] leading-[0.95] text-primary sm:text-[104px] lg:text-[118px]">
              Love,
              <HeartDoodle className="absolute -top-6 left-[255px] hidden w-[86px] text-pink/80 sm:block lg:left-[300px] lg:w-[98px]" />
            </span>
            <span className="mt-2 block text-[38px] leading-[1.1] sm:text-[48px] lg:text-[54px]">Made for</span>
            <span className="block text-[84px] leading-[0.95] text-primary sm:text-[104px] lg:text-[118px]">You!</span>
          </h1>

          <p className="mt-6 max-w-[360px] text-[17px] leading-[1.65] text-body">
            Every bite is a perfect blend of fresh ingredients and pure happiness.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#" className="btn btn-primary h-[54px] px-10 text-[16px]">
              Order Now
            </a>
            <a
              href="#menu"
              className="btn h-[54px] border border-primary/35 bg-white px-9 text-[16px] font-medium text-ink hover:border-primary hover:text-primary"
            >
              <Play className="size-3.5 fill-current" />
              Our Menu
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-[780px]">
          <Image
            src="/images/hero-cake.jpg"
            alt="Chocolate drip cake topped with fresh strawberries, blueberries and blackberries"
            width={1096}
            height={1032}
            priority
            className="h-auto w-full [mask-image:linear-gradient(to_bottom,#000_93%,transparent)]"
            sizes="(min-width: 1024px) 720px, 100vw"
          />
          <div className="absolute bottom-[-18px] left-1/2 flex w-max -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full sm:left-[40%] sm:translate-x-0 bg-white/80 py-1 pl-1 pr-3 backdrop-blur-sm sm:bottom-[-22px]">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((n) => (
                <Image
                  key={n}
                  src={`/images/customer-${n}.jpg`}
                  alt=""
                  width={48}
                  height={48}
                  className="size-10 rounded-full border-2 border-white object-cover sm:size-12"
                />
              ))}
            </div>
            <div className="leading-tight">
              <p className="font-bold text-ink sm:text-lg">200+</p>
              <p className="text-xs text-body sm:text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
