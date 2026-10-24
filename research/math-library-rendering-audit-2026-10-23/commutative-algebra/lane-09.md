# Commutative Algebra rendering audit — lane 09

Reviewed all 82 assigned titles and complete rendered ItemBodies, and viewed all 110 revision-2 PNG tiles individually at original resolution. Each screenshot hash and source hash is recorded in `lane-09.json`; source hashes match the assignment. Review was limited to the frozen local snapshots.

## Findings

- **lem-ext-depth-shift-across-a-regular-element** — typography: In the standalone original-resolution PNG, the statement begins with “Let R be Noetherian” and the full “Given:” label is visible. Separately, the long inline formula for the first-nonzero-Ext degree reaches the right edge with “<”; its final “∞” appears at the start of the next line, visually separating the relation from its operand. (source line 24).
- **cor-regular-local-hilbert-samuel-multiplicity-one** — typography: The displayed title is all lowercase (“regular local hilbert samuel multiplicity one”), unlike conventional title casing and the mathematical style used elsewhere. (source lines 4).
- **def-embedding-dimension-and-regular-local-ring** — typography: The displayed title is all lowercase (“embedding dimension and regular local ring”). (source lines 4).
- **lem-local-global-dimension-equals-residue-field-projective-dimension** — typography: The displayed title is all lowercase (“local global dimension equals residue field projective dimension”). (source lines 4).
- **lem-r-one-s-two-intersection-of-height-one-localisations** — typography: The displayed title spells the standard Serre-condition notation in words (“r one s two intersection of height one localisations”), which is difficult to scan as a mathematical title. (source lines 4).

No raw TeX delimiters, unrendered TikZ, or parser failures were observed. No existing diagram had a map, index, or sign error.

## Diagram review

No required missing diagram was identified. An optional editorial sketch could accompany **ex-normalization-nodal-coordinate-domain** (lines 30–36): draw the map `A → k[t]`, `x ↦ t²−1`, `y ↦ t(t²−1)`, and mark the two preimages `t=1` and `t=−1` of the origin. The map and preimage calculation are already clear in the text, so a figure is optional.

Coverage and exact source/tile SHA256 bindings are in `lane-09.json`. No item or publication-status files were changed.
