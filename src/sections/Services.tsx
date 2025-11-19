import { ServiceCard } from '../components/ServiceCard';
import { ReactNode } from 'react';

const services: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: 'Process Automation',
    description:
      'Automatizamos intake, CRM, billing y cumplimiento con Zapier y Make para que cada paso corra sin intervención manual.',
    icon: '⚡️'
  },
  {
    title: 'Systems Design',
    description:
      'Diseñamos arquitecturas en Airtable y Notion con permisos, dashboards y documentación viva para tu equipo.',
    icon: '🧩'
  },
  {
    title: 'No-code Stack Ops',
    description:
      'Orquestamos tu stack low-code para asegurar datos limpios, alertas oportunas y reporting listo para clientes.',
    icon: '🛰️'
  }
];

export function Services() {
  return (
    <section id="servicios" className="section-container text-white">
      <p className="text-sm uppercase tracking-[0.4em] text-onyx-accent">Servicios & Playbooks</p>
      <h2 className="mt-4 text-3xl font-semibold">Sprints cortos, impacto alto.</h2>
      <p className="mt-4 text-white/70">
        Cada engagement de ONYX se ejecuta en ciclos de 3-4 semanas con entregables claros: automatizaciones listas, dashboards
        operando y equipo capacitado. Plug-and-play para tus operaciones.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>
    </section>
  );
}
