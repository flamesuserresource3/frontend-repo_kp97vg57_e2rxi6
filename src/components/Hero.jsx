import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-pink-700 text-xs"
            >
              <Star size={14} className="text-pink-500" />
              Editors' Pick • Bubble Tea Specials
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Best Food, Better Mood
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-base sm:text-lg text-gray-600"
            >
              Discover playful, colorful flavors crafted with love. Fresh bites, iconic drinks, and joyful vibes — delivered fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 px-6 py-3 text-white font-medium shadow hover:shadow-lg transition"
              >
                Explore Menu
                <ChevronRight size={18} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-gray-700 hover:bg-gray-50 transition"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full">
            <Spline
              scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 -z-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-40 bg-gradient-to-t from-pink-100/60 to-transparent rounded-t-[2rem]" />
        </div>
      </div>
    </section>
  );
}
