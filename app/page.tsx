'use client';

import { useEffect, useState } from 'react';

interface CommunityCard {
  id: string;
  name: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  features: string[];
}

const communities: CommunityCard[] = [
  {
    id: 'astraloka',
    name: 'Astraloka',
    title: 'Komunitas Peduli Alam',
    description: 'Bersama menjaga kelestarian alam dan mengelola sampah secara berkelanjutan untuk masa depan yang lebih hijau.',
    color: 'from-green-400 to-emerald-600',
    icon: '🌍',
    features: ['Edukasi Program Daur Ulang', 'Aksi Sosial', 'Edukasi Sampah'],
  },
  {
    id: 'baricode',
    name: 'Baricode',
    title: 'Komunitas Belajar IT',
    description: 'Belajar teknologi secara mandiri dan kolaboratif, membangun proyek nyata, saling berbagi pengetahuan dan pengalaman.',
    color: 'from-blue-400 to-indigo-600',
    icon: '💻',
    features: ['Pembelajaran Mandiri', 'Proyek Kolaboratif', 'Workshop Teknis', 'Networking Developer'],
  },
  {
    id: 'self-reminder',
    name: 'Self Reminder',
    title: 'Pengingat Diri Menuju Akhirat',
    description: 'Aplikasi pengingat spiritual yang membantu Anda tetap terhubung dengan nilai-nilai rohani dan self-improvement setiap hari.',
    color: 'from-purple-400 to-pink-600',
    icon: '📿',
    features: ['Reminder Spiritual', 'Self-Reflection', 'Daily Insights', 'Progress Tracking'],
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Barizaloka
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#communities" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition">Komunitas</a>
              <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition">Tentang</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Platform Komunitas Solusi
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Menghubungkan Komunitas,
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Membangun Solusi
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Barizaloka adalah ekosistem teknologi yang inovatif, menaungi komunitas-komunitas yang peduli dengan dampak positif untuk lingkungan, teknologi, dan spiritual.
          </p>
        </div>
      </section>

      {/* Communities Section */}
      <section id="communities" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Tiga Pilar Barizaloka
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Kami membangun komunitas yang kuat dalam tiga fokus utama: lingkungan, teknologi, dan spiritualitas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communities.map((community) => (
              <div
                key={community.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className={`bg-gradient-to-br ${community.color} p-8 rounded-2xl h-full relative z-10 text-white`}>
                  <div className="text-5xl mb-4">{community.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{community.name}</h3>
                  <p className="text-sm opacity-90 mb-4 font-semibold">{community.title}</p>
                  <p className="mb-6 leading-relaxed">{community.description}</p>
                  <div className="space-y-2 mb-8">
                    {community.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-white rounded-full opacity-70" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-white text-slate-900 font-semibold py-2 rounded-lg hover:bg-opacity-90 transition">
                    Selengkapnya →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Mengapa Memilih Barizaloka?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { title: 'Kolaboratif', desc: 'Komunitas yang saling mendukung dan terbuka untuk semua' },
                { title: 'Inovatif', desc: 'Solusi teknologi terdepan untuk masalah nyata' },
                { title: 'Berdampak', desc: 'Fokus pada perubahan positif dan keberlanjutan' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-900">
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Barizaloka lahir dari visi untuk menciptakan ekosistem di mana teknologi, kepedulian lingkungan, dan nilai-nilai spiritual bertemu dalam harmoni.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Kami percaya bahwa perubahan nyata dimulai dari kolaborasi lokal yang kuat dan tujuan bersama yang jelas.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Setiap komunitas dalam Barizaloka memiliki peran penting dalam menciptakan dampak positif yang berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2026 Barizaloka. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
