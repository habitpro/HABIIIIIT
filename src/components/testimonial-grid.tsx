import { useState } from "react"
import { Star, StarHalf, ThumbsUp, CheckCircle2 } from "lucide-react"

type Review = {
  quote: string
  name: string
  role: string
  rating: number
  date: string
  helpful: number
}

const featured: Review[] = [
  {
    quote:
      "Better than any native app I've tried. I've tried every habit app on the App Store, but I always quit because of the clunky UI. This spreadsheet doesn't feel like a spreadsheet at all. It feels like an expensive productivity app, but it lives completely inside my private workspace. Absolute game changer for my workflow.",
    name: "Alex R.",
    role: "Digital Creator",
    rating: 5,
    date: "Mar 22, 2026",
    helpful: 142,
  },
]

const moreReviews: Review[] = [
  {
    quote:
      "Was skeptical about a spreadsheet that looks like an app but the charts are seriously well done. Knocked off one star only because I had to read the setup guide twice to customize my columns, but it works flawlessly now.",
    name: "Carlos Mendez",
    role: "Verified buyer",
    rating: 4.0,
    date: "Mar 18, 2026",
    helpful: 6,
  },
  {
    quote:
      "I've bought three different Notion and Sheets templates this year and this is the only one I still use. The weekly summary view keeps me accountable without any effort.",
    name: "Hannah Lee",
    role: "Verified buyer",
    rating: 5,
    date: "Mar 9, 2026",
    helpful: 17,
  },
  {
    quote:
      "Works great on mobile which was my main concern. Syncs instantly between my laptop and phone. Would recommend to anyone who already lives in Google Workspace.",
    name: "Tom Becker",
    role: "Verified buyer",
    rating: 4.8,
    date: "Feb 27, 2026",
    helpful: 11,
  },
  {
    quote:
      "Clean, fast, and no fluff. I customized the habit categories for my gym routine in a few minutes. Support answered my one question about formulas within a day.",
    name: "Aisha Rahman",
    role: "Verified buyer",
    rating: 5,
    date: "Feb 12, 2026",
    helpful: 14,
  },
]

const ratingBreakdown = [
  { stars: 5, pct: 84 },
  { stars: 4, pct: 12 },
  { stars: 3, pct: 3 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
]

function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <div className="flex flex-nowrap items-center gap-0.5 text-primary whitespace-nowrap shrink-0" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const starValue = i + 1

        if (starValue <= rating) {
          return <Star key={i} className={`${className} fill-current shrink-0`} />
        } else if (starValue - 0.75 <= rating) {
          return (
            <span key={i} className={`relative inline-block ${className} shrink-0`}>
              <Star className={`${className} absolute inset-0 fill-none text-muted-foreground/30 shrink-0`} />
              <StarHalf className={`${className} absolute inset-0 fill-current shrink-0`} />
            </span>
          )
        } else {
          return <Star key={i} className={`${className} fill-none text-muted-foreground/30 shrink-0`} />
        }
      })}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
  return (
    <div
      role="img"
      aria-label="Reviewer Avatar Picture"
      className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-primary/40 bg-primary/5 text-xs font-semibold text-primary"
    >
      {initials}
    </div>
  )
}

export function TestimonialGrid() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
      
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">User Feedback</span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          It turns out, a simple layout was exactly what was missing.
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          {featured.map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              {/* UPDATED: Grouped Rating and Stars on the left */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground">{t.rating.toFixed(1)}</span>
                <Stars rating={t.rating} />
              </div>
              <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground font-medium text-center md:text-base">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="flex items-center gap-1 text-sm font-semibold text-foreground">
                    {t.name}
                    <CheckCircle2 aria-label="Verified" className="h-3.5 w-3.5 text-primary" />
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid gap-8 border-b border-border p-6 sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-8">
          
          <div className="flex flex-col items-center justify-center text-center min-w-max shrink-0">
            <span className="font-heading text-5xl font-bold text-foreground tracking-tight">4.8</span>
            <div className="mt-2 flex justify-center w-full">
              <Stars rating={4.8} className="h-4 w-4" />
            </div>
            <span className="mt-2 text-xs text-muted-foreground whitespace-nowrap">642 verified reviews</span>
          </div>

          <div className="flex flex-col justify-center gap-2">
            {ratingBreakdown.map((row) => (
              <div key={row.stars} className="flex items-center gap-3">
                <span className="flex w-6 items-center gap-1 text-xs font-medium text-muted-foreground">
                  {row.stars}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${row.pct}%` }} />
                </div>
                <span className="w-8 text-right text-xs text-muted-foreground">{row.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center p-4">
          <button
            type="button"
            aria-expanded={showMore}
            onClick={() => setShowMore((v) => !v)}
            className="rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            {showMore ? "Hide reviews" : "View More Verified Reviews"}
          </button>
        </div>

        {showMore && (
          <div className="max-h-[26rem] overflow-y-auto border-t border-border">
            <ul className="divide-y divide-border">
              {moreReviews.map((r) => (
                <li key={r.name} className="flex gap-4 p-5 sm:p-6">
                  <Avatar name={r.name} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="flex items-center gap-1 text-sm font-semibold text-foreground">
                        {r.name}
                        <CheckCircle2 aria-label="Verified" className="h-3.5 w-3.5 text-primary" />
                      </p>
                      <span className="text-xs text-muted-foreground">{r.date}</span>
                    </div>
                    {/* UPDATED: Grouped Rating and Stars on the left */}
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground">{r.rating.toFixed(1)}</span>
                      <Stars rating={r.rating} className="h-3.5 w-3.5" />
                    </div>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground">{r.quote}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span>{r.helpful} people found this helpful</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}