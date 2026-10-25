# Fourier Analysis visual LaTeX audit — lane 07

## Coverage and method

Reviewed all 44 items assigned in `assignment-07.json`. I opened every revision-2 full-page screenshot tile at original resolution and checked the rendered statement or definition, facts, proof or verification, remarks, Scratch work, and TikZ sections where present. The per-item ledger in `lane-07.json` records every tile and every source section checked, including items with no defect.

The screenshots are actual application ItemBody/MathMarkdown SSR rendered with local application CSS and KaTeX fonts. They are local previews, not production HTTP pages. This audit is visual only; it made no content edits and did not assess mathematical correctness. No TikZ rendering defect was observed in the assigned lane.

## Findings

### Raw notation in item headings

These are confirmed title-rendering issues: the mathematical text remains on the baseline or exposes an underscore rather than displaying the intended exponent/subscript.

| Item | Page | Source | Visual symptom | Suggested repair |
|---|---|---|---|---|
| `cor-bmo-lp-oscillation-norms-are-equivalent` | `bmo-john-nirenberg-and-h1-duality` | `snapshots/cor-bmo-lp-oscillation-norms-are-equivalent.md:4` — `title: "BMO oscillation norms in Lq are equivalent"` | Heading shows `Lq` in baseline text. | Write `$L^q$` in the title. Evidence: `screenshots/cor-bmo-lp-oscillation-norms-are-equivalent--01.png`. |
| `ex-a-one-power-weight-range` | `muckenhoupt-weights-and-weighted-estimates-examples` | `snapshots/ex-a-one-power-weight-range.md:4` — `title: The A_1 range of a power weight` | Heading shows the literal underscore in `A_1`. | Write `$A_1$` in the title. Evidence: `screenshots/ex-a-one-power-weight-range--01.png`. |
| `ex-power-weight-a-p-range` | `muckenhoupt-weights-and-weighted-estimates-examples` | `snapshots/ex-power-weight-a-p-range.md:4` — `title: The A_p range of a power weight` | Heading shows the literal underscore in `A_p`. | Write `$A_p$` in the title. Evidence: `screenshots/ex-power-weight-a-p-range--01.png`. |
| `lem-a-p-weights-are-doubling` | `muckenhoupt-weights-and-weighted-estimates` | `snapshots/lem-a-p-weights-are-doubling.md:4` — `title: A_p weights are doubling` | Heading shows the literal underscore in `A_p`. | Write `$A_p$` in the title. Evidence: `screenshots/lem-a-p-weights-are-doubling--01.png`. |
| `lem-finite-atomic-sums-are-dense-in-hone` | `bmo-john-nirenberg-and-h1-duality` | `snapshots/lem-finite-atomic-sums-are-dense-in-hone.md:4` — `title: "Finite atomic sums are dense in H1"` | Heading shows `H1` in baseline text. | Write `$H^1$` in the title. Evidence: `screenshots/lem-finite-atomic-sums-are-dense-in-hone--01.png`. |
| `lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp` | `hilbert-and-riesz-transforms` | `snapshots/lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp.md:4` — `title: "Uniform Lp bounds for periodic Fourier partial sums"` | Heading shows `Lp` in baseline text. | Write `$L^p$` in the title. Evidence: `screenshots/lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp--01.png`. |

### Optional heading typography

| Item | Page | Source | Visual symptom | Suggested repair |
|---|---|---|---|---|
| `lem-carleson-forest-summation-gives-restricted-weak-ltwo` | `carleson-hunt-time-frequency-theorem` | `snapshots/lem-carleson-forest-summation-gives-restricted-weak-ltwo.md:4` — `title: "Carleson forest summation gives restricted weak ltwo"` | Heading ends with the unexplained label `ltwo`. | Consider “restricted weak $L^2$”. Evidence: `screenshots/lem-carleson-forest-summation-gives-restricted-weak-ltwo--01.png`. |

### Raw math delimiters in the Proof technique banner

| Item | Page | Source | Visual symptom | Suggested repair |
|---|---|---|---|---|
| `thm-hardy-littlewood-sobolev-fractional-integration` | `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality` | `snapshots/thm-hardy-littlewood-sobolev-fractional-integration.md:84` — `**Proof technique:** direct; the exponent algebra fixes $q$; Tonelli makes the integral measurable; the maximal bound makes $Mf$ finite almost everywhere and Hedberg converts that into almost-everywhere absolute convergence and an $L^q$ estimate; classes, linearity and the dense smooth core are then handled separately.` | The uppercase Proof technique banner exposes dollar delimiters and TeX fragments as literal text; the screenshot shows fragments like `$$q$` and `$L^q$` instead of typeset math. | Reword the banner without delimiters, or send its inline math through the same math-aware rendering path as item sections. Evidence: `screenshots/thm-hardy-littlewood-sobolev-fractional-integration--01.png`. |

All other 36 assigned items are recorded as clean in the coverage ledger. “Clean” here means no malformed math, raw mathematical notation, or TikZ rendering defect was visible in the reviewed local screenshots; it does not certify production rendering.
