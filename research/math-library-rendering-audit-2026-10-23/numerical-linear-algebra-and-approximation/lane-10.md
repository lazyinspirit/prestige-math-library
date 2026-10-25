# Numerical Linear Algebra and Approximation rendering audit — lane 10

Reviewed all 100 assigned frozen item titles and complete ItemBodies, and all 140 receipt-listed screenshot tiles individually at original resolution. Per-item and per-tile coverage, source/snapshot/HTML hashes, body hashes, section lists, dimensions, tile hashes, and original-resolution attestations are in `lane-10.json`. No item or tile was left unreviewed. Source, snapshot, and rendered HTML hashes match the frozen assignment for every item.

One confirmed rendering defect appears in the authored TikZ diagram in **def-na-finite-mps-state-and-hermitian-hamiltonian**: the pale center box’s `$X_{k,k+1}$` label inherits the light foreground and becomes unreadable against its light fill. The source’s virtual-bond and physical-index labels match the stated two-site center. No other assigned authored TikZ/SVG/embedded diagrams were found. No confirmed clipping defect was found; tile boundaries were checked against adjacent original-resolution tiles.

## Optional source typography

These are source-authored plain-text mathematical strings faithfully reproduced by the renderer, not renderer failures.

- **cex-floater-hormann-cd1-seminorm-rate-fails** — snapshot line 4: `C^(d+1)` appears literally in the title. Suggested repair: `$C^{d+1}$`.
- **ex-full-rank-least-squares-normal-equations-versus-qr** — snapshot lines 34 and 47: matrix tuples, `A^T A`, and caret powers such as `2^-27` appear as plain text. Suggested repair: mark the formulas as MathMarkdown.
- **ex-ill-conditioned-design-stability-versus-forward-error** — snapshot line 35: the diagonal matrix, vector notation, transpose, and caret powers appear as plain text. Suggested repair: mark the formulas as MathMarkdown.
- **thm-matern-interpolation-fill-distance-error** — snapshot line 4: title exponent `h^ν` is literal plain text, while the body uses typeset fill-distance notation. Suggested repair: use MathMarkdown in the title.

## Optional diagram candidates

These are source-supported visual aids, not confirmed omissions. The JSON records exact source lines, intended content, and image evidence.

- **ex-cocircular-four-site-lexicographic-tie** — draw the counterclockwise square sites and the AC-to-BD diagonal flip, optionally with the coplanar lift. Keep the four-site universe separate from the later synthetic augmentation.
- **ex-two-dimensional-poisson-nested-dissection-cost** — draw a small grid with a median row/column separator and four recursive child rectangles; label it schematic so it does not imply a unique parity-dependent separator.

Lane 10 has no assigned item among the category’s ten malformed-frontmatter preview recoveries. No recovered-preview or native-loader coverage is claimed for those out-of-lane items. No HTTP(S)/live website access, production source or application edit, library content edit, build, test, gate, publication-status change, or Git operation was performed.
