# Lane 09 rendering audit

Reviewed all 100 assigned frozen titles and complete ItemBodies, and all 139 receipt-listed screenshot PNGs individually with `tools.view_image(detail="original")`. No collage or downscaled review was used. Receipt hashes were checked against the PNG bytes. Full per-item body line ranges, snapshot hashes, tile paths, receipt hashes, and original-resolution attestations are in [lane-09.json](lane-09.json).

## Findings

1. **R-01 — high: TikZ diagram render failure.** The commutative-square diagram in `prop-circulants-are-unitarily-diagonalized-by-the-canonical-dft` appears as a red render error and literal source in the original tile `screenshots/prop-circulants-are-unitarily-diagonalized-by-the-canonical-dft--01.png` (SHA-256 `ccbea346a1dc5aa66bd3b1c8281a370a84fcbe69dcae5d9559a28c167adf643b`). Frozen snapshot lines 42–47 wrap `\begin{tikzcd}...\end{tikzcd}` inside a `tikzcd` fence, likely duplicating the environment. The intended square and maps are mathematically correct and match the stated Fourier identity.
2. **R-02 — medium: control-label crowding.** In `ex-single-new-knot-insertion-preserves-linear-curve`, the lower row's three circles and labels collide in the full-context original tile `screenshots/ex-single-new-knot-insertion-preserves-linear-curve--01.png` (SHA-256 `b8245cb977b892488fa580f747e9ee15cbe05bd395b3e10c4c0ace7bab586043`). The copy/blend arrows and values are correct; add horizontal spacing or reduce node/label footprint. This is not inferred from a tile boundary.

## Diagram candidate

`lem-na-mixed-radix-cooley-tukey-factorization` is a high-likelihood optional diagram candidate because the explicit index split, two transform stages, twiddle, and output permutation are central and dense. Any diagram should retain `j=u+rv`, `k=k2+sk1`, the negative-sign twiddle and unitary factors, and the no-coprimality condition. This is an editorial suggestion, not a defect.

## Source metadata recovery

`lem-francis-double-shift-bulge-chase-matches-explicit-qr` has the strict YAML parse blocker recorded in `frontmatter-parse-blockers.json`. Its frozen title and body received **recovered body-preview coverage** after the preview fallback removed only malformed `proof_strategy`/judge metadata. This does not establish canonical source parsing or native-loader coverage. The metadata blocker is separate from visual review; no visual defect was identified there.

No other genuine LaTeX/TikZ rendering or diagram-mathematics defects were found in the reviewed lane.
