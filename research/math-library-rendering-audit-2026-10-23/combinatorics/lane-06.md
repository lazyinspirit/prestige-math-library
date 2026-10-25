# Combinatorics visual audit — lane 06

## Scope and coverage

Reviewed all 141 assigned items, their titles, and complete ItemBody content. Viewed all 190 revision-2 PNG tiles individually at original resolution. Per-item section coverage, page placement, and item, HTML, snapshot, and screenshot SHA256 values are recorded in [lane-06.json](lane-06.json). All recorded hashes match the assignment and capture receipts. No item content or publication status was changed, and no live HTTP(S) site was accessed.

## Confirmed rendering defects

Four Remarks sections show raw TikZ source instead of the intended figures: `cex-c6-and-two-triangles-share-a-degree-sequence` (lines 50, 52), `cex-regular-graphs-are-not-hereditary` (lines 54, 56, 58), `ex-pure-and-mixed-pairs-in-p-four` (lines 56, 58, 60, 62), and `thm-stars-and-bars` (line 112). Each uses a single-line TikZ fence opener with the diagram source placed on that same line, and the source text is visible in its assigned tile. The detailed evidence, source excerpts, checks, tile paths, and hashes are in the JSON findings. The parser receipts report no diagram failure for these items, but the visual output confirms that the figures do not render.

No optional typography observations or errors in displayed diagram maps/signs/indices were confirmed. One optional Ferrers/Young diagram candidate is recorded separately: the proof of `lem-partition-conjugation-is-an-involution` explicitly transposes cells `(i,j) ↔ (j,i)` and transposes back, though the existing proof is already precise without a figure. No other additional diagrams are proposed.
