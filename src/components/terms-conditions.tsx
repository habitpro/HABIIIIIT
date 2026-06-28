import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function TermsConditions() {
  return (
    <Dialog>
      <DialogTrigger className="text-sm text-muted-foreground transition-colors hover:text-foreground">Terms</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground space-y-4">
          <p><strong>1. License:</strong> Upon purchase, you are granted a single-user license for personal use of the Habit Pro Blueprint. You may not resell, redistribute, or share the template with others.</p>
          <p><strong>2. Digital Products:</strong> Due to the nature of digital products, all sales are final. We do not offer refunds once the access link has been sent.</p>
          <p><strong>3. Disclaimer:</strong> The Habit Pro Blueprint is provided "as-is" for educational and personal organization purposes. We are not liable for any outcomes resulting from the use of this tool.</p>
          <p><strong>4. Intellectual Property:</strong> All content, design, and branding associated with Habit Pro remain the sole property of the creator.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}