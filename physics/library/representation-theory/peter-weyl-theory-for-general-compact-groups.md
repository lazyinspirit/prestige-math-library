---
page: peter-weyl-theory-for-general-compact-groups
title: "Peter Weyl Theory for General Compact Groups"
status: published
requires: [haar-measure-existence-and-uniqueness, the-modular-function-and-l1-group-algebras, unitary-representations-positive-type-and-gns, complete-reducibility-for-compact-groups, stone-weierstrass-general, compact-operators-and-riesz-schauder-theory, compact-self-adjoint-hilbert-schmidt-and-trace-class-operators, character-groups-and-elementary-lca-duals]
items:
  - def-unitary-dual-of-a-compact-group
  - def-representative-function-on-a-compact-group
  - lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations
  - lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra
  - lem-compact-convolution-operators-commute-with-right-translations
  - lem-finite-rank-spectral-pieces-of-compact-convolution
  - lem-compact-group-matrix-coefficients-separate-points
  - thm-uniform-peter-weyl-density
  - def-normalized-irreducible-matrix-coefficient-basis
  - thm-l2-peter-weyl-orthonormal-basis
  - def-hilbert-direct-sum-of-unitary-representations
  - lem-l1-action-of-a-unitary-representation
  - lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation
  - thm-regular-representation-peter-weyl-decomposition
  - thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely
  - cor-parseval-and-fourier-inversion-for-compact-groups
  - cor-each-vector-in-a-compact-representation-has-countable-isotypic-support
examples: []
---

Peter--Weyl theory identifies the harmonic analysis of a compact Hausdorff group
with the decomposition of its regular representation. This page develops the
unitary dual and the representative functions following
[[haar-measure-existence-and-uniqueness]] and the compact-operator theory of
[[compact-operators-and-riesz-schauder-theory]] and
[[compact-self-adjoint-hilbert-schmidt-and-trace-class-operators]]: a
representative function is a finite linear combination of matrix coefficients
of finite-dimensional continuous unitary representations, these functions form
a unital self-adjoint algebra closed under translation, and they separate the
points of the group.

The separation argument is spectral. Left convolution by an $L^2$ kernel
commutes with right translations and has adjoint given by the
conjugate-inversion kernel; for a symmetric kernel it is compact and
self-adjoint, so its nonzero eigenspaces are finite-dimensional and
translation-invariant. A symmetric cutoff vanishing in a neighbourhood of a
given nonidentity element then forces some finite-dimensional
subrepresentation to distinguish that element, and the unital complex
Stone--Weierstrass theorem of [[stone-weierstrass-general]] upgrades separation
to uniform density of the representative functions.

Orthogonality comes from Schur orthogonality for compact groups in the
$1/d_\pi$ normalization, so the normalized irreducible matrix coefficients
$\sqrt{d_\pi}\,\langle\pi(k)e_i,e_j\rangle$ form an orthonormal family.
Combining orthogonality with uniform density and the density of continuous
functions in $L^2$ shows that this family is an orthonormal basis of $L^2(K)$,
its blocks $M_\pi$ of dimension $d_\pi^2$ give the Peter--Weyl decomposition of
the regular representation, and Parseval's identity together with $L^2$ Fourier
inversion follows. For the coefficient $c^\pi_{v,w}$, the right regular action transforms $v$
by $\pi$ and the left regular action transforms $w$ by $\pi$, which is
conjugate-linear on coefficients. Thus the right block has type $\pi$ and
the left block has type $\overline\pi$, each with multiplicity $d_\pi$;
reindexing by conjugate classes gives $d_\pi$ copies of every irreducible
class in the left regular representation as well.

The final layer removes compactness-independent hypotheses from the finite
case: every strongly continuous unitary representation of $K$ is the discrete
Hilbert sum of its isotypic components, each a possibly infinite Hilbert sum
of copies of a finite-dimensional irreducible representation. Each single
vector has nonzero components in at most countably many isotypic components, and no
countability of the dual is asserted. The Axiom of Choice is carried through
the normalized Haar probability, the compact self-adjoint spectral theorem and
the selection of representatives and orthonormal bases in the dual; the
finite-dimensional unitarization and translation computations themselves are
choice-free apart from their cited inputs.
