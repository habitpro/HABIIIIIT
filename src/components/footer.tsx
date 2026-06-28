import { SupportPolicy } from "@/components/support-policy"
import { ContactInfo } from "@/components/contact-info"
import { TermsConditions } from "@/components/terms-conditions"

const links = [
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <a href="#top" className="flex items-center gap-2 font-heading text-base font-bold tracking-tight">
          <div className="text-primary flex items-center justify-center h-8 w-8 shrink-0">
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 18L9.5 8L14 14L12.5 18H2Z" fill="currentColor" />
              <path d="M8.5 18L15 7L22 18H8.5Z" fill="currentColor" className="opacity-85" />
              <path d="M10.5 10.5L13.5 13.5L19.5 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          Habit Pro
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <SupportPolicy />
          <ContactInfo />
          <TermsConditions />
          <a 
            href="/privacy-policy" 
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </a>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Habit Pro Blueprint. All rights reserved.
        </p>
      </div>
    </footer>
  )
}