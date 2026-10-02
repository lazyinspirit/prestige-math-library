---
page: complete-reducibility-for-compact-groups-examples
title: "Complete Reducibility for Compact Groups — Examples"
status: draft
requires: [complete-reducibility-for-compact-groups, decomposition-inertia-and-frobenius]
items: []
examples:
  - ex-averaging-a-form-for-a-circle-representation
  - ex-isotypic-projections-for-a-finite-group-as-a-compact-group
  - ex-compact-group-with-no-faithful-finite-dimensional-representation
  - cex-haar-averaging-does-not-produce-a-finite-measure-for-a-noncompact-group
---

These examples and counterexamples test the scope of the averaging method of
[[complete-reducibility-for-compact-groups]]. A non-invariant Hermitian form on
a two-dimensional representation of the circle group is averaged explicitly:
the cross terms involve the characters $z$ and $\overline z$, whose Haar
integrals vanish, and the averaged form is the diagonal form on the weight
lines, displaying the mechanism of unitarization in coordinates.

For a finite group with the discrete topology the normalized Haar measure
assigns mass $1/|F|$ to each element, and the isotypic projection specializes
to the classical finite character sum
$(d_\sigma/|F|)\sum_{g\in F}\overline{\chi_\sigma(g)}\,\pi(g)$, which is worked
out for the two-element group. Two boundary examples show what compactness is
responsible for. The countable product of two-element groups is a compact
Hausdorff group every continuous finite-dimensional representation of which
has a nontrivial kernel, so compactness alone does not supply faithful
finite-dimensional models; and on the noncompact real line no nonzero
translation-invariant Haar measure has finite total mass, so there is no
normalized Haar probability to average with.
