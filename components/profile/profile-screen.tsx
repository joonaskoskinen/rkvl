"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ChevronRight } from "lucide-react"
import { dailyTarget } from "@/lib/demo-data"

const groups: { label: string; items: { label: string; href: string; value?: string }[] }[] = [
  {
    label: "Tavoite",
    items: [
      { label: "Päivittäinen kalorimäärä", href: "#", value: `${dailyTarget.kcal} kcal` },
      { label: "Tavoite", href: "#", value: "Pudottaa painoa" },
      { label: "Aktiivisuustaso", href: "#", value: "Kohtalainen" },
    ],
  },
  {
    label: "Tili",
    items: [
      { label: "Sähköposti ja salasana", href: "#" },
      { label: "Tilaus", href: "/hinnasto" },
      { label: "Tietosuoja", href: "/asetukset/tietosuoja" },
    ],
  },
  {
    label: "Sovellus",
    items: [{ label: "Asenna puhelimeen", href: "/asenna" }],
  },
]

export function ProfileScreen() {
  return (
    <div className="mx-auto w-full max-w-md px-6 pt-10 pb-16 sm:px-0">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl font-medium text-foreground"
      >
        Profiili
      </motion.h1>

      <div className="mt-10 flex flex-col gap-10">
        {groups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 * gi, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <span className="pb-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
              {group.label}
            </span>
            {group.items.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between border-border py-4 transition-opacity hover:opacity-70 ${i !== 0 ? "border-t" : ""}`}
              >
                <span className="font-display text-base text-foreground">{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.value && <span className="text-sm text-muted-foreground">{item.value}</span>}
                  <ChevronRight className="size-4 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Kirjaudu ulos
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
