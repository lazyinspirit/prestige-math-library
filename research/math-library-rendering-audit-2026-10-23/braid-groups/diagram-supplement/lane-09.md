# Lane 09 — Left Garside normal form

**Item:** `thm-left-garside-normal-form-is-unique`  
**Review:** targeted missing-diagram candidate  
**Source:** bound snapshot, SHA-256 `b9fe0e938f979c290b10a6b5977d2e540db2f4e431c776732d78cc650fbcb86e`

I read the bound snapshot and viewed all four assigned PNG tiles at original resolution. They show the statement, proof, and remarks without a diagram. The matching screenshot receipt reports `tikz_count: 0`, no KaTeX errors, and no diagram failures. Its item id matches, but the receipt's lane field says `07` while this assignment is lane `09`.

## Assessment

A compact algebraic factor-and-gcd schematic is warranted as an explanatory aid. It can show the maximal-exponent extraction followed by the ordered greedy peeling of positive factors. The result is understandable without a figure, and the proof's uniqueness argument should remain in prose.

The source fixes `p=p(x)` as the maximal integer such that `Δ^p≼_L x`, and writes `A(x)=Δ^(−p)x` as a positive braid with `Δ` not left-dividing it. This allows negative `p`; the picture must not suggest that the exponent is necessarily nonnegative. `Δ` denotes the half twist throughout. `Δ²` is the full twist and is not interchangeable with `Δ` here.

The greedy construction takes `a_i=Δ∧_L A_(i−1)` and writes `A_(i−1)=a_i A_i`. Thus each `a_i` is the leftmost factor and `A(x)=a_1 a_2 … a_r`. Equivalently, `a_i=Δ∧_L(a_i a_(i+1)…a_r)`: the gcd is with the full remaining tail, and `∧_L` means greatest common **left** divisor. Each factor is proper simple, `1≺_L a_i≺_LΔ`; for adjacent factors, the theorem also gives `(a_i a_(i+1))∧_LΔ=a_i`. The empty case has `r=0` and `x=Δ^p`.

The uniqueness argument is consistent: maximality uniquely fixes `(p,A(x))`; the deterministic gcd fixes `a_1`; cancellation and induction fix each succeeding factor. These are algebraic positive-braid factors. The theorem assigns no specific Artin words, crossings, or endpoint permutations to generic `a_i`, so a schematic should not invent strand-level data.

I found no mathematical defect in the source. A suitable figure would mark the left-to-right factor order, residual tails and left gcds, proper-simple bounds, arbitrary integer exponent, and optionally the adjacent left-weighting consequence. The figure is editorial support, not a proof of uniqueness.

**Relevant source lines:** 55–61 (maximal exponent), 63–72 (greedy factors), 74–81 (left normal form), 92–93 (left weighting).
