# Combinatorics visual audit — lane 01

## Scope and coverage

Visually audited all 142 assigned items on their listed pages, including every title and the complete rendered ItemBody. Opened all 177 assigned screenshot tiles at original resolution. Every assigned source and rendered HTML hash matches the frozen assignment. The per-item ledger records the checked sections and SHA256 for each tile: [lane-01.json](lane-01.json).

## Confirmed findings

- **Raw title notation:** `cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information`, line 4, displays `x_i=x^i` literally in the title because it is not enclosed in math delimiters. See [title tile](screenshots/cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information--01.png).
- **Raw math in proof-technique labels:** `thm-cographs-are-exactly-the-p-four-free-graphs`, line 64, and `lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem`, line 56, display dollar-delimited notation literally inside the uppercase monospace technique banner. See [cograph tile](screenshots/thm-cographs-are-exactly-the-p-four-free-graphs--02.png) and [Rödl tile](screenshots/lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem--01.png).

## Diagram review

The four existing TikZ diagrams were checked against their source maps, signs, labels, and indices; all agree. No concrete missing braid, string, commutative, or flag diagram is supported by the assigned source. The partition-conjugation example at lines 31, 33, 35, 37, 39, 41, 43, 45, and 47 of `ex-conjugation-of-the-partitions-of-six` is an optional Young/Ferrers diagram candidate, though the listed pairings already communicate the example.

No source items, publication statuses, or publication outputs were changed. Only the lane-01 report files were written.
