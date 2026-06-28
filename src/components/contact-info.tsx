import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function ContactInfo() {
  return (
    <Dialog>
      <DialogTrigger className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground space-y-4">
          <p>For business inquiries, reach us at <strong>habitprosupport@gmail.com</strong>.</p>
          <p>Connect with us on our platforms:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://www.linkedin.com/company/habit-pro-u" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a></li>
            <li><a href="https://www.youtube.com/channel/UC75Ar8H9-3Q7CDY6_pNrDAA" target="_blank" rel="noopener noreferrer" className="hover:text-primary">YouTube</a></li>
            <li><a href="https://www.instagram.com/habit.pro?igsh=cG4xNmc5d3R5OGE4" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a></li>
            <li><a href="https://vt.tiktok.com/ZSCJtFANr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">TikTok</a></li>
            <li><a href="https://pin.it/3G8IdvcoU" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Pinterest</a></li>
            <li><a href="https://x.com/HABITPR0" target="_blank" rel="noopener noreferrer" className="hover:text-primary">X (Twitter)</a></li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}