import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Do I need any spreadsheet experience to use this?",
    a: "No complex technical knowledge needed. It works right out of the box when you copy it.",
  },
  {
    q: "Will this work on my phone?",
    a: "Yes, Google Sheets syncs beautifully on mobile, giving you a custom app interface on the go.",
  },
  {
    q: "Is this a subscription or one-time payment?",
    a: "This is a 100% one-time payment for permanent, lifetime ownership.",
  },
  {
    q: "What is your refund policy?",
    a: "Because the Blueprint is a digital product delivered instantly, all sales are final. That said, we stand fully behind it — our dedicated support team is here to help you get set up and make the most of every feature.",
  },
  {
    q: "How do I get the template after purchase?",
    a: "You will receive an immediate instant download link via email containing your private copy link.",
  },
  {
    q: "Can I customize the colors and categories?",
    a: "Completely. All data structures, colors, and habit tracking points remain entirely modular for your customization.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Questions, answered
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div key={faq.q} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-heading text-base font-semibold text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
