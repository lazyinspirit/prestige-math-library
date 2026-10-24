# Inverse Problems rendering audit — lane 02

## Coverage

- Assignment: `research/math-library-rendering-audit-2026-10-23/inverse-problems/assignment-02.json`
- Reviewed 53/53 frozen titles and full ItemBody texts.
- Opened 113/113 assigned screenshot tiles individually with `tools.view_image` at original resolution. Per-item source, snapshot, HTML, and per-tile SHA256 values are recorded in [lane-02.json](lane-02.json).
- Compared the frozen source and HTML hashes to the assignment and each tile to its screenshot manifest. All hashes match; snapshots are byte-identical to their source files. All lane values are `02`.
- The screenshot manifests report zero KaTeX errors, six TikZ diagrams, and one diagram failure. No Scratch section or reference-title leak was found.

## Rendering findings

1. **Confirmed raw TikZ rendering defect:** [alg-ip-pnp-ista-with-denoiser](../../../items/alg-ip-pnp-ista-with-denoiser.md:47) displays the full `~~~tikz` block as monospace source in its local HTML and tile 01. Render the flow nodes and arrows for `x_{t-1} → z_t=x_{t-1}-γ∇g(x_{t-1}) → x_t=\widetilde D_σ(z_t)`.
2. **Confirmed diagram failure:** [ex-ip-38-scope-and-boundary-cases](../../../items/ex-ip-38-scope-and-boundary-cases.md:51) shows “diagram failed to render” and raw TikZ in tile 01. The omitted diagram should show the unit disk, radius-1/2 support, and measured diameter chord from `(-1,0)` to `(1,0)`.
3. **Confirmed diagram layout defect:** [ex-ip-38-scope-and-boundary-cases](../../../items/ex-ip-38-scope-and-boundary-cases.md:67) renders the three concentric annulus circles, but the radius labels at lines 73–75 run across/crowd the ring outlines (tile 01). Move them to separate callouts outside the outer circle; retain the red direction arrow on the trapped `r=1` circle.

## Existing diagrams and scope

The analytic double-fibration arrow direction, identifiability commutative map, conjugate-antipode covector diagram, visible Euclidean Radon conormal diagram, and Gaussian MAP polar-factorization triangle match their source relations. No confirmed source-supported missing-diagram candidate remains in this lane: the source-supported diagram mentions have corresponding diagrams, including the two ex-ip-38 defects above. Body math otherwise renders correctly; plain prose wrapping and reference links displayed as separate blocks were not counted as defects. No clipping defect was confirmed, and no standalone image item was assigned. This review used only the frozen local snapshot and local HTML; it makes no production-route claim and changed no item, app, or publication status.
