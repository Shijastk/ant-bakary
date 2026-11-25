import Image from "next/image";
import { Award, Handshake, Heart } from "lucide-react";

const values = [
  { icon: Award, title: "Quality", text: "We never compromise on quality." },
  { icon: Heart, title: "Passion", text: "Baking is not just our business, it's our passion." },
  { icon: Handshake, title: "Trust", text: "Thousands trust us for their sweet celebrations." },
];

export default function About() {
  return (
    <section className="mt-16 lg:mt-20">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-8 rounded-[26px] bg-lavender p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr_0.95fr] lg:gap-8 lg:p-12">
          <div>
            <p className="text-[16px] font-semibold text-primary">About Us</p>
            <h2 className="mt-3 font-serif text-[32px] leading-[1.2] text-ink sm:text-[38px] lg:text-[34px] xl:text-[38px]">
              The Heart Behind
              <br />
              Every Bake
            </h2>
            <p className="mt-5 max-w-[320px] text-[15px] leading-[1.75] text-body">
              At Anti, we believe that the best moments in life are sweet.
              <br />
              Our mission is to create baked goodies that bring people together and make every moment special.
            </p>
            <a href="#" className="btn btn-primary mt-8 h-12 px-7 text-[15px]">
              Learn More About Us
            </a>
          </div>

          <div className="relative aspect-[0.95] overflow-hidden rounded-[20px]">
            <Image
              src="/images/about-cake.jpg"
              alt="Baker piping cream rosettes onto a red velvet cake"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-5 rounded-[16px] bg-white px-6 py-5 shadow-soft">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-lavender-2">
                  <Icon className="size-8 text-primary/80" strokeWidth={1.3} />
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-ink">{title}</h3>
                  <p className="mt-1 max-w-[150px] text-[13.5px] leading-[1.5] text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
