# Computability Theory rendering audit — lane 10

Reviewed all 87 assigned item titles and complete ItemBodies and all 100 assigned screenshot tiles individually at original PNG resolution. Source, frozen snapshot, generated HTML, and tile hashes are recorded in `lane-10.json`. No item or publication status was changed; no live website or HTTP(S) was used.

Confirmed rendering defects: 2.

- **ex-sigma-one-sets-are-exactly-ce-sets** — Title notation `Sigma_1^0` is rendered as literal ASCII rather than mathematics (source line 4; tile `ex-sigma-one-sets-are-exactly-ce-sets--01.png`).
- **fs-sigma-n-and-pi-n-are-disjoint** — Title notation `Sigma_n^0` and `Pi_n^0` is rendered as literal ASCII rather than mathematics (source line 4; tile `fs-sigma-n-and-pi-n-are-disjoint--01.png`).

## Diagram review

No existing TikZ diagrams were present among assigned items, so there were no existing diagram maps or orientations to check. Two editorial-only possibilities are recorded: an inclusion ladder for `def-chomsky-hierarchy` and a directed path with the recursive midpoint highlighted for `ex-bounded-reachability-recursion-is-correct`. Neither is a mathematical or rendering defect.

All assigned source and frozen-snapshot hashes match; generated HTML hashes match the assignment manifest, and all assigned tile hashes match their screenshot sidecars. Exact per-item coverage and SHA-256 records are in `lane-10.json`.
