"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Package, Bike, MapPin } from "lucide-react";

/* ===== WhatsApp CTA link ===== */
const WA_LINK =
    "https://wa.me/6285645645407?text=Halo%20WiriGoo%2C%20saya%20mau%20titip%20beli!";

/* ===== Floating icons configuration (right side) ===== */
const floatingIcons = [
    { Icon: Package, x: "75%", y: "18%", delay: 0 },
    { Icon: Bike, x: "90%", y: "40%", delay: 0.5 },
    { Icon: MapPin, x: "80%", y: "72%", delay: 1 },
];

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative flex items-center overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-cream dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg"
        >
            {/* ----- Decorative liquid blobs ----- */}
            <div className="blob-animate pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-yellow/25 blur-3xl dark:bg-brand-yellow/10" />
            <div className="blob-animate-slow pointer-events-none absolute -bottom-40 -right-32 h-[600px] w-[600px] rounded-full bg-brand-orange/20 blur-3xl dark:bg-brand-orange/10" />
            <div className="blob-animate pointer-events-none absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-brand-orange/10 blur-2xl dark:bg-brand-orange/5" />

            {/* ----- Glass orbs decoration ----- */}
            <div className="pointer-events-none absolute top-20 right-[15%] hidden h-40 w-40 rounded-full liquid-glass opacity-40 lg:block" />
            <div className="pointer-events-none absolute bottom-32 right-[25%] hidden h-24 w-24 rounded-full liquid-glass opacity-30 lg:block" />

            {/* ----- Floating animated icons ----- */}
            {floatingIcons.map(({ Icon, x, y, delay }, i) => (
                <motion.div
                    key={i}
                    className="pointer-events-none absolute hidden text-brand-orange/10 lg:block dark:text-brand-orange/8"
                    style={{ left: x, top: y }}
                    animate={{ y: [0, -18, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay,
                        ease: "easeInOut",
                    }}
                >
                    <Icon className="h-16 w-16" strokeWidth={1} />
                </motion.div>
            ))}

            {/* ===== TWO-COLUMN LAYOUT ===== */}
            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 pt-32 pb-12 lg:grid-cols-2 lg:px-8">
                {/* ----- LEFT: Text Content ----- */}
                <div>
                    {/* Badge — liquid glass pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="liquid-glass mb-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-brand-orange"
                    >
                        Personal Asisten - UNESA Kampus 5 Magetan
                    </motion.div>

                    {/* MASSIVE "WiriGoo" brand title */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mb-4"
                    >
                        <h1 className="text-[5rem] leading-none font-black tracking-tighter text-brand-navy dark:text-white sm:text-[8rem] md:text-[10rem] lg:text-[9rem] xl:text-[11rem]">
                            Budal
                            <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">
                                In
                            </span>
                        </h1>
                    </motion.div>

                    {/* Slogan */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="font-[var(--font-accent)] text-2x1 font-bold text-brand-navy-light/80 dark:text-white/60 sm:text-lg"
                    >
                        &ldquo;Nggak Perlu Keluar, Biar BudalIn yang Mengantar&rdquo;
                    </motion.p>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="mt-6 max-w-xl text-base leading-relaxed text-brand-navy-light/70 dark:text-white/50 sm:text-lg"
                    >
                        Layanan{" "}
                        <strong className="text-brand-navy dark:text-white">jasa personal asisten, titip beli &amp; pengantaran</strong>{" "}
                        untuk mahasiswa dan warga di sekitar{" "}
                        <strong className="text-brand-navy dark:text-white">UNESA Kampus 5 Magetan</strong>.
                        Apapun semua berangkat cukup pesan, kami yang jalan!
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="mt-8 flex flex-col gap-4 sm:flex-row"
                    >
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="liquid-shimmer group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-orange/30 transition-all hover:scale-105 hover:shadow-xl"
                        >
                            Titip Sekarang
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#katalog"
                            className="liquid-glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wide text-brand-navy transition-all hover:bg-white/30 dark:text-white dark:hover:bg-white/10"
                        >
                            Lihat Katalog
                        </a>
                    </motion.div>

                  
                </div>

                {/* ----- RIGHT: Mascot Image ----- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, x: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                    className="relative flex items-center justify-center"
                >
                    {/* Glow behind mascot */}
                    <div className="absolute inset-0 m-auto h-[70%] w-[70%] rounded-full bg-gradient-to-br from-brand-orange/20 to-brand-yellow/20 blur-3xl dark:from-brand-orange/15 dark:to-brand-yellow/10" />

                    {/* Mascot image */}
                    <Image
                        src="/maskot.png"
                        alt="Maskot WiriGoo"
                        width={600}
                        height={700}
                        priority
                        className="relative z-10 h-auto w-full max-w-[500px] drop-shadow-2xl lg:max-w-[550px]"
                    />
                </motion.div>
            </div>
        </section>
    );
}
