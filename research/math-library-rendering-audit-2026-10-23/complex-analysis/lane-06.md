# Complex Analysis visual review — lane 06

## Scope and coverage

Reviewed all 140 assigned frozen item bodies, corresponding local preview HTML files, and all 239 assigned PNG tiles. Every tile was opened individually at original resolution. For each item, `lane-06.json` records exact SHA256 hashes for the live source file, frozen snapshot, local HTML preview, and each screenshot tile, with pixel dimensions and original-resolution review status. All source hashes match their frozen snapshots; all snapshot and HTML hashes match the assignment manifest. No source drift was found. No network or live-site access was used.

## Findings

1. **`lem-lambda-transformation-laws`, line 4:** title renders `S_3` with a literal underscore rather than a subscript. Evidence: `screenshots/lem-lambda-transformation-laws--01.png`.
2. **`cex-nevanlinna-error-bound-without-exceptional-radii`, line 54:** proof-technique banner displays raw LaTeX for `$\sum_n(z/r_n)^{\lambda_n}$` (including delimiters and commands). CSS uppercasing of the technique banner is expected; the unrendered math is the defect. Evidence: `screenshots/cex-nevanlinna-error-bound-without-exceptional-radii--01.png`.
3. **`ex-alternating-harmonic-power-series-at-the-boundary`, line 37:** the reference renders as a literal library path rather than its title. Evidence: `screenshots/ex-alternating-harmonic-power-series-at-the-boundary--01.png`.

The remaining 137 items were visually clean for the requested rendering checks. Wikilinks appearing as block lines are expected. No clipping was observed. No Scratch panel or existing TikZ/diagram appeared in the assigned item bodies/tiles.

## Diagram candidates

These are uncertain, optional suggestions, not confirmed defects. The exact source lines, relationship content, and screenshot evidence are recorded in the JSON.

- **`ex-square-map-sends-a-grid-to-orthogonal-parabolas` (lines 26, 39–47):** consider a paired z-plane/w-plane schematic for `w=z^2`, showing vertical and horizontal grid lines mapping to opposite-opening parabolas, the axes mapping to opposite rays, and perpendicular tangents at noncritical crossings. Mark the origin as critical (`f\'(0)=0`). The local tile is text/formula only.
- **`ex-hyperbolic-disc-and-half-plane-geodesics` (lines 44, 48–63):** consider paired disc/upper-half-plane panels showing orthogonal-circle geodesics and diameters in the disc, vertical lines and real-axis-centered semicircles in the half-plane, with the Cayley map direction labeled. All four local tiles are text/formula only.

## Existing diagram checks and limitations

No existing diagrams were found, so there were no diagram orientations, indices, signs, or map labels to validate. The scan found no TikZ/tikzcd syntax or Scratch markers in the 140 frozen bodies. Review is limited to frozen local material; no mathematical correctness review was attempted beyond identifying the source-supported relationships a proposed diagram should depict.
