import React from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

function Navigation() {
  return (
    <>
    <nav className="flex sm:justify-center space-x-4">
        {[
            ['Home', '/'],
            ['Discord', 'https://discord.gg/3jubZ9uSTD'],
            ['GitHub', 'https://github.com/NexiumOSS'],
            ['Twitter', 'https://x.com/NexiumApp']
        ].map(([title, url]) => (
            <a key={title} href={url} className="rounded-lg px-3 py-2 font-semibold text-slate-800 hover:bg-slate-700 hover:text-slate-100 dark:text-slate-100 dark:hover:text-slate-800 dark:hover:bg-zinc-300">{title}</a>
        ))}
    </nav>
    </>
  )
}

export default Navigation