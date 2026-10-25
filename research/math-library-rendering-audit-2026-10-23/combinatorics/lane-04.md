# Combinatorics rendering audit — lane 04

Reviewed 142 assigned items and all 192 listed screenshot tiles at original resolution. Every current item source hash matches the assignment manifest, and every local PNG hash matches its screenshot manifest. Per-item source and per-tile hashes are recorded in `lane-04.json`.

Confirmed rendering/diagram findings: 2. No separate uncertain editorial candidates.

## ex-complementary-forbidden-bases

- Section: Remarks
- Source lines: 56, 58, 60
- Kind: Malformed displayed diagram
- Symptom: The TikZ code prints literally because the opening fence and `\begin{tikzpicture}` share a line. The screenshot does not show a complementary-basis diagram.
- Mathematical check: The intended panels show `\bar K_2` as two isolated vertices and `K_2` as a single edge, joined by a complement arrow; the source labels and edge data are correct.
- Screenshot: `screenshots/ex-complementary-forbidden-bases--01.png`
- Suggested repair: Put the TikZ environment on the line after the fence opener.

## ex-durfee-square-decomposition-of-five-three-three-two-one

- Section: Example
- Source lines: 34, 37, 41, 45
- Kind: Missing Young/Ferrers diagram
- Symptom: The example names the 3×3 Durfee square and the cells to its right and below, but the screenshot has no diagram.
- Mathematical check: The partition `(5,3,3,2,1)` has a 3×3 Durfee square, right remainder `α=(2)`, and lower remainder `β=(2,1)`. These regions are fixed by the source data and can be marked directly.
- Screenshot: `screenshots/ex-durfee-square-decomposition-of-five-three-three-two-one--01.png`
- Suggested repair: Add a Ferrers/Young diagram marking the square, α, and β regions.

The other source-contained TikZ diagrams reviewed in this lane render as graphics and have consistent labels and edge/index content. No additional source-supported missing braid, string, commutative, flag, or Young diagrams were found.
