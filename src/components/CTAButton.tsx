import { ReactNode } from 'react';

type CTAButtonProps = {
  href: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
};

const styles = {
  primary:
    'bg-gradient-to-r from-onyx-accent to-onyx-highlight text-slate-900 shadow-glow hover:opacity-90',
  secondary: 'border border-white/30 text-white hover:border-onyx-accent'
};

export function CTAButton({ href, variant = 'primary', children }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
