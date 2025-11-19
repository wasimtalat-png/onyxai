export function MissionTarget() {
  return (
    <section id="mision" className="section-container text-white">
      <p className="text-sm uppercase tracking-[0.4em] text-onyx-accent">Nuestra Misión & Target</p>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8">
          <h3 className="text-2xl font-semibold">Misión</h3>
          <p className="mt-4 text-base text-white/70">
            Creemos que cada solopreneur y SME puede operar como una empresa enterprise si cuenta con sistemas inteligentes.
            Nuestra misión es eliminar la fatiga operativa con automatizaciones visibles, medibles y que cualquier team member
            pueda escalar.
          </p>
        </div>
        <div className="rounded-3xl border border-white/5 bg-onyx-800/80 p-8">
          <h3 className="text-2xl font-semibold">Target</h3>
          <p className="mt-4 text-base text-white/70">
            Servimos a founder-led teams, agencias boutique y negocios de servicios que necesitan onboarding express, gestión
            de clientes y reporting impecable sin contratar más personal. Creamos sistemas escalables que hablan el idioma del
            ROI, Time Recovery y revenue predecible.
          </p>
        </div>
      </div>
    </section>
  );
}
