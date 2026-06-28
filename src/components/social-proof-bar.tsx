const tickerText =
  "1,200+ ROUTINES OPTIMIZED  •  4.9★ ELITE FEEDBACK RATING  •  AUTOMATIC STREAK CALCULATION  •  2-SECOND DRIVE COPY  •  INSTANT DOWNLOAD ACCESS  •  ";

export function SocialProofBar() {
  return (
    <section className="border-y border-border bg-secondary/50 overflow-hidden">
      <div
        className="mx-auto flex max-w-6xl items-center py-4"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <div
          className="flex shrink-0 items-center gap-8 whitespace-nowrap"
          style={{
            animation: "marquee-scroll 25s linear infinite",
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {tickerText}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {tickerText}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {tickerText}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {tickerText}
          </span>
        </div>
      </div>
    </section>
  );
}
