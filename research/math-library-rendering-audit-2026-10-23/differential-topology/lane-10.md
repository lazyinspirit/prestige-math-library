# Differential Topology visual audit — lane 10

## Coverage

Reviewed all **97 assigned items** and opened all **185 screenshot tiles** individually at original resolution. Frozen titles and full ItemBody captures were reviewed; source, snapshot, HTML, capture metadata, and tile hashes were checked. No drift or unreviewed item/tile was found. Per-item source, frozen-body, snapshot, HTML, capture metadata, and per-tile SHA256 values are in [lane-10.json](lane-10.json).

The capture metadata reports zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. MathMarkdown formulas were legible in the inspected cards. Wikilink titles appearing on their own lines are expected renderer behavior. CSS uppercase technique banners are expected; none of the inspected lane's technique values exposed raw formula source. Screenshot tiles overlap vertically; checking each original tile individually showed continuation rather than clipping. No scratch links or reference-ID leaks were found.

## Rendering findings

- **Confirmed raw formula text in a Statement:** [lem-paired-regular-disk-sweep-is-open-across-its-base-gluing.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-paired-regular-disk-sweep-is-open-across-its-base-gluing.md:32) writes `G:D×[a,b]→M` and `U⊂D` without MathMarkdown. The standalone original tile shows these as plain text, unlike the typeset formulas in its Facts and Proof. Evidence and tile hash: `screenshots/lem-paired-regular-disk-sweep-is-open-across-its-base-gluing--01.png` in the JSON.
- **Optional title typography:** [lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle.md:4) uses plain `R^n` and `(n-m)` in the title.
- **Optional title typography:** [thm-index-of-a-nondegenerate-fixed-point.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-index-of-a-nondegenerate-fixed-point.md:4) uses plain `det(I-Df)` in its title; the Statement typesets the determinant.

## Diagram review

No embedded TikZ or existing drawn diagrams were reported in the lane. I therefore found no existing drawn maps, orientations, indices, or signs to validate. Four source-supported diagram candidates, with exact source lines and suggested labels, are recorded in the JSON. They are candidates rather than required figures:

- [cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero.md](/home/lazyinspirit/Projects/prestige-math-library/items/cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero.md:45): a four-interval compactified moduli-space schematic could show the eight broken endpoints and opposite coherent endpoint products. The source calculation gives `δ²a=8d` for all-plus signs.
- [cex-symmetric-torus-height-flow-is-not-morse-smale.md](/home/lazyinspirit/Projects/prestige-math-library/items/cex-symmetric-torus-height-flow-is-not-morse-smale.md:27): a torus or annular schematic could mark the inner equator, saddle endpoints, flow direction, and coincident stable/unstable branches. The displayed metric and field support the claimed shared tangent `R∂u`.
- [ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold.md:47): a local finger-move schematic could show the two transverse intersections and their opposite signs. The source coordinates put them at `e₁=±ρ`; the determinant changes by the sign of `2e₁`.
- [lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle.md:32): a two-panel figure could show the occupied saddle quadrant, cut arc and directed boundary, then the resulting disk with `q` excluded and `c_K−s_K=1`.

## Targeted mathematical checks

The signed Morse count agrees with the stated four intervals and gives `2(2d)+2(2d)=8d`. The torus equations make `v=π` invariant and yield the same one-dimensional tangent for the indicated stable and unstable branches. The finger-move coordinates give opposite local intersection signs. The homoclinic-disk proof's local field, cut-arc direction, and positive boundary turning agree with its index equation. Further per-item coverage and capture limitations are explicit in the JSON.
