# Numerical Optimization, Inverse Problems and Uncertainty Quantification — lane 08

## Scope and coverage

Reviewed all 72 assigned frozen titles and complete ItemBodies across 106 screenshot tiles. I opened every tile individually with `tools.view_image(detail="original")`; no collage or resized image substituted for original-resolution review. Per-item frozen source hashes, receipt-listed tile paths and hashes, pixel dimensions, and original-resolution attestations are in [lane-08.json](lane-08.json).

This is recovered body-preview coverage. It checks rendered titles and complete bodies in local preview screenshots, including proof, verification, remarks, visible references, and diagrams where present. It does not establish successful canonical YAML parsing, native-loader coverage, or production route/navigation coverage. The two strict YAML metadata blockers in [frontmatter-parse-blockers.json](frontmatter-parse-blockers.json) are recorded separately; neither is assigned to lane 08, and neither is a visual defect.

## Rendering findings

No confirmed LaTeX or TikZ rendering defects were found. All assigned screenshot receipts report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. The visible formulas, tables/cards, references, and item bodies rendered legibly. A possible left-edge crop impression in the conic-model preview was checked against an exact pixel crop of the standalone original tile; the opening text was present, so it is not a finding.

## Uncertain editorial diagram candidates

These are optional candidates supported by the source, not rendering defects or required repairs.

- [ex-local-identifiability-does-not-imply-global-identifiability](snapshots/ex-local-identifiability-does-not-imply-global-identifiability.md:34): The source states that `F(θ)=θ²` is locally identifiable at `θ₀=1` and then verifies `F'(1)≠0` and `F(1)=F(-1)` (lines 46–48). A small function-graph diagram could mark an injective neighborhood of `1` and the distinct global alias `−1`, keeping local and global claims distinct.
- [alg-finite-image-string-method](snapshots/alg-finite-image-string-method.md:30): The source updates interior images by projected force and redistributes them at equal cumulative arc-length fractions while holding endpoints fixed (lines 30–35). A path schematic could show the initial chain, projected-force update, updated polygon, and equal-arc-length target positions. It should preserve the collision-free region and the stated finite-status caveat.

## Evidence limits

This was a visual rendering audit of the frozen local previews. It did not independently audit mathematical correctness, bibliography widgets, production navigation, or source metadata loading. The machine receipts aid coverage and hash verification but do not replace the per-tile visual review recorded above.
