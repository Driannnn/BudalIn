"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Slide =
    | { type: "image"; src: string; alt: string; badge: string }
    | { type: "video"; src: string; poster?: string; badge: string };

const slides: Slide[] = [
    {
        type: "image",
        src: "/flyer.png",
        alt: "Flyer WiriGoo — Promo dan Layanan",
        badge: "📢 Flyer Terbaru",
    },
    {
        type: "video",
        src: "/wirigoopromosi.mp4",
        poster: "/flyer.png",
        badge: "🎬 Video Promosi",
    },
];

export default function FlyerSection() {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = (i: number) => {
        const next = (i + slides.length) % slides.length;
        setIndex(next);
    };
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    // Auto-advance only when current slide is an image (don't interrupt video)
    useEffect(() => {
        if (autoplayRef.current) clearTimeout(autoplayRef.current);
        const current = slides[index];
        if (current.type === "image") {
            autoplayRef.current = setTimeout(() => {
                goTo(index + 1);
            }, 6000);
        }
        return () => {
            if (autoplayRef.current) clearTimeout(autoplayRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    // Pause video when navigating away from it
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        if (slides[index].type !== "video") {
            v.pause();
            setIsPlaying(false);
        }
    }, [index]);

    const togglePlay = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) {
            v.play();
            setIsPlaying(true);
        } else {
            v.pause();
            setIsPlaying(false);
        }
    };

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
                        Flyer & Video{" "}
                        <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">
                            Promosi
                        </span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-brand-navy-light/70 dark:text-white/50">
                        Geser slide untuk melihat info terbaru, promo, dan video promosi resmi WiriGoo.
                    </p>
                </motion.div>

                {/* Slider card */}
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

                        {/* Slide viewport */}
                        <div className="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5">
                            <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -40 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        {slides[index].type === "image" ? (
                                            <Image
                                                src={slides[index].src}
                                                alt={
                                                    (slides[index] as { alt: string }).alt
                                                }
                                                fill
                                                sizes="(max-width: 768px) 100vw, 768px"
                                                priority
                                                className="rounded-2xl object-contain"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <video
                                                    ref={videoRef}
                                                    src={slides[index].src}
                                                    poster={
                                                        (slides[index] as { poster?: string })
                                                            .poster
                                                    }
                                                    controls
                                                    playsInline
                                                    onPlay={() => setIsPlaying(true)}
                                                    onPause={() => setIsPlaying(false)}
                                                    onEnded={() => {
                                                        setIsPlaying(false);
                                                        next();
                                                    }}
                                                    className="h-full w-full rounded-2xl object-contain"
                                                />
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Gradient overlay at bottom (only for image) */}
                                {slides[index].type === "image" && (
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl" />
                                )}

                                {/* Badge */}
                                <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2">
                                    <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                                        {slides[index].badge}
                                    </span>
                                </div>

                                {/* Play overlay (shows when video paused) */}
                                {slides[index].type === "video" && !isPlaying && (
                                    <button
                                        type="button"
                                        onClick={togglePlay}
                                        aria-label="Putar video"
                                        className="absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
                                    >
                                        <span className="liquid-glass flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl transition-transform hover:scale-110">
                                            <Play className="ml-1 h-7 w-7" fill="currentColor" />
                                        </span>
                                    </button>
                                )}
                            </div>

                            {/* Prev / Next buttons */}
                            <button
                                type="button"
                                onClick={prev}
                                aria-label="Slide sebelumnya"
                                className="liquid-glass absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110 hover:bg-white/20"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                onClick={next}
                                aria-label="Slide berikutnya"
                                className="liquid-glass absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110 hover:bg-white/20"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>

                            {/* Video play/pause toggle (only on video slide, when playing) */}
                            {slides[index].type === "video" && isPlaying && (
                                <button
                                    type="button"
                                    onClick={togglePlay}
                                    aria-label="Jeda video"
                                    className="liquid-glass absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110"
                                >
                                    <Pause className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        {/* Dots / indicators */}
                        <div className="mt-4 flex items-center justify-center gap-2">
                            {slides.map((s, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => goTo(i)}
                                    aria-label={`Pindah ke slide ${i + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        i === index
                                            ? "w-8 bg-gradient-to-r from-brand-orange to-brand-yellow"
                                            : "w-2 bg-brand-navy/20 dark:bg-white/20 hover:bg-brand-navy/40 dark:hover:bg-white/40"
                                    }`}
                                />
                            ))}
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
                        {slides[index].type === "image"
                            ? "Flyer resmi WiriGoo"
                            : "Tonton video promosi WiriGoo"}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
