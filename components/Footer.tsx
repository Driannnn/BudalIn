"use client";

import { motion } from "framer-motion";
import { Truck, Instagram, MessageCircle, MapPin } from "lucide-react";

/* ===== Social links ===== */
const WA_LINK =
    "https://wa.me/6281234567890?text=Halo%20BudalIn!";
const IG_LINK = "https://instagram.com/budalin.official";

export default function Footer() {
    return (
        <footer className="relative bg-brand-navy dark:bg-dark-bg text-white overflow-hidden">
            {/* Top gradient border */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange" />

            {/* Decorative blobs */}
            <div className="blob-animate pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand-orange/8 blur-3xl" />
            <div className="blob-animate-slow pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-yellow/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Col 1 — Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="#home" className="inline-flex items-center gap-2 group">
                            <div className="liquid-shimmer flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow transition-transform group-hover:scale-110">
                                <Truck className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-extrabold tracking-tight">
                                Budal<span className="text-brand-orange">In</span>
                            </span>
                        </a>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
                            Layanan jasa titip beli &amp; pengantaran untuk mahasiswa UNESA
                            Kampus 5 Magetan. Apapun semua berangkat!
                        </p>
                    </motion.div>

                    {/* Col 2 — Area Cakupan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-yellow">
                            Area Cakupan
                        </h4>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-brand-orange" />
                                UNESA Kampus 5 Magetan
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-brand-orange" />
                                Sekitar Kota Magetan
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-brand-orange" />
                                Kos &amp; Kontrakan Mahasiswa
                            </li>
                        </ul>
                    </motion.div>

                    {/* Col 3 — Kontak */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-yellow">
                            Hubungi Kami
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white/50 transition-colors hover:text-brand-orange"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a
                                    href={IG_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white/50 transition-colors hover:text-brand-orange"
                                >
                                    <Instagram className="h-4 w-4" />
                                    @budalin.official
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom bar — glass divider */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
                    <p className="text-xs text-white/30">
                        &copy; {new Date().getFullYear()} BudalIn — Project Kewirausahaan
                        UNESA Kampus 5 Magetan
                    </p>
                    <p className="text-xs text-white/30">
                        Made with ❤️ by Mahasiswa UNESA
                    </p>
                </div>
            </div>
        </footer>
    );
}
