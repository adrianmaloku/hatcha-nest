export default function Sidebar() {
  return (
    <aside className="flex flex-col w-[260px] min-h-full bg-[#111111] border-r border-white/[0.06] shrink-0">
      {/* Logo */}
      <div className="px-5 py-6">
        <span className="text-2xl font-bold tracking-tight text-orange-500">Nest</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-1">
        <NavItem label="Brainstorm Space" active />
        <NavItem label="Main Brain" />
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
            <span className="text-orange-400 text-sm font-semibold">A</span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">Adrian</p>
            <p className="text-xs text-white/40 truncate">Personal workspace</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
        active
          ? "bg-orange-500/10 text-orange-400 font-medium"
          : "text-white/60 hover:bg-white/5 hover:text-white/90"
      }`}
    >
      {label}
    </button>
  );
}
