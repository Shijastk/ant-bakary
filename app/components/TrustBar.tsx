import { CreditCard, Headset, PackageCheck, RefreshCw } from "lucide-react";

const items = [
  { icon: CreditCard, title: "Secure Payment", text: "100% secure & trusted" },
  { icon: PackageCheck, title: "Hygienic Packaging", text: "Packed with care" },
  { icon: Headset, title: "Customer Support", text: "We're here to help" },
  { icon: RefreshCw, title: "Easy Returns", text: "Hassle-free returns" },
];

export default function TrustBar() {
  return (
    <section className="mt-16 bg-primary lg:mt-20">
      <div className="container-x grid grid-cols-2 gap-y-6 py-7 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            className={`flex items-center gap-4 px-2 sm:px-6 ${i > 0 ? "lg:border-l lg:border-white/25" : ""} ${
              i % 2 === 1 ? "border-l border-white/25" : ""
            }`}
          >
            <Icon className="size-9 shrink-0 text-white/90" strokeWidth={1.4} />
            <div>
              <h3 className="text-[15px] font-semibold text-white">{title}</h3>
              <p className="mt-0.5 text-[13px] text-white/75">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
