import { Star, StarHalf } from "lucide-react"

export function Hero() {
  const shopUrl = "https://dodo.pe/habitproshop"

  return (
    <section id="top" className="relative overflow-hidden bg-white pb-20 pt-20 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-36">
      {/* Premium Vector Tech-Grid Overlay Layer */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      {/* Cinematic Ambient Glow Accent Elements */}
      <div className="absolute right-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[128px] animate-pulse [animation-duration:8s]" />
      <div className="absolute left-1/3 top-12 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[96px] animate-pulse [animation-duration:6s]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        
        {/* Left Column: Core Value Message */}
        <div className="flex flex-col items-start">
          
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary transition-all animate-in fade-in duration-700">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Built for Google Sheets — no app required
          </span>

          <h1 className="text-balance font-heading text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem] animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out fill-mode-forwards">
            Master your daily execution.{" "}
            <span className="bg-gradient-to-r from-primary via-indigo-600 to-primary bg-clip-text text-transparent">
              Track real progress.
            </span>{" "}
            Build lasting discipline.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base font-medium leading-relaxed text-slate-500 sm:text-lg animate-in fade-in slide-in-from-bottom-4 delay-200 duration-1000 fill-mode-both">
            The ultimate Google Sheets framework engineered to turn raw data into a visual, high-performance execution dashboard. Looks like a custom standalone app—not a spreadsheet.
          </p>

          <p className="mt-4 max-w-xl text-pretty text-sm font-medium leading-relaxed text-slate-400 animate-in fade-in slide-in-from-bottom-4 delay-300 duration-1000 fill-mode-both">
            Zero apps to download. Zero monthly subscriptions. Open Google Sheets, select your custom protocol, and instantly gamify your routine.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center animate-in fade-in slide-in-from-bottom-4 delay-500 duration-1000 fill-mode-both">
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-xl bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/25 active:translate-y-0"
            >
              Get the Blueprint — $27
            </a>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">One-time payment</span>
              <span className="text-[11px] font-medium text-slate-400 mt-0.5">Instant download. Works perfectly in Google Sheets.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Mockup Showcase Block */}
        <div className="relative animate-in fade-in zoom-in-95 delay-300 duration-1000 ease-out fill-mode-both">
          <div aria-hidden="true" className="absolute inset-0 -z-10 mx-auto h-full w-[95%] rounded-[3rem] bg-primary/10 blur-3xl animate-pulse [animation-duration:4s]" />

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 p-4 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.07)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_32px_64px_rgba(0,0,0,0.1)]">
            <img
              src="/dashboard.jpg" 
              alt="Habit Pro dashboard showing daily habit tracking, progress analytics, and completion charts in Google Sheets"
              className="h-full w-full rounded-xl object-cover object-top shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            />
          </div>

          {/* Overlaid Floating Review Card */}
          <div className="absolute -bottom-6 -left-3 flex max-w-[18rem] items-start gap-3 rounded-xl border border-indigo-400/20 bg-white/90 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] sm:-left-6 animate-in fade-in slide-in-from-y-8 delay-700 duration-1000 ease-out fill-mode-both">
            
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-indigo-400 bg-indigo-50 font-heading text-xs font-bold text-indigo-600">
              MV
            </div>
            
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-primary">
                <span className="text-xs font-black text-slate-900">4.5</span>
                <div className="flex flex-nowrap items-center gap-0.5 whitespace-nowrap shrink-0">
                  <Star className="h-3 w-3 fill-current shrink-0" />
                  <Star className="h-3 w-3 fill-current shrink-0" />
                  <Star className="h-3 w-3 fill-current shrink-0" />
                  <Star className="h-3 w-3 fill-current shrink-0" />
                  <span className="relative inline-block h-3 w-3 shrink-0">
                    <Star className="absolute inset-0 h-3 w-3 fill-none text-primary/20 shrink-0" />
                    <StarHalf className="absolute inset-0 h-3 w-3 fill-current shrink-0" />
                  </span>
                </div>
              </div>
              
              <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">
                Honestly, I just wanted something clean to track my daily habits without paying an app subscription every month. It took 2 seconds to copy to my Drive and it just works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}