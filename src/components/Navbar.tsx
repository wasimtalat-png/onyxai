const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#identidad', label: 'Identidad' },
  { href: '#pvu', label: 'PVU' },
  { href: '#mision', label: 'Misión & Target' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#casos', label: 'Casos' }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-onyx-900/85 py-4 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="text-lg font-semibold tracking-[0.3em] text-white">ONYX</div>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-onyx-accent">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden rounded-full border border-onyx-accent px-5 py-2 text-xs font-semibold uppercase tracking-wide text-onyx-accent transition hover:bg-onyx-accent/10 md:inline-flex"
        >
          Agenda ahora
        </a>
        <button className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs text-white md:hidden">
          Menu
        </button>
      </div>
    </header>
  );
}
