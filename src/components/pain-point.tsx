import { Check, X } from "lucide-react"

const without = [
  "Messy manual spreadsheets you have to rebuild every month",
  "Forgotten app notifications that get swiped away and ignored",
  "Cluttered inputs that make daily logging a chore",
  "Breakable habit streaks with no safety net or history",
]

const withPro = [
  "Automatic calculation engines that do the math for you",
  "A sharp, minimal interface aesthetic that feels premium",
  "Instant workspace loading — no installs, no waiting",
  "Friction-free habit logging that takes seconds a day",
]

export function PainPoint() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The difference is in the details
        </h2>
      </div>

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-0">
        <div className="rounded-2xl border border-border bg-muted/40 p-7 md:rounded-r-none md:border-r-0">
          <h3 className="font-heading text-lg font-semibold text-muted-foreground">Without Habit Pro</h3>
          <ul className="mt-5 flex flex-col gap-4">
            {without.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted-foreground/15 text-muted-foreground">
                  <X className="h-3 w-3" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-primary shadow-md md:flex"
        >
          VS
        </div>

        <div className="rounded-2xl border-2 border-primary bg-card p-7 shadow-lg shadow-primary/10 md:rounded-l-none">
          <h3 className="font-heading text-lg font-semibold text-primary">With Habit Pro Blueprint</h3>
          <ul className="mt-5 flex flex-col gap-4">
            {withPro.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm font-medium leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
