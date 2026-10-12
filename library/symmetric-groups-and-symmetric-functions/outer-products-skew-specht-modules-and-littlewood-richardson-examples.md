---
page: outer-products-skew-specht-modules-and-littlewood-richardson-examples
title: "Outer Products, Skew Specht Modules, and Littlewood–Richardson Coefficients — Examples"
status: published
requires:
  - outer-products-skew-specht-modules-and-littlewood-richardson
items: []
examples:
  - ex-outer-product-s32-with-s2
  - ex-littlewood-richardson-coefficient-greater-than-one-for-outer-induction
  - cex-outer-multiplicity-is-not-the-semistandard-tableau-count
  - ex-restriction-coproduct-for-s-three-one
---

These examples calculate outer induction and restriction from the
Littlewood–Richardson rule. They check the Pieri decomposition for
$S^{(3,2)}$ induced with the trivial $S_2$ module, exhibit a coefficient
greater than one, and distinguish lattice tableaux from all semistandard
fillings.

[[ex-outer-product-s32-with-s2]] enumerates every partition of $7$ containing
$(3,2)$, tests its added columns, and verifies the resulting dimension sum.
[[ex-littlewood-richardson-coefficient-greater-than-one-for-outer-induction]]
counts the tableaux contributing to a repeated irreducible constituent, while
[[cex-outer-multiplicity-is-not-the-semistandard-tableau-count]] gives a
semistandard count that differs from the LR multiplicity.

[[ex-restriction-coproduct-for-s-three-one]] lists every subshape of $(3,1)$,
computes the associated skew Schur expansions from the LR tableau convention,
and checks all five bidegree components at the identity.
