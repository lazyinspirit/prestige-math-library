---
page: surface-riemann-roch-and-the-hodge-index-theorem
title: "Surface Riemann-Roch and the Hodge Index Theorem"
status: draft
requires:
  - intersection-products-on-smooth-projective-surfaces
  - cartier-and-weil-divisors-line-bundles-and-picard-groups
  - cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes
  - smooth-projective-serre-duality-and-flag-variety-line-bundles
items:
  - def-canonical-divisor-of-a-smooth-projective-surface
  - def-numerical-equivalence-and-neron-severi-space
  - lem-ample-divisor-positive-intersection-on-smooth-projective-surface
  - lem-ample-twist-of-line-bundle-is-very-ample
  - lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces
  - lem-top-cohomology-vanishes-above-canonical-ample-threshold
  - thm-riemann-roch-for-smooth-projective-surfaces
  - lem-positive-square-divisor-has-effective-multiple
  - thm-hodge-index-theorem-ample-case
  - thm-hodge-index-theorem-for-smooth-projective-surfaces
  - cor-negative-definiteness-of-primitive-numerical-divisors
  - rem-surface-riemann-roch-hodge-index-conventions
examples: []
---

This page develops the Riemann-Roch theorem and the Hodge index theorem for an
integral smooth projective surface over a field. It opens with the canonical
divisor, defined as the divisor of a rational section of the dualizing line
$\omega_X=\bigwedge^2\Omega^1_{X/k}$, and with numerical equivalence and the
real Neron-Severi space. Two ampleness tools follow: positivity of an ample
class against a nonzero effective divisor, proved through the leading
coefficient of the Hilbert polynomial, and the fact that a sufficiently
positive twist of any line bundle by an ample bundle is very ample. The
adjunction formula for an effective divisor is derived from the surface
intersection pairing, its structure sequence and Serre duality, which also gives the
vanishing of top cohomology above a canonical ample threshold. These inputs
feed the Riemann-Roch theorem $\chi(\mathcal O_X(D))=\tfrac12 D\cdot(D-K_X)+
\chi(\mathcal O_X)$ for a Cartier divisor $D$ on a smooth projective surface.
From Riemann-Roch the page proves that an invertible class with positive
square and positive intersection with an ample class has an effective
multiple, then the Hodge index theorem first in the ample case and then for an
arbitrary class of positive square through expansion in a fixed ample class,
and finally the negative definiteness of the intersection form on a primitive
part. The closing remark records the base-field and smoothness
conventions, the distinction between numerical and linear equivalence, and
which tools are deliberately not used. The companion examples page carries the
Picard computations behind the worked examples and counterexamples.
