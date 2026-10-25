# Algebraic Topology rendering audit — lane 01

Reviewed all 92 assigned items and all 157 listed revision-2 PNG tiles at original resolution. Each item’s title and rendered body sections were checked, including facts, proofs, remarks/source notes where present, internal reference titles, and any diagrams. No unviewed tiles remain.

## Findings

Four confirmed rendering defects were observed:

- `def-orthogonal-clifford-families-and-centrioles` — the Definition displays mathematical notation as plain text with literal underscores/caret-like subscripts.
- `def-right-group-ring-action-on-the-chains-of-a-universal-cover` — the group-ring internal reference syntax is printed literally.
- `lem-stable-thom-cohomology-is-a-square-module-coalgebra` — the Statement equation displays literal underscore notation instead of typeset math.
- `thm-unoriented-thom-cohomology-away-from-two-below-2r` — the Statement’s indexed and exponent formulas display as unformatted plain text.

The apparent missing initial letters seen in some multi-image tool outputs were absent when checking the corresponding original PNGs individually, so they are not findings. The lane09 item `ex-the-zero-stem-is-the-integers` was outside this assignment and is not included.

The JSON records every assigned ID, each exact revision-2 screenshot path, the checked sections, and the source lines for the confirmed findings.
