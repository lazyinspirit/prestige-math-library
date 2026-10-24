# Combinatorics rendering audit — lane 02

Reviewed all 142 assigned items and individually opened all 179 listed revision-2 PNG tiles at original resolution. The review covered each title and complete rendered ItemBody in the local application preview; no HTTP(S) or live-site access was used.

## Findings

- **cex-the-diamond-and-pentagon-lattices-are-not-distributive — Remarks, source lines 48 and 50.** A TikZ block uses one-line fence syntax. The rendered tile prints raw `\node` and `\draw` commands instead of the M₃ and N₅ diagrams. Evidence: `screenshots/cex-the-diamond-and-pentagon-lattices-are-not-distributive--01.png`.
- **fs-every-hereditary-class-has-a-finite-forbidden-basis — Remarks, source lines 58, 60, 62, and 64.** A TikZ block uses one-line fence syntax. The rendered tile prints raw `\node` and `\draw` commands instead of the C₃, C₅, C₇ sequence diagram. Evidence: `screenshots/fs-every-hereditary-class-has-a-finite-forbidden-basis--01.png`.

## Diagram review

The Kruskal/Prim weighted graph and K₄ spanning-tree figures rendered correctly; their labels, edge weights, and selected edges match their statements and checks. No displayed diagram-map, sign, or index error was found.

One optional source-supported addition is a labelled Ferrers/Young diagram of (4,2,1) beside its transpose (3,2,1,1), reused by the two conjugation counterexamples. The exact source lines and checks are recorded in the JSON. No braid/string, commutative, or flag diagram candidate was found in this lane.

## Coverage and hashes

Per-item source and body SHA256 hashes, checked section headings, visual status, and every tile path, pixel size, and SHA256 are in [`lane-02.json`](lane-02.json). All 142 source hashes match the assignment snapshot. The hashes of all 179 PNG files were recomputed from disk and match their capture receipts.

Technique banners and wikilink/reference block lines are intentional. Screenshot crops were not reported as clipping defects without standalone pixel confirmation.
