# Combinatorics rendering audit — lane 03

Reviewed 142 assigned items and 179 local PNG tiles at original resolution. Full title and ItemBody coverage was reviewed for each item; all tile windows together cover the recorded document height without gaps (adjacent windows overlap where needed). Source, rendered HTML, and PNG hashes are recorded in [lane-03.json](lane-03.json).

## Findings

1. **Raw LaTeX in a proof-technique banner** — `thm-the-bird-graph-has-the-erdos-hajnal-property`, source line 58, tile `thm-the-bird-graph-has-the-erdos-hajnal-property--01.png`. The source contains valid `$\{\mathrm{Bird}\}$`; the banner shows the expression as raw markup under its uppercase style. KaTeX error count is zero.
2. **Raw Markdown in a proof conclusion** — `thm-substituting-perfect-graphs-preserves-perfection`, source line 68, tile `thm-substituting-perfect-graphs-preserves-perfection--02.png`. The source line appends `## Source notes` after `∎`; the heading text appears in the final rendered proof step.

## Coverage and diagram review

All 142 items have a gapless tile sequence covering their recorded rendered document height. The audit metadata reports zero KaTeX errors and zero diagram failures for the assigned items. No source-supported missing braid, string, Young-tableau, commutative, or flag diagram was found. Existing incidence relation, divisor lattice, Boolean lattice Möbius, and Pascal triangle diagrams were checked for map, sign, and index errors; none were observed.

No separate optional typography observations were recorded.
