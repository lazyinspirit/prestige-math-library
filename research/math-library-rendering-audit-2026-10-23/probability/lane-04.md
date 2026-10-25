# Probability rendering audit — lane 04

Reviewed all 69 assigned item titles and complete ItemBodies, plus all 117 assigned screenshot tiles. Each tile was opened individually with tools.view_image at original resolution. Assigned/current source, frozen snapshot, local HTML, and screenshot hashes match; coverage is gapless and no item or tile remains unreviewed. Exact per-item and per-tile SHA256 coverage is in [lane-04.json](lane-04.json).

One confirmed display-notation defect was found: the birth–death recurrence example omits the backslash before mathbb on source line 44, so the statement displays “mathbb N₀” instead of ℕ₀. The exact source claim and rendered tile hash are recorded in the JSON finding. All other checked LaTeX notation rendered legibly; the receipts record 0 KaTeX errors and 0 diagram failures.

## Diagram review

The 69 screenshot sidecars report 0 TikZ diagrams and 0 diagram failures. No existing diagram was present to inspect. One high-likelihood editorial opportunity is recorded: a directed triangle for the three-cycle counterexample, with forward and reversed arrows, invariant masses, and the explicit failed detailed-balance edge check. The diagram must not present itself as proof.

## Rendering and clipping checks

Wikilinks intentionally render as block lines; linked reference titles and punctuation wrapping alone were not treated as defects. No standalone clipping was confirmed across the original-resolution tiles. Long items use overlapping vertical crops, and the tile coverage is gapless. No live route or production rendering claim was made.
