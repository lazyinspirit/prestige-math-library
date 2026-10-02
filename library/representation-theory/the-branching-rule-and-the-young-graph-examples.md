---
page: the-branching-rule-and-the-young-graph-examples
title: "The Branching Rule and the Young Graph — Examples"
status: draft
requires: [the-branching-rule-and-the-young-graph]
items: []
examples:
  - ex-young-graph-through-s4
  - ex-youngs-rule-for-m-two-one
  - ex-schur-weyl-for-two-tensor-factors
  - ex-schur-weyl-for-c2-tensor-three
  - cex-branching-filtration-need-not-split-in-modular-characteristic
---

These examples accompany [[the-branching-rule-and-the-young-graph]] and work
out the branching and Schur–Weyl statements in small ranks.

[[ex-young-graph-through-s4]] tabulates the Young graph through size four: the
partitions at each rank, the addable-box edges, the resulting standard tableaux
and the values of $f^\lambda$, checked against the restriction and induction
rules and against $\sum_\lambda(f^\lambda)^2=n!$.
[[ex-youngs-rule-for-m-two-one]] decomposes the permutation module $M^{(2,1)}$
into a trivial summand and the two-dimensional Specht module, enumerating the
semistandard tableaux that give the Kostka multiplicities.

[[ex-schur-weyl-for-two-tensor-factors]] splits $V\otimes V$ into symmetric and
alternating parts and matches the Schur–Weyl factors, including the cutoff
$\ell(1,1)=2$; the computation uses the idempotents $(1\pm\tau)/2$ and
therefore works over the complex numbers, where $2$ is invertible.
[[ex-schur-weyl-for-c2-tensor-three]] carries out the $\mathbb C^2$ tensor cube
in full, realizing the multiplicity space of the trivial shape as the invariant
tensors and computing the remaining multiplicity by dimensions and highest
weights.

The counterexample [[cex-branching-filtration-need-not-split-in-modular-characteristic]]
shows that the field-uniform restriction filtration of the main page need not
split over a field of positive characteristic: over $\mathbb F_2$ the
restriction of $S^{(2,1)}$ is a nonsplit extension of its removable-corner
quotients, so the splitting in the complex branching rule is a
characteristic-zero phenomenon.
