"use client";

import { motion } from "framer-motion";
import { ClipboardList, MessageCircle, PackageCheck } from "lucide-react";

/* ===== Steps data ===== */
const steps = [
    {
        Icon: ClipboardList,
        step: "1",
        title: "Pilih Barang",
        desc: "Pilih produk atau jasa yang kamu butuhkan dari katalog WiriGoo.",
    },
    {
        Icon: MessageCircle,
        step: "2",
        title: "Hubungi WiriGoo",
        desc: "Kirim pesanan via WhatsApp — konfirmasi detail dan ongkir.",
    },
    {
        Icon: PackageCheck,
        step: "3",
        title: "Barang Diantar",
        desc: "Duduk manis, tim WiriGoo yang berangkat dan antar ke tempatmu!",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="cara-kerja" className="relative bg-gradient-to-b from-white to-brand-cream/30 dark:from-dark-bg dark:to-dark-surface/30 py-24 lg:py-32 overflow-hidden">
            {/* Decorative blobs */}
            <div className="blob-animate pointer-events-none absolute top-10 left-[10%] h-64 w-64 rounded-full bg-brand-yellow/8 blur-3xl" />
            <div className="blob-animate-slow pointer-events-none absolute bottom-10 right-[10%] h-72 w-72 rounded-full bg-brand-orange/8 blur-3xl" />

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
                        Cara Kerja
                    </span>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-brand-navy dark:text-white sm:text-4xl lg:text-5xl">
                        Semudah{" "}
                        <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">1-2-3</span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-brand-navy-light/70 dark:text-white/50">
                        Tiga langkah simpel dan pesananmu langsung diproses.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative mt-16 grid gap-8 md:grid-cols-3">
                    {/* Connecting line — glass style (desktop only) */}
                    <div className="pointer-events-none absolute top-20 left-[16.66%] right-[16.66%] hidden h-0.5 md:block">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-brand-orange/40 via-brand-yellow/60 to-brand-orange/40" />
                        <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-brand-orange/20 via-brand-yellow/30 to-brand-orange/20 blur-sm" />
                    </div>

                    {steps.map(({ Icon, step, title, desc }, i) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="group relative flex flex-col items-center text-center"
                        >
                            {/* Step circle — liquid glass + gradient */}
                            <div className="liquid-shimmer relative z-10 mb-6 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-yellow shadow-xl shadow-brand-orange/20 transition-transform group-hover:scale-105">
                                {/* Glass inner ring */}
                                <div className="absolute inset-2 rounded-full border border-white/30" />
                                <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                                <span className="mt-1 text-xs font-black uppercase tracking-widest text-white/80">
                                    Step {step}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold uppercase tracking-wide text-brand-navy dark:text-white">{title}</h3>
                            <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-navy-light/70 dark:text-white/50">
                                {desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
