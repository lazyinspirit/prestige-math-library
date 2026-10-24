# PDE visual audit — lane 10

## Coverage

Reviewed all **94 assigned items** and opened all **185 screenshot tiles** individually at original resolution. Each frozen title and complete ItemBody was checked against the local HTML and all receipt-listed captures. Source, snapshot, HTML, receipt, and tile SHA-256 values are recorded in [lane-10.json](lane-10.json); source/snapshot/HTML hash mismatches: 0; tile/receipt hash mismatches: 0. No assigned item or tile remains unreviewed.

The receipts report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. Rendered math is legible in the reviewed cards. The numbered tile sequences were checked for continuation where they overlap; no clipping was confirmed. An initial clipping impression on the long ACL definition was rejected after exact standalone original-resolution recheck; the tile visibly includes the full final sentence. The tile hash and recheck are recorded under `rejected_observations` in the JSON.

## Rendering findings

- **Unrendered technique math:** [lem-translation-estimate-for-w-one-p-functions.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-translation-estimate-for-w-one-p-functions.md:62) shows literal `$W^{1,p}$` in its uppercase proof-technique banner; evidence tile `screenshots/lem-translation-estimate-for-w-one-p-functions--02.png`.
- **Unrendered technique math:** [lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed.md:46) shows literal `$K_g$` in its uppercase proof-technique banner; evidence tile `screenshots/lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed--02.png`.

- **Unrendered technique math:** [ex-one-dimensional-euler-lagrange-equation.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-one-dimensional-euler-lagrange-equation.md:54) shows literal `$u$` in its uppercase proof-technique banner; evidence tile `screenshots/ex-one-dimensional-euler-lagrange-equation--02.png`.

## Diagram review

No existing TikZ diagrams or drawn diagrams were recorded in the lane, so there were no existing maps, orientations, indices, or signs to validate. Four optional source-supported diagram proposals are recorded in the JSON with exact claim lines, concrete map/geometry labels, and evidence tile hashes:

- [cor-one-dimensional-wave-domain-of-dependence.md](/home/lazyinspirit/Projects/prestige-math-library/items/cor-one-dimensional-wave-domain-of-dependence.md:35): the backward characteristic cone and its base interval `[x−ct,x+ct]`.
- [ex-tricomi-equation-changes-type.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-tricomi-equation-changes-type.md:30): the upper elliptic/lower hyperbolic regions and parabolic degeneracy line `y=0`.
- [cex-wave-energy-need-not-be-conserved-through-an-open-boundary.md](/home/lazyinspirit/Projects/prestige-math-library/items/cex-wave-energy-need-not-be-conserved-through-an-open-boundary.md:33): the translating support crossing the boundary of `(0,1)` with flux labels.
- [cex-interior-regularity-does-not-imply-boundary-regularity.md](/home/lazyinspirit/Projects/prestige-math-library/items/cex-interior-regularity-does-not-imply-boundary-regularity.md:34): the slit disc, both boundary banks, the `2π` tip angle, and the square-root map to a half-plane.

These are editorial candidates, not repair requirements. Three proof-technique banners visibly retain inline `$...$` source and are reported as confirmed rendering defects; the item bodies surrounding those banners typeset math normally. No TikZ source or diagram mathematics defect was confirmed. No builds, tests, gates, network access, or publication changes were performed.
