# Information Theory rendering audit — lane 02

Reviewed all 47 assigned items and all 68 screenshot tiles at original resolution. Each assigned PNG was opened individually with tools.view_image. I checked the frozen title and full ItemBody, local rendered HTML, and internal reference titles. Source, local HTML, and screenshot SHA256 values and tile dimensions match the frozen assignment and screenshot metadata. No source items or publication statuses were changed. Review used local evidence only; no live website, HTTP(S), app edits, builds, tests, or gates.

## Confirmed rendering defects

1. **cor-smb-limit-is-conditional-entropy-under-ac** — Statement, source line 32. The rendered opening statement prints `E[g_infinity|I]` as literal ASCII. The proof later renders `$E[g_\infty\mid\mathcal I]$` correctly. Typeset the statement expression using the source’s established notation. Screenshot: `screenshots/cor-smb-limit-is-conditional-entropy-under-ac--01.png`.
2. **thm-stationary-entropy-rate-limit** — Statement, source line 28. The tile prints `n^{-1}H(X_0,...,X_{n-1})` literally; the proof uses rendered TeX. Typeset the block entropy formula in inline math. Screenshot: `screenshots/thm-stationary-entropy-rate-limit--01.png`.
3. **thm-huffman-coding-is-prefix-optimal** — Proof technique banner, source line 52. The intended uppercase banner displays the contained math literally as `$M\GE2$`. Preserve the uppercase banner while ensuring the expression is typeset without uppercasing TeX commands. Screenshot: `screenshots/thm-huffman-coding-is-prefix-optimal--01.png`.

## Rejected visual observations

The coordinator individually rechecked these exact tiles at original resolution and confirmed the full leading text is present. The initial clipping observations are rejected:

- `ex-it-qubit-von-neumann-entropy--01.png` — heading and opening example.
- `def-it-finite-source-privacy-utility-region--01.png` — opening statement.
- `ex-it-dmc-one-shot-error-bound--01.png` — opening example.
- `lem-it-flagged-state-entropy-formula--01.png` — opening statement; the leading E is present.
- `lem-it-multisource-typicality-probability--01.png` and `lem-it-multisource-typicality-probability--02.png` — both tiles, including the continuation tile.

## Diagram candidates

These are source-backed editorial candidates, not defects. No existing TikZ diagrams or diagram mismatches were found in the assigned items.

1. **ex-binary-additive-strong-interference-capacity** — source lines 27–30; two-dimensional rate region. Plot `R_1` against `R_2` and shade the triangle with vertices `(0,0)`, `(1,0)`, and `(0,1)`, checking `R_1,R_2 ≥ 0`, each individual bound by 1, and the sum-rate edge `R_1+R_2=1`. Label bits per use. The text and proof already establish the region exactly.
2. **thm-it-two-user-real-awgn-mac-capacity-region** — source lines 26–28; two-dimensional rate region. Label axes `R_1,R_2` in nats/use, the individual caps `C_j=(1/2)ln(1+P_j/N)`, and the sum cap `C_12=(1/2)ln(1+(P_1+P_2)/N)`; shade the nonnegative intersection and mark the overline as closure. The formulas are complete; a region plot would make their intersection easier to read.
3. **thm-it-ozarow-awgn-mac-feedback-capacity-region** — source lines 26–28 and 40; parameterized rate region. Depict the union over `0≤ρ≤1` of the individual constraints `R_j≤(1/2)ln(1+P_j(1−ρ²)/N)` and sum constraint `R_1+R_2≤(1/2)ln(1+(P_1+P_2+2ρ√(P_1P_2))/N)`, marking `ρ_*` as named by the source. Keep parameters symbolic or state illustrative values. This is optional; the source already supplies the formulas and proof.

## Coverage and checks

The JSON contains exact per-item source and local HTML hashes, every assigned screenshot tile path/hash/dimension, and review status. Coverage includes 47 items and 68 tiles; 19 items have multiple tiles. Screenshot metadata reports 0 KaTeX errors, 0 diagram failures, 1849 rendered KaTeX blocks, and 0 TikZ diagrams. No parser error does not detect the three literal-ASCII cases above. The five initial clipping observations were rejected after the coordinator rechecked the exact tiles at original resolution. Linked reference titles wrap as blocks by design; that presentation and standalone punctuation wraps were not reported as defects.
