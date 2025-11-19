interface PillarCardProps {
  title: string;
  description: string;
}

export function PillarCard({ title, description }: PillarCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-white shadow-lg shadow-black/30 transition hover:border-onyx-accent">
      <h4 className="text-base font-semibold text-onyx-accent">{title}</h4>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </article>
  );
}
