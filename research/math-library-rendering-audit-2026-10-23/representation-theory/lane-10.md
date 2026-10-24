# Representation Theory of Groups visual audit — lane 10

Reviewed all 70 assigned items and all 146 screenshot tiles individually at original resolution. For each item, I compared the frozen title and complete rendered ItemBody with the current source, frozen snapshot and stored local HTML; all source, snapshot and HTML hashes matched the assignment. All 146 PNGs are 1200 pixels wide; current tile hashes and dimensions are recorded per item in `lane-10.json`. No live website or network was accessed.

## Confirmed rendering findings

- `ex-two-dimensional-hecke-algebra-for-gl2-fq`, line 4: the title displays `GL_2(F_q)` literally instead of rendering the subscript. The body notation renders correctly.
- `lem-dominated-positive-type-functions-give-positive-commutant-contractions`, line 72: the linked definition title within F5 shows raw `\mathcal B(X,Y)` and `\mathcal B(X)` TeX commands in the rendered ItemBody.

## Optional diagram candidates

- `lem-standard-parabolic-double-cosets-are-young-double-cosets`, lines 65, 69, 71 and 83: an optional block-count matrix could show the prescribed row/column margins and the monotone matching map from source blocks `J_j` to consecutive target pieces `A_ij`. Preserve `M(σ)_{ij}=|σ(J_j)∩I_i|`, margins `a_i,b_j`, and the increasing block map `σ_m`. This is explanatory only.
- `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes`, lines 38, 41, 43 and 74: an optional strand sketch could map `e_ν`, `x_r`, and `τ_r` to the diagonal, Chern, and normalized elementary correspondence classes and illustrate the adjacent crossing/braid move. Preserve the signed source relation and normalization; the sketch would not replace the proof.

## Existing diagrams and formula checks

No authored TikZ or diagram environment was present in the assigned ItemBodies. I checked the displayed S3 fixed-space table, permutation and Hecke relations, block-count and matrix formulas, generator/correspondence identifications, and the visible representation formulas. No map, sign, or index defect was confirmed.

## Coverage

All 70 assigned titles and complete ItemBodies, plus all 146 screenshot tiles, were reviewed. Per-item source, snapshot, HTML and image hashes and tile dimensions are in `lane-10.json`. No source, snapshot, HTML or image hash mismatch was found.
