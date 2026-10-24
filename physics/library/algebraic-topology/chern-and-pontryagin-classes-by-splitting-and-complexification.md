---
page: chern-and-pontryagin-classes-by-splitting-and-complexification
title: Chern and Pontryagin Classes by Splitting and Complexification
status: published
items:
  - lem-complex-orientation-of-underlying-real-bundles
  - def-complex-projective-bundle-and-tautological-complex-line
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
  - lem-cohomology-ring-of-infinite-complex-projective-space
  - lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator
  - thm-integral-complex-projective-bundle-theorem
  - def-chern-classes-from-the-projective-bundle-relation
  - def-complex-flag-bundle-and-chern-roots
  - thm-complex-splitting-principle-with-integral-injective-pullback
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
  - thm-uniqueness-of-chern-classes-from-the-splitting-principle
  - lem-universal-complex-flag-bundle-is-bt-n
  - thm-integral-cohomology-of-bu-n
  - thm-first-chern-class-classifies-complex-line-bundles
  - prop-first-chern-class-of-tensor-dual-and-conjugate-lines
  - thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle
  - thm-mod-two-reduction-of-chern-classes
  - prop-complexification-is-conjugation-invariant
  - cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion
  - def-pontryagin-classes-by-complexification
  - thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes
  - thm-pontryagin-whitney-product-away-from-two
  - thm-top-pontryagin-class-is-the-square-of-the-euler-class
  - lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space
  - lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants
  - thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes
  - lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension
  - def-chern-character-of-a-complex-vector-bundle
  - thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero
  - def-graded-chern-character-by-suspension-and-bott-periodicity
  - lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations
  - lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two
  - thm-rational-chern-character-isomorphism-for-finite-cw-complexes
examples: []
---

The page builds complex characteristic classes from the projective bundle rather
than postulating them. Two local suppliers record the ring of complex projective
space: the finite rings are computed from the Gysin sequence of the circle bundle
$S^{2N+1}\to\mathbb{CP}^N$, and the infinite projective space is handled
cellularly, so the page never consumes an examples-page computation. The
tautological complex line carries the canonical
complex orientation of its underlying real bundle, and its Euler class is the
class $x$ whose powers restrict to a basis on every projective fiber; the
projective-bundle theorem then produces the unique monic relation whose
coefficients are the Chern classes. Splitting by the flag bundle makes
naturality, the Whitney product and uniqueness of the axioms transparent, and
the universal flag bundle identifies the symmetric polynomial ring
$H^*(B\mathbb U(n);\mathbb Z)=\mathbb Z[c_1,\dots,c_n]$. The first Chern class
classifies complex lines, with tensor and dual laws for line bundles.

The real/complex comparison is then honest about two-torsion: the top Chern
class is the Euler class of the underlying oriented real bundle, mod-two
reduction gives $w_{2i}=\rho_2c_i$ and $w_{2i+1}=0$, and conjugation inverts the
odd classes, so odd Chern classes of complexified bundles are two-torsion.
Pontryagin classes are defined by complexification with the sign $(-1)^i$; they
are natural and stable, satisfy $p_n=e^2$ and multiply only away from two,
while the integral failure is witnessed on the companion examples page. The
rational cohomology of $BO$ and $BSO$ follows by the Gysin induction on the
universal sphere bundle and the transfer along the orientation double cover.

The page closes with the Chern character: degree zero from Newton polynomials,
the graded character through suspension and Bott periodicity before any graded
statement, compatibility with relative maps and skeletal filtrations, the
coefficient isomorphism on the $E_2$ page of the Atiyah-Hirzebruch spectral
sequence, and the rational isomorphism for finite CW complexes obtained from
the comparison theorem for filtered abutments rather than from a collapse
argument.
