import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBar = async (props: Props) => {
    return (
        <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
            <aside className="flex items-center gap-[2px]">
                <Image src="/bermendora-logo.png" alt="logo" width={200} height={98} className="shadow-sm" />
            </aside>
            <nav className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] hidden md:block">
                <ul className="flex items-center gap-4 list-none">
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <aside className="flex items-center gap-4">
                <Link href="/magic"
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Mes projets
                    </span>
                </Link>
                <MenuIcon className="md:hidden" />
            </aside>
        </header>
    )
}

export default NavBar