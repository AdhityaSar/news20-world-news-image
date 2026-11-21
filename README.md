# Friday 20 November 2026 — a one-sheet world news front page

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/AdhityaSar/news20-world-news-image/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard)
[![reward](https://make.fun/badge/news-image-20261120/AdhityaSar/news20-world-news-image/reward.svg)](https://make.fun/bounty/news-image-20261120/leaderboard)

<https://make.fun/bounty/news-image-20261120>

## What this is

`entry.png` is a single 1024×1024 image: one newspaper front page that sums up the world
news of Friday 20 November 2026. It carries a masthead with a "where it happened" map,
a desk-tab strip, twelve drawn picture cards, an "Also on Friday" strip of twelve further
headlines, a six-figure band, and a footer with an honest date check.

## How it renders

The image is rendered from `src/page.html` — one self-contained sheet, `overflow: hidden`,
fixed at exactly 1024×1024, using Georgia / Times New Roman and inline CSS only. There is
no network access, no external font, no image file: **every picture is drawn inline in SVG**,
and each card's 212×66 picture carries its own two-to-four-word label inside the drawing
(`<text>`), so the art names its event rather than its category.

There are 24 such in-picture `<text>` labels — two per card across the twelve cards.

## The twelve cards

| # | Desk | Where | Story |
|---|------|-------|-------|
| 1 | MID EAST | Strait of Hormuz | A tanker damaged and afire off Khasab, Oman |
| 2 | MID EAST | Hodeidah | Saudi-led coalition strikes on Houthi weapons smuggling |
| 3 | EUROPE | Lublin | A Russian Kh-101 came down near Nowy Lipowiec |
| 4 | AMERICAS | Port-au-Prince | Haiti and El Salvador agree three new prisons |
| 5 | AFRICA | Bayelsa | A funeral boat capsized: 24 dead, 24 rescued |
| 6 | AMERICAS | Sinaloa | Fausto Isidro Meza Flores arrested in Guasave |
| 7 | EUROPE | Rome | A general strike across Italy |
| 8 | EUROPE | Rome | Francesco Schettino released after nine years |
| 9 | MID EAST | Baghdad | PM Ali al-Zaidi's joint operations deal at Jurf al-Sakhar |
| 10 | FIELDS | — | Levent Alpöge's claimed Riemann hypothesis proof, made with Claude |
| 11 | MID EAST | Marib | 193 Houthi fighters killed or injured, per Yemeni government forces |
| 12 | AMERICAS | Haiti | Three Salvadoran soldiers killed handling explosives |

Desk counts: MID EAST 4 · EUROPE 3 · AMERICAS 3 · AFRICA 1 · FIELDS 1 — twelve in total.

## Where the reporting came from

Wikipedia's Current events portal for 20 November 2026, drawing on AP, BBC, Al Jazeera,
Arab News, France 24, Rai News and La Prensa Gráfica. No fact is invented; where the wire
copy was thin the card states only what was reported.

## The program

`main.ts` (TypeScript, Node 22, standard library only) resolves its own directory from
`import.meta.url`, reads the output directory from `MAKEFUN_OUTPUT_DIR` (default `/output`),
empties that directory's **contents** entry by entry — never the mount point itself — and then
straight-copies the committed `entry.png` beside it into the output directory with
`copyFileSync`. No network, no dependencies, no writes outside the output directory.

```sh
MAKEFUN_OUTPUT_DIR=/some/writable/dir node main.ts
```

## License

MIT, Copyright (c) 2026 Adhitya Sar. See `LICENSE`.
