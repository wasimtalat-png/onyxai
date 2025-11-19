const logos = ['Pulse Studio', 'Atlas Legal', 'Nova Ops', 'SaaS Boutique'];

const caseStudies = [
  {
    title: 'Agencia creativa de 12 personas',
    result: 'Redujimos 18 horas semanales en seguimiento de clientes con workflows en Notion + Zapier.',
    metric: '+38% capacidad de proyectos'
  },
  {
    title: 'Consultora legal boutique',
    result: 'Digitalizamos intake y compliance en Airtable, liberando al equipo senior para trabajo estratégico.',
    metric: 'Time Recovery: 240h/Q'
  }
];

export function Trust() {
  return (
    <section id="casos" className="section-container text-white">
      <p className="text-sm uppercase tracking-[0.4em] text-onyx-accent">Confianza & Resultados</p>
      <h2 className="mt-4 text-3xl font-semibold">Elegidos por equipos que prefieren sistemas a headcount.</h2>
      <div className="mt-8 flex flex-wrap items-center gap-6 text-sm uppercase tracking-widest text-white/50">
        {logos.map((logo) => (
          <span key={logo} className="rounded-full border border-white/10 px-6 py-2">
            {logo}
          </span>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {caseStudies.map((item) => (
          <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
            <p className="text-xs uppercase tracking-[0.3em] text-onyx-accent">Case Study</p>
            <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-white/70">{item.result}</p>
            <p className="mt-4 text-base font-semibold text-white">{item.metric}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
