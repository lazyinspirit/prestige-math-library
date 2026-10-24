# Fourier visual audit — lane 01

## Scope and coverage

Audited all 45 assigned items on their listed pages using revision 2 of the actual app ItemBody SSR captures. Viewed all 106 screenshot tiles at original resolution, including overlap/blank tiles and every proof/verification/remarks section. The selected carriers have no `Scratch` section. The screenshot receipts report no KaTeX errors.

The per-item ledger, page memberships, checked headings, screenshots, and exact findings are in [lane-01.json](lane-01.json). It records 34 clean items and 11 items with findings; one item has multiple findings.

## Findings

- **Confirmed raw math:** `lem-carleson-single-tree-estimate`, on `carleson-hunt-time-frequency-theorem`. The Statement (line 27) prints `<=C`, `density(T)`, and `|g|<=1_E` as source-like text. Its Proof (lines 53, 55, 59, 61, 63, 65, 67, 69, 71) also exposes tokens such as `sigma=0`, `delta=0`, `exponent20`, and `j<=r`. Evidence: [statement/proof tile 1](</home/lazyinspirit/Projects/prestige-math-library/research/fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-single-tree-estimate--01.png>), [proof tile 2](</home/lazyinspirit/Projects/prestige-math-library/research/fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-single-tree-estimate--02.png>), [proof tile 3](</home/lazyinspirit/Projects/prestige-math-library/research/fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-single-tree-estimate--03.png>). Repair by restoring math delimiters and proper symbols on the listed lines.
- **Confirmed raw notation in title/reference labels:** `cor-sobolev-duality-from-the-fourier-pairing` line 4 prints `H^{s}` and `H^{-s}` literally; `thm-a-infinity-power-decay-characterisation` line 4 prints `A_infinity`; `thm-fourier-partial-sums-converge-in-periodic-lp` lines 4, 60, and 62 print `Lp` and `<=`; and the polar-coordinate reference title appears in the Facts & Assumptions of `lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds` and `ex-riesz-transform-as-a-standard-calderon-zygmund-operator` (line 57 in each) as `r^{n-1} dr d sigma`. Each item’s ledger row has the screenshot evidence and suggested math-formatted label.
- **Optional title/link typography:** `lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded` (`Lp`), `lem-hilbert-transform-is-skew-adjoint-on-ltwo` (`L2`), `lem-ltwo-almost-orthogonality-of-dyadic-pieces` (`L2`), `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp` (`Lp`), and `rem-hilbert-and-riesz-transform-endpoint-map` reference titles (`L2`) use readable baseline forms. Suggested future styling is `$L^p$` / `$L^2$`; these are classified as typography, not malformed math.

No repairs were made. No visual defect was inferred from source alone; each finding above was checked against its revision-2 SSR screenshot.
