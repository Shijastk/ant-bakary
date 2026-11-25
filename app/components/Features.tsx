import Image from "next/image";

const features = [
  { icon: "/images/icon-cake.png", title: "Freshly Baked", text: ["Everyday fresh from", "our oven to you."] },
  { icon: "/images/icon-bowl.png", title: "Premium Ingredients", text: ["We use the finest", "quality ingredients."] },
  { icon: "/images/icon-whisk.png", title: "100% Handmade", text: ["Made with care", "by our bakers."] },
  { icon: "/images/icon-scooter.png", title: "Fast Delivery", text: ["Quick & safe delivery", "at your doorstep."] },
];

export default function Features() {
  return (
    <section className="container-x mt-10 lg:mt-14">
      <div className="grid grid-cols-2 gap-y-8 rounded-[22px] border border-line bg-lavender px-4 py-8 shadow-soft md:grid-cols-4 md:py-9">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`flex flex-col items-center px-3 text-center ${
              i > 0 ? "md:border-l md:border-line" : ""
            } ${i % 2 === 1 ? "border-l border-line md:border-l" : ""}`}
          >
            <Image src={f.icon} alt="" width={64} height={64} className="h-14 w-auto object-contain" />
            <h3 className="mt-4 text-[17px] font-semibold text-primary">{f.title}</h3>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-body">
              {f.text[0]} <br className="hidden sm:block" />
              {f.text[1]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
