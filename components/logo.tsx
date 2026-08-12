import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-display text-lg font-semibold tracking-tight text-foreground',
        className,
      )}
    >
      ruokaval
      <span className="text-primary">.io</span>
    </span>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'flex size-8 items-center justify-center rounded-md bg-primary font-display text-sm font-semibold text-primary-foreground',
        className,
      )}
      aria-hidden="true"
    >
      r
    </span>
  )
}
