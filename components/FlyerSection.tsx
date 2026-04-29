"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FlyerSection() {
    return (
        <section
            id="flyer"
            className="relative bg-gradient-to-b from-brand-cream/50 to-white dark:from-dark-surface/50 dark:to-dark-bg py-24 lg:py-32 overflow-hidden"
        >
            {/* Decorative blobs */}
            <div className="blob-animate pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl dark:bg-brand-orange/5" />
            <div className="blob-animate-slow pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-brand-yellow/10 blur-3xl dark:bg-brand-yellow/5" />

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
                        Promo
                    </span>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-brand-navy dark:text-white sm:text-4xl lg:text-5xl">
                        Flyer{" "}
                        <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">
                            Kami
                        </span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-brand-navy-light/70 dark:text-white/50">
                        Cek info terbaru, promo, dan layanan kami melalui flyer resmi WiriGoo.
                    </p>
                </motion.div>

                {/* Flyer card */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mx-auto mt-14 max-w-3xl"
                >
                    <div className="liquid-glass-card liquid-shimmer group relative overflow-hidden rounded-3xl p-3 sm:p-4">
                        {/* Inner glow on hover */}
                        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-orange/0 to-brand-yellow/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

                        {/* Flyer image */}
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src="/flyer.png"
                                alt="Flyer WiriGoo — Promo dan Layanan"
                                width={900}
                                height={1200}
                                className="h-auto w-full rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />

                            {/* Gradient overlay at bottom */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl" />

                            {/* Badge on image */}
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                                    📢 Terbaru
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Caption below */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 text-center text-sm text-brand-muted dark:text-white/40"
                    >
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
