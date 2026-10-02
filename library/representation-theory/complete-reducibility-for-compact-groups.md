---
page: complete-reducibility-for-compact-groups
title: "Complete Reducibility for Compact Groups"
status: published
requires: [haar-measure-existence-and-uniqueness, the-modular-function-and-l1-group-algebras, unitary-representations-positive-type-and-gns, banach-valued-integration-and-the-radon-nikodym-property, compact-operators-and-riesz-schauder-theory, compact-self-adjoint-hilbert-schmidt-and-trace-class-operators, maschkes-theorem-and-complete-reducibility]
items:
  - def-averaged-hermitian-form-for-a-compact-group
  - lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements
  - lem-averaging-makes-a-finite-dimensional-representation-unitary
  - thm-finite-dimensional-compact-group-representations-are-completely-reducible
  - def-haar-averaging-operator-on-hom-spaces
  - lem-haar-averaging-projects-onto-the-intertwiner-space
  - lem-compact-convolution-operators-are-hilbert-schmidt
  - lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous
  - lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner
  - lem-a-compact-scalar-identity-forces-finite-dimension
  - thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional
  - thm-schur-orthogonality-for-compact-groups
  - def-compact-group-isotypic-projection
  - thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections
examples: []
---

On a compact Hausdorff group the normalized Haar probability of
[[haar-measure-existence-and-uniqueness]] can be used to average intrinsic
data of a representation. Averaging a Hermitian inner product produces a
positive definite invariant form, so a closed invariant subspace of a
finite-dimensional unitary representation has an invariant orthogonal
complement; induction on the dimension then shows that every finite-dimensional
complex representation of a compact group is a direct sum of irreducible
ones. The averaging operator on homomorphism spaces is defined as a weak
operator integral against Haar measure, and its scalar pairing formula reduces
all of its properties to the invariance of the measure; in particular it is a
contraction projecting onto the space of intertwining operators.

The theory of compact operators supplies the infinite-dimensional half. Weak
operator integration of the conjugation orbit of a positive rank-one operator
produces a nonzero compact self-adjoint intertwiner, which Schur's lemma turns
into a nonzero scalar; a compact scalar identity forces finite dimension.
Convolution on $L^2(K)$ is treated separately through its Hilbert--Schmidt
kernel, and the norm continuity of conjugation orbits is proved only for
finite-rank operators, which is exactly what the averaging argument needs. The
consequences are collected in the finite-dimensionality of continuous
irreducible unitary representations of a compact group, using the Bochner
integration and compact-operator machinery of
[[banach-valued-integration-and-the-radon-nikodym-property]],
[[compact-operators-and-riesz-schauder-theory]] and
[[compact-self-adjoint-hilbert-schmidt-and-trace-class-operators]].

Schur orthogonality for general compact groups is proved by averaging rank-one
maps with normalized Haar measure: matrix coefficients of inequivalent
irreducible representations are orthogonal in $L^2(K)$, and a single
irreducible satisfies the $1/d$ normalization in the first-variable-linear
convention. These identities define the isotypic projection
$P_\sigma=d_\sigma\int_K\overline{\chi_\sigma(k)}\,\pi(k)\,d\mu(k)$ attached to
an irreducible $\sigma$ and a strongly continuous unitary representation
$\pi$. Its images are sums of finitely many $\sigma$-copies, and the averaged
operator is shown to be a bounded self-adjoint idempotent commuting with
$\pi(K)$ whose range is exactly the $\sigma$-isotypic subspace, with
orthogonal ranges for inequivalent types.

No completeness statement is made here. The page deliberately does not assert
that the isotypic subspaces span the whole representation space, does not form
a sum over the unitary dual and does not prove Peter--Weyl density; those
belong to the later theory of general compact groups. The Axiom of Choice is
consumed through the existence and uniqueness of Haar measure and through the
Bochner and Hilbert-space suppliers, while the finite-dimensional averaging
arguments themselves are choice free apart from their cited inputs.
