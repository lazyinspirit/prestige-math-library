# Differential Geometry visual audit — lane 06

## Scope and coverage

Reviewed all 160 assigned items and their complete frozen ItemBody content, titles, and page placements. Opened all 217 revision-2 screenshot tiles individually at original resolution. Source, frozen snapshot, HTML, screenshot receipts, and tile SHA256 values are recorded per item in [lane-06.json](lane-06.json). Every source matches its frozen assignment hash and snapshot; every HTML file matches its assignment hash; every tile matches its receipt. No item source, application, or publication status was changed, and no live HTTP(S) site was accessed.

## Confirmed rendering defects

- `ex-hyperbolic-geodesic-triangle-area-defect` (source line 67): The proof technique banner contains inline LaTeX $K\equiv-1$. The CSS uppercase technique banner renders the $...$ source literally instead of typesetting it.
- `ex-model-jacobi-fields-in-positive-zero-and-negative-curvature` (source line 82): The proof technique banner contains inline LaTeX for the model field and Jacobi equation. The CSS uppercase technique banner renders the $...$ source literally instead of typesetting it.
- `thm-index-lemma` (source line 176): The proof technique banner contains inline LaTeX for the index-form identity. The CSS uppercase technique banner renders the $...$ source literally instead of typesetting it.
- `thm-zero-th-de-rham-cohomology-is-locally-constant-functions` (source line 32): The rendered Facts & Assumptions prose exposes raw item identifiers where a readable reference title should appear: def-closed-and-exact-differential-forms; def-cohomology-object-of-a-cochain-complex.
- `lem-divergence-form-identity` (source line 31): The rendered Facts & Assumptions prose exposes raw item identifiers where a readable reference title should appear: lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary; prop-divergence-is-well-defined-and-has-the-coordinate-formula.
- `ex-volume-density-in-polar-coordinates` (source line 32): The rendered Facts & Assumptions prose exposes raw item identifiers where a readable reference title should appear: prop-coordinate-criterion-for-a-riemannian-metric; def-density-bundle-and-smooth-density; lem-the-riemannian-volume-density-is-coordinate-independent.
- `thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms` (source line 34): The rendered Facts & Assumptions prose exposes raw item identifiers where a readable reference title should appear: thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms.

The raw-ID findings are literal identifiers in source prose, not a KaTeX or TikZ failure. The local audit preview visibly prints them; the category README notes that its auxiliary reference-title lookup is incomplete, so production-route behavior is outside this evidence.

## Diagrams, math layout, and limitations

No TikZ diagrams or other displayed diagrams appeared in the lane, and no existing diagram map, orientation, sign, or index could be checked. The only source-supported missing-diagram candidate is optional: a schematic round sphere for `cex-a-conjugate-point-at-which-there-are-many-geodesics`, with antipodes and several meridians, as specified and checked in the JSON. The proof does not need it. KaTeX errors, TikZ failures, and diagram failures are all zero. No clipping was confirmed from standalone original tiles; apparent cuts at tile edges continue in adjacent tiles.

Optional title typography is recorded separately: one title spells $R^n$ as plain ASCII. The uppercase CSS technique banner styling itself is expected; only the raw inline math within three banners is defective.
