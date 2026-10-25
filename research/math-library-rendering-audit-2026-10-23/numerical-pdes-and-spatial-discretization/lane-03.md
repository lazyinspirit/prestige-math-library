# Numerical PDEs and Spatial Discretization rendering audit — lane 03

Reviewed all 114 assigned item titles and complete ItemBodies and all 231 receipt-listed screenshot tiles individually at original resolution. No collage or resizing was used. Current source files and frozen snapshots match the assignment hashes; all PNG hashes match their screenshot receipts. Per-item coverage and hashes are recorded in `lane-03.json`.

Review used only frozen local snapshots, receipts, and screenshots. No network/live-site access, production or publication changes, builds, tests, or gates were used.

## Confirmed rendering defects

### `ex-crouzeix-raviart-broken-gradient-norm` — unsupported TikZ rendering

Source: `items/ex-crouzeix-raviart-broken-gradient-norm.md`, lines 51–64.

The display block prints literal `tikzpicture` source where the unit-square split should appear. The prose and source geometry agree: the square is divided along `(0,0)` to `(1,1)`, with `K1` lower/right and `K2` upper/left. The receipt reports zero rendered TikZ and no KaTeX or diagram failures. I checked the diagram in its standalone original tile; its raw text wraps but is not clipped or overlapping.

Tile: `ex-crouzeix-raviart-broken-gradient-norm--01.png`, SHA-256 `fc567b6caba97dfab3b7e381d72d8af8b5db8fe7ebfb0cd06e8d37ae579ce05b`.

### `ex-na-unit-square-mini-mesh-family` — unsupported TikZ rendering

Source: `items/ex-na-unit-square-mini-mesh-family.md`, lines 33–45.

The display block prints literal `center`/TikZ source in place of the stated `n=2` unit-square mesh. The stated lower-left to upper-right diagonals agree with the source geometry. The receipt reports zero rendered TikZ and no KaTeX or diagram failures. The standalone original tile shows no clipping or overlap.

Tile: `ex-na-unit-square-mini-mesh-family--01.png`, SHA-256 `469bf8203ca2ad38ab8c300fc2a41280a8faea4ae60d80416b378a540700bc9b`.

### `ex-periodic-one-dimensional-pic-cic-charge-deposition` — unsupported TikZ rendering

Source: `items/ex-periodic-one-dimensional-pic-cic-charge-deposition.md`, lines 38–52.

The local CIC stencil display block prints literal TikZ source instead of the diagram. The mathematical annotations agree with the described particle position `X=h/3` and weights `2/3,1/3`. The receipt reports zero rendered TikZ and no KaTeX or diagram failures. I checked both original tiles and their overlapping/local crop; the raw source is neither clipped nor overlapping.

Tiles: `--01.png`, SHA-256 `b0a6ccf626722776aa4ebd0927894ed85214698acf107fb44ee7384a0a46768e`; `--02.png`, SHA-256 `73f630f0ce8efa15f69a40c41798f0b94dd5af9352ace463d03d2d14f0f355ee`.

## Diagram mathematics and other visual checks

The three source diagrams have geometry consistent with the nearby text; the confirmed defect is that the display renderer exposes TikZ source rather than drawing it. I found no additional confirmed LaTeX/TikZ defects or clipping/overlap in the reviewed tiles. Receipt-reported KaTeX errors and diagram failures are empty for these three affected items.

## High-likelihood missing diagram (editorial recommendation)

### `cex-na-graded-mini-mass-initialization-pressure-rate`

Source: `items/cex-na-graded-mini-mass-initialization-pressure-rate.md`, especially lines 98, 112, 226, 262, and 282.

This long, text-only counterexample defines a delicate multiscale mesh construction. A compact three-panel schematic would help readers retain the relations among:

- the mirrored alternating-radius root fans in the pentagonal domain and their attachment triples on fan-side middle thirds (line 98);
- a recursively nested child with exactly seven prescribed boundary vertices, protected fan cones, and reserve holes (line 112);
- the pressure crease from the existing root to the existing top-right corner, avoiding protected fan interiors and holes, and the common uniform annulus where cutoffs vary (lines 262 and 282; related transition discussion at line 226).

This is an editorial aid, not a confirmed rendering defect: the prose specifies the construction, but the scale, recursion, and geometric exclusions are difficult to track without a figure.

## Frontmatter parse blocker

`thm-chebyshev-lobatto-interpolation-near-best-weighted-error` has the category’s recorded strict YAML blocker at source lines 17–20: an indented stale `judge:` subtree follows root-level `axiom_use`. This item is labeled `recovered-body-preview` in `lane-03.json`; the preview recovery removes only that invalid subtree and preserves the body and original source bytes. Canonical source metadata parsing remains blocked. This parser issue is separate from the visual findings above.
