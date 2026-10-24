# Round 02 diagram review, lane 03

## `thm-projective-bundle-formula-for-chow-groups`

**Opportunity: warranted. Classification: uncertain.** The statement at snapshot lines 50–66 sets the quotient projective bundle `π : P(E) → X`, the tautological quotient and `ξ = c₁(O(1))`, then gives the decomposition map and the pushforward identities. Proof lines 89 and 93 explain top-power integration and successive coefficient elimination. The three bound screenshots were inspected at original resolution; none displays a diagram. The formulas themselves are explicit, so this is an editorial aid rather than a reported mathematical defect.

A useful diagram can pair the geometric projection with the Chow-group maps:

```text
P(E)  --π-->  X

⊕_{i=0}^{r−1} A_{d+i}(X)  --(α_i ↦ Σ ξ^i ∩ π*α_i)-->  A_{d+r−1}(P(E))
                                                              |
                                                              | π_*
                                                              v
                                                        A_{d+r−1}(X)
```

For each `i`, draw the summand map `α_i ↦ ξ^i ∩ π*α_i`; together these maps give the stated isomorphism. Annotate fibre integration with `π_*(ξ^s ∩ π*α)=0` for `s<r−1` and `π_*(ξ^{r−1} ∩ π*α)=α`. Optionally show a fibre `P^{r−1}` with hyperplane class `ξ`, for which the top power integrates to `1`.

Keep rank `r`, relative dimension `r−1`, and exponent range `0,…,r−1` aligned. For homological grading, `π*` raises dimension by `r−1`, then `ξ^i` lowers it by `i`, so each `A_{d+i}(X)` lands in `A_{d+r−1}(P(E))`. Proper pushforward preserves cycle dimension, so the displayed target pushes to `A_{d+r−1}(X)`; the top-power input `ξ^{r−1} ∩ π*α` has the same dimension as `α`. Preserve the quotient convention `π*E → O(1)`. Do not suggest that a single pushforward directly extracts all coefficients: the proof first detects `α_{r−1}` and then eliminates coefficients successively. Higher powers can contribute during that triangular process. The general statement uses homological Chow groups; codimension grading requires the separate smooth equidimensional hypothesis. There are no signs in the ordinary Chow pushforward identities.

Source snapshot SHA256: `7b4f3fdfa7c87daec3ecdb5a6fcf235cb2f3d54a1a0498ad722575d039c76521`. Screenshot hashes and dimensions are recorded in `lane-03.json`.

The proposed diagram is explanatory only; no proof should depend on it.
