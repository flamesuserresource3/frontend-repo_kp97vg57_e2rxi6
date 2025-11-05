import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const items = [
  {
    title: 'Strawberry Boba Tea',
    tag: 'Sweet • Best Seller',
    color: 'from-rose-400 to-pink-500',
    emoji: '🧋',
  },
  {
    title: 'Matcha Bubble Tea',
    tag: 'Creamy • Popular',
    color: 'from-emerald-400 to-green-500',
    emoji: '🍵',
  },
  {
    title: 'Taro Milk Tea',
    tag: 'Velvety • New',
    color: 'from-violet-400 to-purple-500',
    emoji: '🍠',
  },
  {
    title: 'Sushi Bento',
    tag: 'Fresh • Light',
    color: 'from-cyan-400 to-sky-500',
    emoji: '🍱',
  },
  {
    title: 'Spicy Ramen',
    tag: 'Warm • Cozy',
    color: 'from-orange-400 to-amber-500',
    emoji: '🍜',
  },
  {
    title: 'Katsu Sando',
    tag: 'Crispy • Crunchy',
    color: 'from-yellow-400 to-lime-500',
    emoji: '🥪',
  },
];

export default function FeaturedDishes() {
  return (
    <section id="menu" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured Favorites</h2>
            <p className="mt-2 text-gray-600">Hand-picked items our community is loving right now.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium">
            View all
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-tr ${item.color} opacity-20 blur-2xl`} />

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{item.emoji}</span>
                  <button aria-label="favorite" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-rose-600 hover:border-rose-200 transition">
                    <Heart size={18} />
                  </button>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.tag}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600 border border-gray-100">In stock</div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black transition">
                    Add to cart
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
