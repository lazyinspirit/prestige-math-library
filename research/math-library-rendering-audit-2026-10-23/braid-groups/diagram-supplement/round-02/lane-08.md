# Round 02, lane 08: half-twist index reversal

**Decision:** An optional disk-and-arcs schematic is warranted to show the geometry behind index reversal. It should illustrate the identities, not replace their positive-monoid proof. The absence of a diagram is not a defect.

## Checked geometry and algebra

The half-turn reverses the ordered punctures: puncture `k` goes to `n+1-k`. Thus the adjacent arc joining punctures `i` and `i+1` goes to the arc joining `n-i` and `n+1-i`, which is arc `n-i`. Since the disk half-turn preserves orientation, it carries the positive half twist `σ_i` to the positive half twist `σ_(n-i)` without changing crossing sign. The endpoint permutation of `Δ` is the reversal `i ↦ n+1-i`.

The source's identities are equalities in the positive braid monoid:

\[
\sigma_i\Delta\equiv^+\Delta\sigma_{n-i},
\qquad
\Delta\sigma_i\equiv^+\sigma_{n-i}\Delta.
\]

The second identity becomes `Δ σ_i Δ^(-1)=σ_(n-i)` after embedding in the braid group; the first is equivalently `Δ^(-1) σ_i Δ=σ_(n-i)`. The local proof uses no inverse of `Δ`. This distinction matters because the title's “conjugation” language refers to the two-sided positive sliding before group inverses are introduced.

Keep the displayed word convention `Δ=T_1⋯T_(n-1)`, `T_k=σ_k⋯σ_1`, with recursion `Δ_n=Δ_(n-1)T_(n-1)`. A geometric stacking picture should state its time direction, since the library reads the rightmost factor first. Label each `σ_i` as the positive crossing of strands `i` and `i+1`. The word-reversal anti-automorphism `ρ` and index-reversal automorphism `τ` are different: `ρ` reverses factor order while fixing generators, and `τ` changes generator indices without reversing factor order. The source does not use any left/right divisibility assertion here.

The other displayed slide, `σ_j T_k ≡+ T_k σ_(j+1)`, has the stated range `1≤j≤k-1`. At `j=k≤n-2`, the two sides have different supports, so that extension is false; when `k=n-1`, `σ_(k+1)` is outside the alphabet.

## Screenshot review

Viewed all three listed local PNGs at original resolution. Together they show the statement and assumptions, proof steps, and remarks legibly. The receipt reports no TikZ diagram and no diagram failure. No mathematical defect was found in the index direction, positive crossing sign, word order, or distinction between positive-monoid sliding and group conjugation.
