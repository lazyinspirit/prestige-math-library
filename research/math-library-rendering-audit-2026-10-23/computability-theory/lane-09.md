# Computability Theory rendering audit — lane 09

Reviewed 87 assigned items and 113 screenshot tiles. Every tile was opened individually at original resolution. Current source hashes match the assignment; frozen snapshots match the current source; HTML hashes match the assignment. Per-item source, snapshot and HTML SHA-256 values and every tile SHA-256/dimension are recorded in [lane-09.json](lane-09.json). No unreviewed item or tile and no drift were found.

## Confirmed rendering findings

1. **def-sigma-n-pi-n-and-delta-n-sets**, title line 4: `Sigma_n^0, Pi_n^0, Delta_n^0` is shown literally with raw carets and underscores while the body typesets the symbols. Screenshot: [tile](screenshots/def-sigma-n-pi-n-and-delta-n-sets--01.png), SHA-256 `915b7f7663709e6e87358a70a621294afc076ac3c270abe91820943feadc4669`.
2. **lem-first-false-round-is-caught-by-root-bound**, Facts & Assumptions line 32: `S_{i-1}, q_i, r_i, h_i` remain literal ASCII instead of math, unlike the surrounding rendered formulas. Screenshot: [tile](screenshots/lem-first-false-round-is-caught-by-root-bound--01.png), SHA-256 `647013973473c1eb5885b67ae8c31dcaa70885609773cb9fcea68d4062e1f352`.

## Diagram review

No existing TikZ diagram blocks occur in the assigned sources, so there are no existing diagram maps or orientations to validate. One optional candidate is source-supported by **thm-three-sat-reduces-to-directed-hamiltonian-cycle**, lines 61–67: a schematic of each variable crossbar, the boundary arcs, positive and negative clause detours, truth-orientation convention, and optional cycle-closing vertex. The precise arcs and direction checks are in the JSON. The prose already defines the construction; this is visual support, not a confirmed defect. Screenshots: [tile 1](screenshots/thm-three-sat-reduces-to-directed-hamiltonian-cycle--01.png) and [tile 2](screenshots/thm-three-sat-reduces-to-directed-hamiltonian-cycle--02.png).

## Optional typography and limitations

The sentence in **def-polynomial-advice-machine**, line 28, displays `a_n` literally; it is clear and recorded as optional typography, not a confirmed defect. Technique banners are expected CSS labels and wikilinks intentionally render as block lines. Tile boundaries continue on adjacent tiles; no standalone image showed clipping. This review covers local snapshots and previews, not a live website or full mathematical verification.
