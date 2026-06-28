import { Activity, Palette, Smartphone, Wand2, Infinity as InfinityIcon, RefreshCw } from "lucide-react"

const blocks = [
  {
    title: "The 30-Day Execution Matrix & Progression Waves",
    body: "Track your daily habits across a clean, fully integrated monthly grid. As you check off your routines, the system dynamically plots your consistency data onto a fluid progression wave graph, mapping your execution velocity in real time.",
    placeholder: "1.png",
  },
  {
    title: "Weekly Analytics & Dedicated Day Cards",
    body: "Isolate your weekly performance with dedicated analytics columns. Compare execution variables across Week 1 through Week 5 with crisp bar graphs, keeping your focus completely localized on the current macro cycle.",
    placeholder: "2.png",
  },
  {
    title: "Automated Performance Grades & Targets",
    body: "Let the dashboard process your execution math automatically. Get an instant snapshot of your performance trends and an official Monthly Grade percentage block, highlighting exactly where your daily discipline stands.",
    placeholder: "3.png",
  },
  {
    title: "Protocols & Troubleshooting",
    body: "Master your time with proven frameworks. Learn how to anchor new habits, use the 2-Day Rule to maintain consistency, and resolve friction points before they derail your progress.",
    placeholder: "cource.jpg",
  },
]

const gridFeatures = [
  { icon: Activity, title: "Automated performance metrics", body: "Your execution math and progress percentages run themselves cleanly in the background." },
  { icon: Palette, title: "Color-coded visual progress", body: "Instantly read your wins and gaps at a glance." },
  { icon: Smartphone, title: "Seamless mobile layout", body: "Optimized to feel like a native app on your phone." },
  { icon: Wand2, title: "Zero complex formula setup", body: "Copy it once and start tracking immediately." },
  { icon: InfinityIcon, title: "Lifetime ownership access", body: "Buy once, keep it forever in your workspace." },
  { icon: RefreshCw, title: "All future updates free", body: "Every new version lands in your hands at no cost." },
]

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label="Feature preview"
      className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-border bg-muted/40 shadow-xl shadow-primary/5"
    >
      <img 
        src={`/${label}`} 
        alt="Feature preview" 
        className="h-full w-full object-cover" 
      />
    </div>
  )
}

export function FeatureShowcase() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      {/* Header section animates into view smoothly */}
      <div className="mx-auto mb-16 max-w-2xl text-center" data-aos="fade-up">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">Inside the blueprint</span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Every tab engineered to make discipline feel effortless
        </h2>
      </div>

      <div className="flex flex-col gap-20 lg:gap-28">
        {blocks.map((block, i) => {
          const reversed = i % 2 === 1
          return (
            <div key={block.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              {/* Images scale up elegantly using zoom-in-up */}
              <div className={reversed ? "lg:order-2" : ""} data-aos="zoom-in-up">
                <ImagePlaceholder label={block.placeholder} />
              </div>
              {/* Text fades up cleanly */}
              <div className={reversed ? "lg:order-1" : ""} data-aos="fade-up">
                <span className="text-sm font-semibold text-primary">{`0${i + 1}`}</span>
                <h3 className="mt-2 text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                  {block.body}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Grid items animate with minor delays for a beautiful cascading scale reveal */}
      <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gridFeatures.map((feature, idx) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 70}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <feature.icon className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-heading text-base font-semibold text-foreground">{feature.title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}