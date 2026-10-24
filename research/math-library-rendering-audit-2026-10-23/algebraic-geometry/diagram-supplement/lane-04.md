# Diagram supplement, lane 04

Read-only review of the two items in `assignments/assignment-04.json`. The assigned item snapshots and original-resolution local screenshots were inspected. `supplement_lane` identifies this targeted review; `primary_visual_lane` records the lane in the original screenshot receipt.

## `lem-arith-mumford-map-degree-is-euler-characteristic-square`

**Opportunity: warranted. Classification: uncertain.** Proof step 2.1, source line 77, explicitly invokes the Cartesian square for `id_A × φ_L` and the two second projections. The pulled-back Poincare bundle has direct image `O_{K(L)}[-g]` by flat base change. A square would clarify the product projections and fibre being used. The current rendered screenshots show the prose and formula but no diagram (especially screenshot 02, which contains step 2.1).

Draw

```text
A ×ₖ A       -- id × φ_L -->   A ×ₖ A^∨
  | p₂                            | p₂
  v                               v
  A             -- φ_L ------->   A^∨
```

This is Cartesian: with the displayed product order, the top-left object identifies with `A ×_{A^∨} (A × A^∨)` by `(x,y) ↦ ((x,y),(x,φ_L(y)))`, where the two maps to `A^∨` are `φ_L` and the second projection. Both paths to `A^∨` are `φ_L ∘ p₂`. Label the Poincare bundle on the upper-right product and its pullback on the upper-left as `Λ(L)`. The fibre over `0 ∈ A^∨` is the scheme-theoretic kernel `K(L)`, including its possible nonreduced structure; base change gives `O_{K(L)}[-g]`. The base-change hypothesis uses the finite-flat map established in proof step 1.1. Keep the shift sign `[-g]`, which means the only nonzero direct-image sheaf is in degree `g`.

Snapshot SHA256: `4a3416d9b31ce981751f39da54a32ced1ca256a6e02b1af239d2d1f8250dae39`. The image paths, hashes, dimensions, and observations are recorded in the JSON supplement.

## `lem-flag-variety-of-a-vector-space`

**Opportunity: warranted. Classification: uncertain.** The statement lines 47–49 display the nested flag and identify `Fl(V)` as a closed subvariety of `P = ∏_{i=1}^{n−1} Gr_i(V)`, cut out by adjacent incidence. Proof step 1.1 at line 72 uses this model; Facts line 58 explains closedness. A compact incidence diagram would add the projection/factorization structure beyond the displayed chain formula. Existing render screenshots contain the formula and prose but no separate diagram.

Show the closed inclusion `Fl(V) ↪ P`, with coordinate projections `π_i : Fl(V) → Gr_i(V)` sending a flag to `V_i`. For every `1 ≤ i ≤ n−2`, pair the adjacent projections and show `(π_i,π_{i+1})` landing in the closed incidence subvariety

```text
Inc_i = {(W_i,W_{i+1}) ∈ Gr_i(V) × Gr_{i+1}(V) : W_i ⊆ W_{i+1}}.
```

The defining locus is the intersection of the inverse images of these `Inc_i` in `P`. The factors are exactly `Gr_i(V)` for `1 ≤ i ≤ n−1`; `V_0=0` and `V_n=V` are fixed endpoints, not extra factors. In the `n=1` case the product is a point and conditions are vacuous; for `n=2` there is one factor and no adjacent pair condition. Make clear that arbitrary independent points of the Grassmannian factors need not form a flag. The projection-pair lands in `Inc_i` only after restricting to `Fl(V)`.

Snapshot SHA256: `8069f098191ab56e54d1d41129fcf3cdf21925167dfe26b140fecfb838e6ca6d`. The image paths, hashes, dimensions, and observations are recorded in the JSON supplement.

## Limits

Both classifications remain `uncertain`: these are editorial opportunities, not mathematical defects. Any added diagrams should illustrate the stated constructions only; proofs must remain independent of them.
