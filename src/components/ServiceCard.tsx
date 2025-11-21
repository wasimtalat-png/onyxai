import { ReactNode } from 'react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="gradient-border rounded-2xl bg-onyx-800/80 p-6 backdrop-blur-sm card-hover">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-onyx-accent">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </div>
  );
}
