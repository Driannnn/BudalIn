"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

/* ===== Product Data ===== */
interface Product {
    name: string;
    price: string;
    emoji: string;
    image?: string;
    desc: string;
    waText: string;
}

const products: Product[] = [
    {
        name: "Seblak Mang Ujang",
        price: "Rp 12.000",
        emoji: "🌶️",
        desc: "Seblak pedas level dewa, favorit anak kampus!",
        waText: "Halo BudalIn, saya mau titip beli Seblak Mang Ujang",
    },
    {
        name: "Kopi Susu Senja",
        price: "Rp 15.000",
        emoji: "☕",
        // image: "/belikopi.jpeg",
        desc: "Kopi susu kekinian dengan gula aren asli Magetan.",
        waText: "Halo BudalIn, saya mau titip beli Kopi Susu Senja",
    },
    {
        name: "Jasa Print Tugas",
        price: "Rp 500/lbr",
        emoji: "🖨️",
        desc: "Print hitam-putih atau warna, antar ke kos kamu!",
        waText: "Halo BudalIn, saya mau titip print tugas",
    },
    {
        name: "Nasi Goreng Bu Tin",
        price: "Rp 10.000",
        emoji: "🍳",
        desc: "Nasi goreng legendaris depan gerbang kampus 5.",
        waText: "Halo BudalIn, saya mau titip beli Nasi Goreng Bu Tin",
    },
    {
        name: "Es Teh Jumbo",
        price: "Rp 5.000",
        emoji: "🧊",
        desc: "Es teh manis jumbo 600ml, penawar haus siang bolong.",
        waText: "Halo BudalIn, saya mau titip beli Es Teh Jumbo",
    },
    {
        name: "Gorengan Pak De",
        price: "Rp 2.000/pcs",
        emoji: "🍩",
        desc: "Tahu isi, risol, bakwan anget-anget dari wajan!",
        waText: "Halo BudalIn, saya mau titip beli Gorengan Pak De",
    },
];

/* ===== WhatsApp helper ===== */
const waLink = (text: string) =>
    `https://wa.me/6285645645407?text=${encodeURIComponent(text)}`;

export default function CatalogSection() {
    return (
        <section id="katalog" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-brand-cream/50 to-brand-gray/30 dark:from-dark-surface/50 dark:to-dark-bg/80">
            {/* Decorative liquid blobs */}
            <div className="blob-animate pointer-events-none absolute top-20 -right-40 h-96 w-96 rounded-full bg-brand-orange/8 blur-3xl" />
            <div className="blob-animate-slow pointer-events-none absolute bottom-20 -left-40 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl dark:bg-brand-yellow/5" />

            {/* subtle top gradient line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

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
                        Katalog
                    </span>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-brand-navy dark:text-white sm:text-4xl lg:text-5xl">
                        Produk &amp; Jasa{" "}
                        <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">Jastip</span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-brand-navy-light/70 dark:text-white/50">
                        Pilih produk jualan teman-teman mahasiswa di bawah ini, lalu klik
                        &ldquo;Titip Beli&rdquo; untuk langsung terhubung via WhatsApp.
                    </p>
                </motion.div>

                {/* Product grid — liquid glass cards */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="liquid-glass-card group flex flex-col overflow-hidden rounded-2xl"
                        >
                            {/* Product image area */}
                            <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-brand-cream/80 to-white/60 dark:from-dark-surface dark:to-dark-bg/60 overflow-hidden">
                                {product.image ? (
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-110"
                                    />
                                ) : (
                                    <span className="text-7xl transition-transform group-hover:scale-110">
                                        {product.emoji}
                                    </span>
                                )}
                                {/* Glass overlay shimmer */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent dark:from-dark-surface/60 dark:to-transparent" />
                            </div>

                            {/* Card body */}
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-lg font-bold text-brand-navy dark:text-white">
                                    {product.name}
                                </h3>
                                <p className="mt-1 flex-1 text-sm text-brand-navy-light/70 dark:text-white/50">
                                    {product.desc}
                                </p>

                                {/* Price + CTA */}
                                <div className="mt-5 flex items-center justify-between">
                                    <span className="text-lg font-extrabold text-brand-orange">
                                        {product.price}
                                    </span>
                                    <a
                                        href={waLink(product.waText)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="liquid-shimmer inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow px-5 py-2 text-sm font-bold text-white shadow-sm transition-all hover:scale-105 hover:shadow-md"
                                    >
                                        <ShoppingBag className="h-4 w-4" />
                                        Titip Beli
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
