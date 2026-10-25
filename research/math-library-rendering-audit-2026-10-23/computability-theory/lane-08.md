# Computability Theory rendering audit — lane 08

Reviewed all 87 assigned items and opened all 105 assigned screenshot tiles individually at original resolution. Source files and frozen snapshots were byte-identical for all items; all 87 source, HTML, and 105 tile hashes matched the assignment/manifests.

Confirmed findings: 2.

- **thm-halting-is-sigma-one-complete** — the title renders `Sigma_1^0` literally instead of as mathematical indices (source line 4; tile `screenshots/thm-halting-is-sigma-one-complete--01.png`).
- **def-plurality-decoding-of-powered-local-views** — its sole tile clips the bottom of the last Remarks bullet at source line 46. The rendered tail is visually unreviewed; source/snapshot/HTML hashes match. Tile `screenshots/def-plurality-decoding-of-powered-local-views--01.png`.

Diagram review.

No existing TikZ diagrams occur in this lane (all 87 screenshot manifests report `tikz_count: 0`). One optional candidate is recorded for `thm-stay-put-elimination-with-explicit-simulation-interface`: a state/configuration diagram of the stay-put macro, anchored to the exact supplier and theorem lines, with the head trace and marked-state tags spelled out. This is not a claim of a mathematical defect.

Complete per-item and per-tile coverage, hashes, checked sections, findings, and the diagram candidate are in `lane-08.json`.
