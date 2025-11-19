import { PillarCard } from '../components/PillarCard';

const pillars = [
  {
    title: 'Time Recovery (T.R.)',
    description:
      'Liberamos horas críticas automatizando intake, seguimiento y reporting. Ese tiempo vuelve directo al crecimiento y a las decisiones estratégicas.'
  },
  {
    title: 'Scalable Process',
    description:
      'Documentamos cada flujo en Notion y Airtable para que se replique sin fricción. Cada iteración suma playbooks listos para crecer sin nuevos hires.'
  },
  {
    title: 'Efficiency Gap Elimination',
    description:
      'Detectamos fugas de información, duplicidad de tareas y gaps de accountability, cerrándolos con dashboards y alerts accionables.'
  }
];

export function ValueProposition() {
  return (
    <section id="pvu" className="section-container text-white">
      <p className="text-sm uppercase tracking-[0.4em] text-onyx-accent">La Propuesta de Valor Única (PVU)</p>
      <div className="mt-4 flex flex-col gap-8 lg:flex-row">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-semibold">Recuperamos tiempo medible y lo convertimos en revenue repetible.</h2>
          <p className="text-lg text-white/70">
            Diseñamos sistemas que conectan tus herramientas favoritas y automatizan el 80% del trabajo manual. Con ONYX tu
            equipo se enfoca en decisiones estratégicas mientras las operaciones siguen corriendo solas.
          </p>
        </div>
        <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <p className="text-white">
            <strong>PVU:</strong> ONYX es el partner que combina consultoría estratégica con ejecución no-code para entregar ROI en
            semanas, no en meses. Implementamos, iteramos y dejamos todo documentado para tu team.
          </p>
          <p className="mt-4">Capacitación express incluida, KPIs visibles desde el día uno y soporte async para ajustes.</p>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        <h3 className="text-xl font-semibold text-white/80">Los 3 Pilares del ROI de ONYX</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} title={pillar.title} description={pillar.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
