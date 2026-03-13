"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart, Users } from "lucide-react";

/* ===== Highlight cards ===== */
const highlights = [
    {
        Icon: GraduationCap,
        title: "Project Kewirausahaan",
        desc: "Inisiatif tugas mata kuliah Kewirausahaan di Universitas Negeri Surabaya (UNESA) Kampus 5 Magetan.",
    },
    {
        Icon: Users,
        title: "Untuk Mahasiswa",
        desc: "Dibuat oleh mahasiswa, untuk mahasiswa dan warga sekitar kampus yang membutuhkan layanan praktis.",
    },
    {
        Icon: Heart,
        title: "Dukung UMKM Kampus",
        desc: "Menjadi wadah bagi produk jualan teman-teman sekampus agar lebih dikenal dan mudah diakses.",
    },
];

export default function AboutSection() {
    return (
        <section id="tentang" className="relative bg-gradient-to-b from-white to-brand-cream/50 dark:from-dark-bg dark:to-dark-surface/50 py-24 lg:py-32 overflow-hidden">
            {/* Decorative liquid blobs */}
            <div className="blob-animate-slow pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-orange/8 blur-3xl" />
            <div className="blob-animate pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-yellow/10 blur-3xl dark:bg-brand-yellow/5" />

            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="liquid-glass mb-4 inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                        Tentang Kami
                    </span>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-brand-navy dark:text-white sm:text-4xl lg:text-5xl">
                        Siapa <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">BudalIn</span>?
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-brand-navy-light/70 dark:text-white/50">
                        BudalIn adalah layanan <strong>&ldquo;apapun semua berangkat&rdquo;</strong>{" "}
                        jasa personal asisten, titip beli dan pengantaran yang lahir dari semangat kewirausahaan
                        mahasiswa UNESA Kampus 5, Magetan.
                    </p>
                </motion.div>

                {/* Highlight cards — liquid glass */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {highlights.map(({ Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="liquid-glass-card liquid-shimmer group relative overflow-hidden rounded-2xl p-8"
                        >
                            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-yellow/15 text-brand-orange transition-all group-hover:from-brand-orange group-hover:to-brand-yellow group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-orange/20 dark:from-brand-orange/20 dark:to-brand-yellow/20">
                                <Icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy dark:text-white">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-brand-navy-light/70 dark:text-white/50">
                                {desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
