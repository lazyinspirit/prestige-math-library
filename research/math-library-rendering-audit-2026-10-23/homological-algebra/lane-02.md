# Homological Algebra visual audit — lane 02

## Scope and coverage

Reviewed all 110 assigned items, including each frozen title and complete ItemBody, local rendered HTML, capture receipt, and every assigned screenshot tile. Opened all 155 tiles individually at original resolution; matched source, snapshot, HTML, receipt, and PNG SHA256 values to their assignment/capture records. All hashes match. See [lane-02.json](lane-02.json) for exact per-item and per-tile coverage. No items or tiles remain unreviewed.

One existing TikZ diagram appears in `def-a-infinity-algebra`. It shows the arity-two chain-map square with the tensor differential on the source and `m₁` on the target, matching source lines 52–60; its labels and arrows are present and no clipping or mathematical mismatch was visible. No other capture receipt reports a TikZ block. No clipping was confirmed from standalone originals. Reference-title links rendering as blocks, punctuation wrapping, and uppercase technique banners are expected.

## Confirmed plain-text math findings

- **`ex-the-hom-double-complex-in-low-bidegrees`**, line 30, prints `K^{0,0}`, `K^{1,0}`, `K^{0,1}`, and `K^{1,1}` as raw caret notation in the rendered prompt. Typeset these expressions. See [tile](screenshots/ex-the-hom-double-complex-in-low-bidegrees--01.png).
- **`ex-naturality-of-the-balance-isomorphism`**, line 30, prints `M' -> M` and `N -> N'` as literal ASCII arrows in the rendered prompt. Typeset the maps. See [tile](screenshots/ex-naturality-of-the-balance-isomorphism--01.png).

## Potential diagram additions

These candidates are source-supported editorial additions, not mathematical defects.

- **`ex-the-hom-double-complex-in-low-bidegrees`**, lines 30 and 40–42: the prompt explicitly asks to display the low square. Draw nodes `K^{0,0}=Hom(P₀,I⁰)`, `K^{1,0}=Hom(P₁,I⁰)`, `K^{0,1}=Hom(P₀,I¹)`, `K^{1,1}=Hom(P₁,I¹)`; label horizontal maps `d_h(f)=f d_P`, vertical maps `d_v(f)=d_I f`, and indicate commutation. A companion total-degree annotation can show `Tot⁰=K^{0,0}`, `Tot¹=K^{1,0}⊕K^{0,1}` and the signed component `-d_I a+b d_P`.
- **`ex-naturality-of-the-balance-isomorphism`**, lines 30 and 40–42: draw the naturality square for `Ext^q(M,N) → Ext^q(M',N)` across the contravariant first-variable map and `Ext^q(M,N) → Ext^q(M,N')` down the covariant second-variable map, with `Ext^q(M',N')` at the fourth corner. Mark the projective and injective computations and their comparison through the total Hom complex so the two routes’ agreement is visible.
- **`thm-horseshoe-lemma-for-projective-resolutions`**, lines 29 and 45–47: a chain-level ladder could display `0→P'•→P•→P''•→0` above `0→A'→A→A''→0`, with vertical augmentations and degreewise split exact rows. Label the middle term `P'_n⊕P''_n` and indicate that the kernel sequences extend one degree at a time.
- **`thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex`**, lines 27–34 and 52–56: a first-quadrant grid could label `C_{q,p}`, horizontal `h` and vertical `v`, the row filtration, `E¹_{p,q}=H^h_q(C_{*,p})`, the induced `d¹`, and `E²_{p,q}=H^v_p(H^h_q(C))`. Distinguish the original vertical index used as the spectral-sequence first coordinate.

This was a local preview audit only; no production routes or publication state were checked or changed.
