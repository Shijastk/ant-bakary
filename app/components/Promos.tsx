import Image from "next/image";

export default function Promos() {
  return (
    <section className="container-x mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14">
      {/* Sweet Delights */}
      <article className="relative isolate flex min-h-[300px] overflow-hidden rounded-[22px] bg-primary sm:min-h-[330px]">
        <div className="relative z-10 flex max-w-[58%] flex-col justify-center py-10 pl-8 sm:pl-11">
          <h2 className="font-serif text-[40px] leading-[1.08] text-white sm:text-[48px]">
            Sweet
            <br />
            Delights
          </h2>
          <p className="mt-2 text-[15px] font-bold uppercase tracking-wide text-white sm:text-base">For every moment</p>
          <p className="mt-4 max-w-[240px] text-[13.5px] leading-[1.6] text-white/85">
            From classic cookies to decadent cakes, we have treats for every craving.
          </p>
          <a
            href="#menu"
            className="btn mt-6 h-11 w-fit bg-white px-6 text-sm text-ink hover:bg-lavender"
          >
            Explore Menu
          </a>
        </div>
        <Image
          src="/images/cookies.jpg"
          alt="Chocolate chip cookies"
          width={496}
          height={512}
          className="fade-left absolute inset-y-0 right-0 -z-0 h-full w-[60%] object-cover object-left"
          sizes="(min-width: 768px) 330px, 60vw"
        />
      </article>

      {/* Deal of the Day */}
      <article className="relative isolate flex min-h-[300px] overflow-hidden rounded-[22px] bg-pink-soft sm:min-h-[330px]">
        <div className="relative z-10 flex flex-col justify-center py-10 pl-8 sm:pl-11">
          <p className="flex items-center gap-1.5 font-serif text-[24px] font-medium text-ink sm:text-[28px]">
            Deal
            <span className="relative inline-grid place-items-center px-1 font-serif italic text-pink">
              of
              <span className="absolute inset-[-4px_-3px] rounded-full border-2 border-pink/60" />
            </span>
            the Day
          </p>
          <span className="mt-3 block h-[2px] w-9 rounded bg-pink/60" />
          <p className="mt-4 text-[42px] font-bold leading-none tracking-tight text-pink sm:text-[62px] md:text-[48px] lg:text-[62px]">20%OFF</p>
          <p className="mt-3 text-[20px] font-semibold text-ink sm:text-[22px]">On All Pastries</p>
          <a
            href="#"
            className="btn mt-6 h-11 w-fit bg-pink px-7 text-sm text-white shadow-[0_8px_20px_-8px_rgba(242,87,105,0.8)] hover:-translate-y-0.5 hover:bg-pink-dark"
          >
            Grab the Deal
          </a>
        </div>
        <Image
          src="/images/pastry.jpg"
          alt="Chocolate strawberry layered pastry"
          width={440}
          height={508}
          className="fade-left absolute bottom-0 right-0 -z-0 h-[94%] w-auto max-w-[44%] sm:max-w-[52%] md:max-w-[44%] lg:max-w-[52%] object-cover object-left-bottom"
          sizes="(min-width: 768px) 290px, 50vw"
        />
      </article>
    </section>
  );
}
