# Lane 02 — Numerical Linear Algebra and Approximation

**Coverage:** 100 assigned items; 138 receipt-listed PNG tiles, each opened individually with `view_image(detail="original")`. Frozen snapshot and HTML hashes were checked against the assignment. This is recovered body-preview coverage and does not claim canonical parsing or native loader coverage. None of lane 02’s assigned items is among the ten source-metadata recovery items.

## Rejected viewer observations

Coordinator reopened each standalone original-resolution tile and confirmed its initial title glyph is present at the normal left inset. I reopened each tile individually at original resolution and confirmed the same. These four earlier viewer observations are rejected; none is a rendering defect. Exact PNG hashes and coordinator recheck attestations are recorded in `lane-02.json` under `rejected_viewer_observations`.

- `ex-adaptive-simpson-misses-narrow-feature`: title begins “The Simpson…”; tile `screenshots/ex-adaptive-simpson-misses-narrow-feature--01.png`, SHA256 `26169f2f9d3f0a5b4f44c864a1857d63b87ce9de7c69dd4dee5a85ba02662f72`.
- `lem-ewald-pme-spline-alias-and-dft-normalization`: title begins “Exact…”; tile `screenshots/lem-ewald-pme-spline-alias-and-dft-normalization--01.png`, SHA256 `195ac4d90b3952f0eda2331e16f1c618e08ee3dd4739b99bcbadc2f55e9c972f`.
- `lem-floater-hormann-denominator-lower-bound`: title begins “Floater–Hormann…”; tile `screenshots/lem-floater-hormann-denominator-lower-bound--01.png`, SHA256 `616e968e092eccacb3ae897e93efc7c6019033e302407f328821a9523a4defe1`.
- `thm-three-dimensional-laplace-expansion-error-and-work`: title begins “Three-dimensional…”; tile `screenshots/thm-three-dimensional-laplace-expansion-error-and-work--01.png`, SHA256 `50e5bfcea132b6bb5f502e975a01c5b5656260ce7d2adfdccc90ef28dd5507bf`.

## Existing diagram checks

No assigned item has a rendered TikZ diagram: all 100 receipts show `tikz_count: 0`, no diagram failures, and no KaTeX errors.

## High-likelihood diagram candidates

### `def-duffy-reference-triangle-map`

Frozen snapshot line 30: The definition is built around the geometric map from the unit square to a triangular domain; a compact diagram would make the image, vertex, and collapsed edge immediately legible alongside the Jacobian.

Proposed diagram: Draw S=[0,1]^2 with r horizontal and s vertical, and T={(x,y):0≤y≤x≤1}. Show D(r,s)=(r,rs), axes/vertices (0,0),(1,0),(1,1), the s=0 and s=1 edges mapping to y=0 and y=x respectively, and the full edge r=0 collapsing to the origin. Label determinant r and state the map has positive orientation for r>0; show no claim of inverse at the collapsed vertex.

### `def-three-dimensional-delaunay-and-weighted-regular-lower-hull`

Frozen snapshot line 30: The definition introduces the three-dimensional regular subdivision by lifting weighted sites into R^4 and projecting lower faces; this geometric construction is difficult to picture from formulas alone.

Proposed diagram: Show a weighted site (p,w) in R^3 mapping to p-hat=(p,||p||^2−w) in R^4. Use a schematic vertical coordinate z=ell(x), mark a lower supporting hyperplane and a lower face, and project its vertices back to a tetrahedral/simplex cell in R^3. Keep the caption explicit that the 4D view is schematic; distinguish the original lift from the fixed-universe lex-refined lift, and do not assert a tetrahedral output on lower-dimensional or degenerate branches.

## Coverage notes

All 100 titles and complete ItemBodies were reviewed. Every tile path, receipt SHA256, and original-resolution attestation is recorded in `lane-02.json` under `coverage[].tile_attestations`. No other genuine LaTeX/TikZ display defects were identified.
