import { CTAButton } from '../components/CTAButton';

const metrics = [
  { label: 'Horas liberadas / mes', value: '+320' },
  { label: 'Procesos automatizados', value: '45' },
  { label: 'Stack no-code', value: 'Zapier · Notion · Airtable · Make' }
];

export function Hero() {
  return (
    <section id="hero" className="section-container flex flex-col gap-12 pt-32 text-white md:flex-row md:items-center">
      <div className="flex-1 space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-onyx-accent">Boutique Automation Lab</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Recuperamos el tiempo de tu equipo (o el tuyo) y lo convertimos en ROI compuesto.
        </h1>
        <p className="text-base text-white/70">
          ONYX convierte operaciones manuales en sistemas predecibles usando herramientas no-code/low-code (Zapier, Airtable,
          Notion, Make). Escala sin sumar headcount, mantén control total y mide cada punto de Time Recovery.
        </p>
        <div className="flex flex-wrap gap-4">
          <CTAButton href="#contacto">Agenda una consulta</CTAButton>
          <CTAButton href="#casos" variant="secondary">
            Ver casos de uso
          </CTAButton>
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/50">
          <p className="text-sm text-white/60">Metodología</p>
          <h2 className="text-2xl font-semibold text-white">Playbooks de eficiencia diseñados a medida</h2>
          <p className="mt-3 text-sm text-white/70">
            Cada sprint de ONYX identifica cuellos de botella, los rediseña con flujos automatizados y entrega dashboards que
            muestran Time Recovery y margen recuperado.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-onyx-800/70 p-4">
              <div className="text-2xl font-bold text-onyx-accent">{metric.value}</div>
              <p className="text-xs uppercase tracking-wide text-white/60">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
