# Linear Algebra rendering audit — lane 06

## Scope and coverage

Read-only review of the frozen source snapshots and local HTML named by `assignment-06.json`. All 75 assigned items and all 91 assigned PNG tiles were reviewed. Each PNG was opened individually with `view_image` at original resolution. The exact item, snapshot, HTML, and tile SHA256 values are recorded in [lane-06.json](lane-06.json). No production-route behavior is asserted.

The review covered each title and full ItemBody, literal ASCII math and carets/underscores, TeX/KaTeX display, TikZ and diagram mathematics, reference-title leaks, Scratch text, standalone-image clipping, and source-supported candidate diagrams. No authored TikZ/source diagram was found in these snapshots. Displayed matrices and equations are mathematical content, not diagram defects. Punctuation wrapping and the block rendering of links were not treated as defects.

## Confirmed rendering defects

1. **Raw ASCII mathematics in the title** — `lem-product-of-one-plus-deltas-gives-theta-n`, snapshot line 4. The local preview title displays `|delta_i| <= u ... prod (1+delta_i) ... |theta_n| <= gamma_n` literally. The statement body uses TeX and renders correctly. Visible in `screenshots/lem-product-of-one-plus-deltas-gives-theta-n--01.png`.

2. **Raw TeX in the proof-technique banner** — `thm-alternating-forms-have-a-symplectic-normal-form`, snapshot line 45. The uppercase technique banner is intended, but embedded `$n=\\dim V$` remains literal in the local preview (“INDUCTION ON $N=\\DIM V$”). Visible in `screenshots/thm-alternating-forms-have-a-symplectic-normal-form--01.png`.

No other confirmed rendering defects were identified in the reviewed items and tiles.

## Source-supported diagram candidates

These are optional editorial candidates, not defects or mathematical errors.

- **`ex-an-invariant-flag-producing-upper-triangular-form`, lines 31–36 and 48:** a nested invariant-flag schematic. Show `0 ⊂ span(e1) ⊂ span(e1,e2) ⊂ Q^3`, the two invariance inclusions under `T`, and the flag-adapted basis next to `[[2,1,2],[0,3,-1],[0,0,4]]`. Check that the matrix is upper triangular and its diagonal matches the action on the successive one-dimensional quotients.
- **`thm-complexification-preserves-kernels-images-rank-nullity-and-short-exact-sequences`, lines 26–34 and 62 onward:** a commutative diagram with real row `0 → U → V → W → 0` and complexified row `0 → U_C → V_C → W_C → 0`. Label the lower maps `i_C`, `p_C`; show the canonical vertical identifications and check commutativity, injectivity, `im(i_C)=ker(p_C)`, and surjectivity.

The complete item-by-item and tile-by-tile coverage, hashes, findings, and diagram candidates are in [lane-06.json](lane-06.json).
