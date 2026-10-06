---
page: lie-algebra-cohomology-and-kostants-nilradical-theorem
title: "Lie Algebra Cohomology and Kostants Nilradical Theorem"
status: published
requires: [harish-chandra-isomorphism-casimir-and-central-characters, the-bgg-resolution, semisimple-lie-algebras-cohomology-and-levi-theory, derived-functors, ext-and-balanced-resolutions, spectral-sequences, double-complexes-exact-couples-and-convergence, compact-lie-groups-maximal-tori-and-peter-weyl-theory]
items:
  - prop-lie-algebra-cohomology-is-derived-invariants
  - prop-h-zero-is-the-invariant-subspace
  - prop-a-normalizer-acts-on-lie-algebra-cohomology
  - lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra
  - thm-casselman-osborne-nilradical-cohomology-constraint
  - def-inversion-set-of-a-weyl-group-element
  - lem-extremal-weight-cochain-for-a-weyl-element-is-closed
  - lem-kostant-laplacian-is-scalar-on-weight-components
  - lem-each-kostant-extremal-harmonic-space-is-one-dimensional
  - thm-kostant-nilradical-cohomology-theorem
  - cor-kostant-cohomology-in-degrees-zero-and-top
  - cor-kostant-euler-character-recovers-the-weyl-numerator
  - prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class
examples: []
---

This page develops Lie algebra cohomology as a representation-theoretic tool
and culminates in Kostant's multiplicity-free description of the cohomology of
the nilradical with coefficients in a finite-dimensional irreducible module.
The functorial frame is fixed at the start: the Chevalley–Eilenberg complex of
a Lie algebra $\mathfrak a$ is realized as the Hom-complex of the standard
free resolution of the trivial module over the enveloping algebra, so $H^n(\mathfrak a,V)$ is the
balanced $\operatorname{Ext}^n_{U(\mathfrak a)}(k,V)$, degree zero is the
invariant subspace, and the Lie derivative of a larger algebra $\mathfrak p$
acts on cochains, commutes with the differential, is inner for elements of an
ideal $\mathfrak a$, and therefore descends to a representation of
$\mathfrak p/\mathfrak a$ on cohomology. In particular $H^\bullet(\mathfrak
n^+,V)$ carries an $\mathfrak h$-module structure with well-defined weights.

The first constraint is central-character rigidity: for every $z$ in the
center of $U(\mathfrak g)$, multiplication of cochain values by $z$ agrees on
$H^\bullet(\mathfrak n^+,V)$ with the action of the Harish–Chandra projection
$\operatorname{pr}(z)$, proved by embedding the coefficient module in an
injective and propagating the degree-zero identity through the connecting maps
of the long exact sequence. Casselman–Osborne then forces every weight of
$H^\bullet(\mathfrak n^+,V)$ into the dot orbit $W\cdot\lambda$. The
remaining exclusion is proved by the cochain Laplacian: a compact real form
and an invariant Hermitian form give a finite-dimensional Hodge decomposition,
and the explicit anticommutator computation with the Chevalley–Eilenberg
differential identifies $2\square$ with $1\otimes\pi(C_{\mathfrak g})$ modulo
the total Cartan action, so that $\square$ acts on each occurring weight
component by the nonnegative scalar
$\tfrac12(\|\lambda+\rho\|^2-\|\mu+\rho\|^2)$. The extremal-cochain lemma
supplies, for every $w\in W$, a nonzero closed cochain supported in degree
$\ell(w)$ and weight $w\cdot\lambda$, whose one-dimensionality in that weight
is proved by the equality case of the Goodman–Wallach argument; the
harmonic-space lemma then identifies the zero eigenspace with the direct sum of
those lines. Assembling these statements yields Kostant's theorem, its two
endpoint degrees, the Euler-character identity, and the comparison with the
BGG character formula through the common finite Weyl numerator.

The Axiom of Choice is stated and propagated where it is used: for the
derived-invariants identification through the freeness of the standard
resolution, for injective resolutions of coefficient modules, and in the
compact-form and unitarizability suppliers of the Laplacian lemma. The
Killing form, the quadratic Casimir element and the root-vector normalization
of the Laplacian computation are one common normalization, fixed once and for
all. The two displayed Chevalley–Eilenberg anticommutator identities are proved
locally on this page; the cited sources supply the cohomological Casimir
identity and the equality case, not this cochain-level calculation.
