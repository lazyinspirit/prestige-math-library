# Linear Algebra rendering audit — lane 07

Read-only visual review of all 75 assigned published items and all 94 saved ItemBody PNG tiles. Every assigned PNG was viewed individually at its original resolution. Assignment source digests match both current source and frozen snapshots; assignment HTML digests and screenshot capture receipts also match. Exact item and tile coverage, SHA256 digests, and resolutions are in [lane-07.json](lane-07.json).

## Confirmed rendering defects

- `def-forward-and-back-substitution-for-triangular-systems`, source line 37: missing block separation makes rendered prose join the preceding and following display math (visible as “).If U” and “constructionx_i”) in `def-forward-and-back-substitution-for-triangular-systems--01.png`.
- `cex-a-tiny-residual-does-not-force-a-small-forward-error`, line 36; `thm-singular-value-decomposition`, line 43; `thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity`, line 41; and `thm-derivative-of-matrix-inversion`, line 51: reference titles visibly leak literal ASCII math, including `kappa_p(A)`, `||A||_p`, `T^*T`, and `max_{||v||=1} ||Tv||`, instead of typeset notation. These occur inside intended block links; the leak is in the displayed titles. Tile evidence and hashes are listed per finding in the JSON.

No source-authored TikZ was present in the assignment. No clipped glyph or diagram edge was confirmed.

## Optional diagram candidates

- `thm-first-isomorphism-theorem-for-vector-spaces`, lines 29–31 and 45–47: a commutative quotient-map diagram could show `V → U`, the quotient `V/ker T`, the induced isomorphism `\widetilde T`, and inclusion `im T ↪ U`, with both routes sending `v` to `T(v)`. The proof is already complete.
- `ex-gershgorin-disks-and-spectrum`, lines 32–38: an optional complex-plane plot can show the radius-one disks centered at 2 and 3, the singleton `D_3={4}`, and spectral points 2, 3, and 4.

The full source-backed diagram labels and relations, as well as per-item and per-tile review coverage, are recorded in the JSON.
