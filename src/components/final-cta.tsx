export function FinalCta() {
  const shopUrl = "https://dodo.pe/habitproshop"

  return (
    <section id="pricing" className="bg-primary">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Stop managing habits in a spreadsheet. Start running them like a pro.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80">
          Open Google Sheets, copy the Blueprint, and gamify your discipline in minutes.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-card px-7 py-3.5 text-base font-semibold text-primary shadow-lg transition-opacity hover:opacity-90"
          >
            Get the Blueprint — $27
          </a>
          <span className="text-xs text-primary-foreground/80">
            Instant download • One-time payment • Dedicated customer support
          </span>
        </div>
      </div>
    </section>
  )
}