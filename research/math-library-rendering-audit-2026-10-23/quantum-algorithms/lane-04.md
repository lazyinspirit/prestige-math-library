# Quantum Algorithms visual audit — lane 04

## Scope and coverage

Reviewed all 72 assigned items against their frozen titles, complete Markdown snapshots, and local HTML previews. Opened all 107 receipt-listed PNG tiles individually at original resolution. The per-item ledger records frozen source and HTML hashes, each tile’s SHA-256 and dimensions, and its individual view attestation in [lane-04.json](lane-04.json).

The review checked math rendering, literal notation, diagram content and mathematical labels, and horizontal overflow in the local preview. No live site or production route was reviewed. No standalone item images were present, so standalone-image clipping was not applicable. Long text and inline formulas reaching the fixed preview edge were assessed as horizontal overflow rather than standalone-image clipping.

## Confirmed findings

- **Raw mathematical notation in statement:** `lem-qa-35-smp-prior-message-decomposition`, frozen line 30, displays the full matrix/vector statement with literal ASCII/Unicode notation (for example `C=AMBᵀ`, `||D||₂²≤0.01`, and `Σ_j`) rather than typeset math. Evidence: `screenshots/lem-qa-35-smp-prior-message-decomposition--01.png`.
- **Raw mathematical notation in proof:** `thm-qa-16-adversary-composition-lower-bound`, frozen lines 40 and 58–68, displays its assumptions and proof matrix, norm, index, and inner-product notation literally. The Statement is typeset; the Facts and proof are not. Evidence: `screenshots/thm-qa-16-adversary-composition-lower-bound--01.png` and `--02.png`.

## Diagram candidates

- `alg-qa-simon-one-sample`, frozen lines 40 and 44–46: optional Simon Fourier-sampling circuit showing address and target wires, Hadamard layers, one oracle call, target measurement/discard, and final address measurement. The intermediate outcome should not be shown controlling postprocessing. This is editorial and uncertain; the procedure is already stated in text. Evidence: `screenshots/alg-qa-simon-one-sample--01.png`.
- `alg-qa-13-phase-estimation-amplitude-estimation`, frozen lines 39 and 41–43: optional QPE circuit showing system preparation, phase register, controlled powers, inverse QFT, outcome `y`, and the exact cyclotomic value. Preserve the leading-minus control-phase convention and keep decimal approximation as postprocessing. This is editorial and uncertain; the procedure is already stated in text. Evidence: `screenshots/alg-qa-13-phase-estimation-amplitude-estimation--01.png`.

No TikZ-authored or other existing mathematical diagrams were found in the assigned sources. No production, application, library, or publication status was changed.
