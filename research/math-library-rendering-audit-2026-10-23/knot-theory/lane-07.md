# Knot Theory visual audit — lane 07

Reviewed all 94 assigned titles and complete rendered ItemBodies in the frozen local previews. The assigned PNG tiles were opened individually at original resolution. The HTML text was cross-checked against the frozen snapshots and assignment hashes. No live website or external URL was accessed.

## Findings

Eight confirmed rendering findings affect seven items. The JSON contains exact source lines, excerpts, screenshot hashes, and repair suggestions.

- `def-cdr-satellite-concordance-categories`, line 45: mathematical notation is authored as unmarked ASCII, including `C_sm`, `C_top`, `R_n`, `S^3`, and `H_i`.
- `ex-borromean-link-milnor-triple-invariant`, lines 69–106: the TikZ source is rendered literally.
- `ex-knot-kt-40-worked-cases`, lines 51–59: its TikZ-cd block fails and is replaced by an error panel and source.
- `lem-figure-eight-ideal-gluing-and-cusp-completeness`, lines 106–127: the cusp-strip diagram fails; the preceding tetrahedron diagram renders.
- `lem-good-linear-size-exterior-triangulation-from-diagram`, lines 46–54: the crossing TikZ source is rendered literally.
- `lem-alexander-one-knot-produces-a-good-group-disk-obstruction`, lines 102, 104, 106, 108, and 120: several proof paragraphs contain unmarked ASCII formulas and indices.
- `lem-l2-rho-invariant-bordism-independence`, line 44: the signature formula has literal underscore/caret notation.
- `lem-ni-holomorphic-disk-and-jsj-analytic-inputs`, line 50: `R_+` and `R_-` remain baseline text.

The coordinator rechecked the two alleged title-clipping tiles at original resolution and confirmed both full titles are visible; those observations were withdrawn. The exact tiles and recheck notes remain in `lane-07.json`.

No reference-title leak, Scratch section, or incorrect map/sign/index in a rendered diagram was found. The page-style reference links render as blocks as intended.

## Optional diagram candidate

`def-instanton-surgery-triangle-data`, line 41, explicitly defines a cyclic surgery triad. An optional peripheral-torus schematic can show the three primitive slopes, their pairwise single intersections, the fillings `Y_0`, `Y_1`, `Y_∞`, and the directed cobordism cycle. Exact orientation and labeling checks are in the JSON; this is explanatory and does not claim the Floer exact triangle.

## Coverage

Per-item source and HTML hashes, frozen snapshot hashes, all PNG paths and hashes, dimensions, and offsets are in `lane-07.json`. Existing rendered diagrams checked include the toroidal grid, arc surgery, braid closures, peripheral torus basis, and Schubert bridge-spanning schematic.
