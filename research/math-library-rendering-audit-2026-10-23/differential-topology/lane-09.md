# Differential Topology visual audit — lane 09

Reviewed 97 assigned items and all 174 listed PNG tiles individually with `tools.view_image` at original resolution. Each frozen title and complete ItemBody was checked. Current source and snapshot bodies are byte-identical for 97/97; source and HTML hashes match the assignment for 97/97 and 97/97. All 174 tile hashes match their screenshot manifests.

## Confirmed rendering finding

- **lem-a-smooth-three-manifold-with-h-one-z-two-and-h-two-zero-does-not-embed-in-s-four** — The title visibly prints `H_1` and `H_2` with literal underscores. Source line 4. Screenshot: `screenshots/lem-a-smooth-three-manifold-with-h-one-z-two-and-h-two-zero-does-not-embed-in-s-four--01.png`. Suggested repair: delimit the homology expressions as inline math.

## Separate typography finding

- **lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root** — Fact [F1] exposes two authored internal IDs as monospace slugs (source line 42). Replace them with linked display titles if desired. This is an authoring typography issue, separate from rendering defects.

## Optional diagram candidates

- **cex-geometric-cardinality-is-not-homotopy-invariant** — The explicit circle family and axis yield two opposite-sign crossings at `s=0`, one tangency at `s=1`, and no crossings at `s=2` (source lines 47, 55, 57, 59). An optional three-panel TikZ diagram could show these events and the local signs. The exact formulas confirm the two roots and opposite determinant signs for `s<1`; the `s=1` slice is tangent. Screenshot tiles: `screenshots/cex-geometric-cardinality-is-not-homotopy-invariant--01.png`, `--02.png`.
- **cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly** — The torus example gives `A=S^1×{0}` and the slope-two graph, with two intersections each of sign `+1` (source lines 54, 58, 60). An optional torus fundamental-square diagram could show both crossings and their positive ordered tangent determinants. Screenshot: `screenshots/cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly--01.png`.

These are uncertain editorial additions, not rendering defects. No diagram is necessary for the statements or proofs.

## Diagram and rendering coverage

No lane 09 item contains a TikZ picture; the renderer sidecars report zero TikZ output and zero diagram failures. There were no existing diagram maps or signs to validate. KaTeX sidecars report no errors. No substantive clipping was observed in the standalone original tiles; the visible breaks are scroll-tile boundaries with overlap. No assigned item contains a Scratch section. Technique banners are expected to be uppercase, and wikilinks intentionally render as block lines.

Per-item and per-tile SHA256 values, renderer sidecars, and exact item coverage are recorded in `lane-09.json`.
