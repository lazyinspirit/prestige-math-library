# Coxeter Groups visual audit — lane 06

Reviewed **36 assigned items** and **107 screenshot tiles**. Each local PNG was opened individually with `tools.view_image` at original resolution. Every item source and frozen snapshot matches the assignment hash; all captured HTML and tile hashes match their manifests. The complete per-item and per-tile SHA-256 record is in [lane-06.json](lane-06.json).

Confirmed rendering defects: **0**. KaTeX errors: **0**. TikZ parser/capture failures: **0**. No assigned item contains an existing TikZ/TikZcd diagram. No existing diagram math needed review.

## Optional diagram candidate

### ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue

- Source: `items/ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue.md`, Example, lines 36–48.
- The item describes a triangulation of $S^2$ with 24 triangular chambers, 36 edges, and 14 vertices in three types of sizes $4+6+4$. It also identifies parabolic vertex links as a 6-cycle or 4-cycle.
- A combinatorial schematic of the barycentric subdivision of a tetrahedron boundary could show these counts: vertices correspond to nonempty proper subsets of a four-element set; flags give the 24 triangles. Highlight a size-6 or size-4 vertex orbit and its hexagon or square link. Keep the drawing explicitly combinatorial; the item gives the spherical fundamental triangle angles as $\pi/3,\pi/3,\pi/2$ (lines 50–52), so a regular tetrahedron picture would misstate its metric.
- This is a source-supported optional visual, not a mathematical defect. Evidence tiles: `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue--01.png`, `--04.png`, `--05.png`.

## Mathematical checks

- The $A_3$ coset counts and incidence values are consistent: $4+6+4=14$, $14-36+24=2$, and the specified rank-two parabolic links have lengths 6 and 4 (source lines 36–48, 68, 94, 100–102).
- In `ex-cg-a-tilde-2-radical-vector-and-affine-slice`, the displayed form has radical vector $(1,1,1)$; the quotient metric gives slice-triangle side length $2/\sqrt3$, and the stated root-alcove comparison scale is $\sqrt2$ (source lines 28–34, 54, 56, 58–60).
- In `ex-cg-finite-dihedral-rotation-and-infinite-unipotent-rank-two-product`, the rank-two product matrix and the $m=3$ rotation and $m=\infty$ unipotent calculations are consistent with the stated column-basis convention and signs (source lines 38–42, 48, 60–65).
- No questionable diagram map, orientation, index, or sign was found; the assigned captures contain no existing diagrams.

## Rendering and typography notes

- Formula typography and MathMarkdown rendered without reported KaTeX errors. No unintended reference-title leak was identified. Explicit wikilinks appear as block lines in the capture, as expected. CSS-uppercase technique banners are expected.
- Optional title typography: `ex-cg-quadratic-hecke-normalizations-s-equals-q-t`, source line 4, uses literal `q^2` in the title; the corresponding ItemBody formulas render correctly.
- No independently confirmed clipping defect was identified in the standalone original tiles. The capture uses overlapping vertical slices of a fixed 1200 px viewport; long inline expressions at the horizontal viewport edge remain a capture limitation.
- The category capture protocol records that all Scratch disclosures were opened before full-page screenshots. This review used only local captures and did not access a live website.
