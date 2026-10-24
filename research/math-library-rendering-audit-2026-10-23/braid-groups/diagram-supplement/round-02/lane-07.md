# Round 02, lane 07: simple braids and permutations

**Decision:** An optional indexing schematic or small `n=3` table would help explain this algebraic correspondence. The statement and proof are clear without a braid diagram, and no defect follows from the absence of one.

## Checked correspondence and conventions

The lift points from permutations to simple positive braids:

\[
\tau\in S_n\longmapsto\widehat{\tau}\in B_n^+.
\]

Its image is exactly the left divisors of `Δ`, which equal the right divisors of `Δ`. The homomorphism `π:B_n^+→S_n`, with `π(σ_i)=s_i`, is inverse to the lift on those simple braids. A reduced expression `s_{i_1}⋯s_{i_k}` lifts to `σ_{i_1}⋯σ_{i_k}`; distinct reduced expressions for the same permutation give the same positive braid by the cited reduced-word theorem. Length agrees with inversion number: `ℓ(τ̂)=inv(τ)`.

The longest permutation `w₀=(n,…,1)` has `N=n(n−1)/2` inversions and lifts to `Δ`. For `n=3`, its two familiar reduced expressions give `Δ=σ₁σ₂σ₁=σ₂σ₁σ₂`. Any worked diagram should preserve the displayed product order and state the permutation composition convention used.

For divisibility, `a≼L Δ` means `Δ=a c` (a prefix), while `a≼R Δ` means `Δ=c a` (a suffix). The lemma establishes equality of the two divisor sets; it does not claim the left and right orders are identical. Word reversal exchanges those orders and labels a lift by the inverse permutation.

## Suggested illustration

An `n=3` table of all six permutations, inversion counts, and their lifts could show the bijection concretely. A general diagram should identify `τ↦τ̂` and `π` in the correct directions, and should present the reduced word as a generator sequence. A single braid picture is illustrative rather than a proof of the all-`n` result.

## Screenshot review

Viewed all four listed local PNGs at original resolution. They display the statement, assumptions, proof, and remarks legibly; no rendering issue affected the review. No mathematical defect was found in the checked map direction, reduced-word order, longest element, or left/right divisor statements.
