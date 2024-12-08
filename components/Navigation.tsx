'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, MessageCircle, Twitter, X } from 'lucide-react'

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Datasets', href: '/datasets' },
    { name: 'Diff Viewer', href: '/diff-viewer' },
]

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="bg-background/80 backdrop-blur-md border border-border/50 shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3">
                {/* Logo and Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                        PI
                    </div>
                    <span className="text-xl font-bold gradient-text">Project Ichnaea</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-foreground/80 hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button
                        className=" text-white font-semibold px-6 rounded-full mt-2"
                    >
                        Join Us!
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out rounded-b-3xl ${isOpen ? 'max-h-screen opacity-100 rounded-none' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col gap-2 px-6 py-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-foreground/80 hover:text-foreground transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <Button
                        className=" text-white font-semibold px-6 rounded-full mt-2"
                    >
                        Join Us!
                    </Button>
                </nav>
            </div>
        </div>
    )
}

export default Navigation
