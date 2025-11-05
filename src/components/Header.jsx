import { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 to-rose-500 text-white font-bold">BF</span>
            <span className="font-semibold tracking-tight">BestFood</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition">
              <Search size={16} className="text-gray-500 group-hover:text-gray-700" />
              <span>Search</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-md transition">
              <ShoppingCart size={16} />
              <span>Order Now</span>
            </button>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700">
                <Search size={16} />
                <span>Search</span>
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-pink-500 to-rose-500 px-4 py-2 text-sm font-medium text-white shadow">
                <ShoppingCart size={16} />
                <span>Order</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
