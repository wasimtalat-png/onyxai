export function Footer() {
  return (
    <footer id="contacto" className="section-container border-t border-white/5 pt-12 text-white/70">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-onyx-accent">ONYX</p>
          <p className="mt-2 max-w-md text-sm text-white/60">
            Boutique consulting agency especializada en automatización, eficiencia y diseño de infraestructura no-code.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href="mailto:hola@onyxsystems.studio" className="transition hover:text-onyx-accent">
            hola@onyxsystems.studio
          </a>
          <a href="https://www.linkedin.com" className="transition hover:text-onyx-accent">
            LinkedIn
          </a>
          <a href="https://twitter.com" className="transition hover:text-onyx-accent">
            Twitter
          </a>
        </div>
      </div>
      <p className="mt-10 text-xs text-white/40">© {new Date().getFullYear()} ONYX Automation Consulting. All rights reserved.</p>
    </footer>
  );
}
