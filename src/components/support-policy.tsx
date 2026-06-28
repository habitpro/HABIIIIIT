import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function SupportPolicy() {
  return (
    <Dialog>
      <DialogTrigger className="text-sm text-muted-foreground transition-colors hover:text-foreground">Support</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Support</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground space-y-4">
          <p>Need help with your Habit Pro Blueprint or have questions about your order?</p>
          <p>Please reach out to our dedicated support team at <strong>habitprosupport@gmail.com</strong>.</p>
          <p>We aim to respond to all inquiries within 24-48 hours.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}