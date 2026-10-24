# Differential Topology visual audit — lane 06

## Scope and coverage

Reviewed all 98 assigned titles and complete frozen ItemBody snapshots. Opened all 178 assigned screenshot tiles individually at original resolution. The source, snapshot, HTML, screenshot receipt and every tile SHA256 are recorded per item in [lane-06.json](lane-06.json). Hash mismatches: 0. No live HTTP(S) site, item, application or publication status was changed.

## Confirmed rendering defects

- `lem-adapted-descending-field-near-a-compact-morse-band` (source line 32): A plain item identifier appears after the display reference in [F1]. The rendered Facts & Assumptions text prints `def-smooth-manifold` verbatim.
- `lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism` (source line 30): Two plain item identifiers appear in [F1]. Both render verbatim in the definition text.
- `lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum` (source line 41): The sibling supplier is referred to by raw ID in [F3], and the raw ID is visible in the rendered prose.
- `lem-common-plaque-lifted-caps-admit-nested-source-disk-inclusions` (source line 41): The sibling supplier is referred to by raw ID in [F2], and the raw ID is visible in the rendered prose.
- `lem-null-simple-center-frontier-supplies-the-exact-cancellation-scalar` (source line 38): Three sibling suppliers are named as raw IDs in [F3], and those IDs are visible in the rendered prose.

These are raw item IDs in source prose that are printed literally by the local preview. KaTeX parse errors: 0. TikZ count: 0. Diagram failures: 0. The CSS uppercase technique banners are expected; no raw-math technique-banner defect was confirmed. Wikilinks intentionally render as block lines.

## Diagrams, math layout, and limitations

No existing TikZ or other displayed diagrams appeared, so there were no existing diagram maps, orientations, indices or signs to verify. Three optional, source-supported missing-diagram candidates are recorded in the JSON: a Whitney circle with its chosen arcs and endpoints, the distinct framed surgery decompositions in the product-of-spheres example, and the mapping torus seam with inverse monodromy. Their labels and directions are checked against the source equations.

No clipping was confirmed from standalone original-resolution tiles. Apparent cuts in a full-page capture are tile boundaries with continuation in the next tile. Formula typography was readable; no raw ASCII formula defect or optional title-typography issue was confirmed. This is a visual audit, not a complete proof review.
