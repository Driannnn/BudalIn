"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

/* ===== Navigation Links ===== */
const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Katalog", href: "#katalog" },
    { label: "Cara Kerja", href: "#cara-kerja" },
];

/* ===== WhatsApp CTA link ===== */
const WA_LINK =
    "https://wa.me/6285645645407?text=Halo%20WiriGoo%2C%20saya%20mau%20pesan!";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    /* Detect scroll to toggle navbar background */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileOpen
                ? "bg-white/85 shadow-lg backdrop-blur-xl border-b border-white/30 dark:bg-dark-bg/85 dark:border-white/10 dark:shadow-black/30"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                {/* ---------- Logo ---------- */}
                <a href="#home" className="flex items-center gap-2 group">
                    <Image
                        src="/Logo.png"
                        alt="WiriGoo Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-xl shadow-md transition-transform group-hover:scale-110"
                    />
                    <span className="text-xl font-extrabold tracking-tight text-brand-navy dark:text-white">
                        Wiri<span className="text-brand-orange">Goo</span>
                    </span>
                </a>

                {/* ---------- Desktop Links ---------- */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="relative text-sm font-semibold uppercase tracking-wide text-brand-navy-light transition-colors hover:text-brand-orange dark:text-white/70 dark:hover:text-brand-orange after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-orange after:transition-all hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* ---------- Desktop Right Actions ---------- */}
                <div className="hidden items-center gap-3 md:flex">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-brand-cream dark:hover:bg-white/10"
                        aria-label="Toggle dark mode"
                    >
                        <AnimatePresence mode="wait">
                            {theme === "dark" ? (
                                <motion.span
                                    key="sun"
                                    initial={{ scale: 0, rotate: -90 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 90 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    className="absolute"
                                >
                                    <Sun className="h-5 w-5 text-brand-yellow" />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="moon"
                                    initial={{ scale: 0, rotate: 90 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: -90 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    className="absolute"
                                >
                                    <Moon className="h-5 w-5 text-brand-navy-light" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>

                    {/* CTA */}
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="liquid-shimmer rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                    >
                        Pesan Sekarang
                    </a>
                </div>

                {/* ---------- Mobile Right Actions ---------- */}
                <div className="flex items-center gap-2 md:hidden">
                    {/* Theme Toggle (mobile) */}
                    <button
                        onClick={toggleTheme}
                        className="relative flex h-9 w-9 items-center justify-center rounded-full transition-all hover:bg-brand-cream dark:hover:bg-white/10"
                        aria-label="Toggle dark mode"
                    >
                        <AnimatePresence mode="wait">
                            {theme === "dark" ? (
                                <motion.span
                                    key="sun-m"
                                    initial={{ scale: 0, rotate: -90 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 90 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    className="absolute"
                                >
                                    <Sun className="h-5 w-5 text-brand-yellow" />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="moon-m"
                                    initial={{ scale: 0, rotate: 90 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: -90 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    className="absolute"
                                >
                                    <Moon className="h-5 w-5 text-brand-navy-light" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="z-50 rounded-lg p-2 text-brand-navy transition-colors hover:bg-brand-cream dark:text-white dark:hover:bg-white/10"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* ---------- Mobile Menu ---------- */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="liquid-glass overflow-hidden border-t border-white/20 dark:border-white/10 md:hidden"
                    >
                        <ul className="flex flex-col gap-1 px-5 py-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-brand-navy-light transition-colors hover:bg-white/20 hover:text-brand-orange dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-brand-orange"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="mt-2">
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-md"
                                >
                                    Pesan Sekarang
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
