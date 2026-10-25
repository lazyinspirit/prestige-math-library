# Differential Geometry visual audit — lane 10

## Coverage

Reviewed all **159 assigned items** and opened all **208 screenshot tiles** individually with original-resolution viewing. Each item's frozen title and full body were compared through the source and snapshot; rendered HTML and tile hashes were checked. All source, snapshot, HTML, and tile hashes match the assignment and capture metadata. No item or tile is unreviewed; no drift was found. Per-item and per-tile SHA256 values are recorded in `lane-10.json`.

The 159 captures report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. The rendered inline/display math was legible across the inspected material. Wikilink titles displayed as block lines are expected renderer behavior. I found no confirmed clipping: each tile was opened alone, and consecutive screenshot tiles use overlapping vertical slices. There were no reference-ID leaks.

## Rendering findings

- **Raw title formula:** [ex-a-vector-field-with-finite-time-escape.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-a-vector-field-with-finite-time-escape.md:4) displays the ASCII string `x^2 d/dx` in the card heading; the statement below typesets the same vector field. This is an optional title typography issue. Evidence: `screenshots/ex-a-vector-field-with-finite-time-escape--01.png`.
- **Raw MathMarkdown in CSS technique banners:** The expected uppercase banner treatment also uppercases/leaks formula source in three items: [ex-gauss-bonnet-for-a-spherical-cap.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-gauss-bonnet-for-a-spherical-cap.md:77), [thm-hessian-comparison-for-distance-under-sectional-curvature-bounds.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-hessian-comparison-for-distance-under-sectional-curvature-bounds.md:103), and [thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound.md:88). Their standalone original tiles show literal `$`/TeX commands instead of formatted math. Tile paths and SHA256s are in the JSON report.

## Diagram review

No existing embedded TikZ or diagram assets were found in the lane. The two uses of “diagram” in the sources concern Mayer–Vietoris commutative diagrams rather than figures, so there were no existing drawn maps, orientations, indices, or signs to validate.

Two source-supported candidates are recorded in the JSON:

1. [cex-a-map-with-two-preimages-but-degree-zero.md](/home/lazyinspirit/Projects/prestige-math-library/items/cex-a-map-with-two-preimages-but-degree-zero.md:27) has an explicit regular value with preimages at `[0]` and `[1/2]` and derivative signs `+1` and `−1` (lines 47–49). A small circle-map schematic could show why the unsigned count is two while the degree is zero. I checked that the phase range is only `[-1,1]`, so the drawing should not imply the map is onto the target circle.
2. [thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p.md:59) explicitly defines the radial domain `D_p={tv:0<t<c_p(v)}` and its exponential-map diffeomorphism to `M\({p}∪Cut(p)` (lines 64–69); the proof establishes the key set and map properties at lines 117–129. A paired schematic could label the direction-dependent excluded cut-time boundary, `p`, `Cut(p)`, and the diffeomorphism without suggesting the cut locus is smooth.

## Targeted mathematical checks

The signed degree example's orientation and local signs agree with its explicit formula. The spherical-cap Gauss–Bonnet example uses increasing longitude as the positive boundary direction; its curvature and boundary terms sum to `2π` with the displayed `kg=cot(theta0)/R` convention. The geodesic-curvature frame formula and Weingarten sign convention were also checked against their stated quarter-turn and shape-operator definitions and are consistent. Full per-item hash and capture coverage, source-supported candidates, and limitations are in `lane-10.json`.
