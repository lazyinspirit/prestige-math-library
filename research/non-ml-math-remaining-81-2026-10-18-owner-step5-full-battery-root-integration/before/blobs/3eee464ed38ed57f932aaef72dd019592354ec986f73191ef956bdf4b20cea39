---
id: ex-positive-scalar-curvature-sphere-has-zero-spin-dirac-kernel
kind: example
title: "The round two-sphere has zero untwisted Spin Dirac kernel"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory-examples
dependency_level: 12
deps:
  - prop-positive-scalar-curvature-forces-untwisted-spinor-kernel-zero
  - lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor
  - lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes
  - thm-mod-two-reduction-of-chern-classes
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - def-riemann-curvature-four-tensor
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC; exact current Clifford/Spin interfaces"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Equip $S^2\cong\mathbb{CP}^1$ with its unit round metric and complex orientation. It has a Spin structure, its scalar curvature is $2$, and every smooth untwisted harmonic spinor is zero.

## Facts & Assumptions

**Given:** Full AC, the unit round sphere and the complex-projective identification with $\mathbb{CP}^1$.

[F1] $c_1(T\mathbb{CP}^1)=2x$ and $H^2(\mathbb{CP}^1;\mathbb Z)=\mathbb Z x$ ([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]], [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]).

[F2] For a complex tangent bundle, $w_2=\rho_2c_1$; an oriented bundle with $w_2=0$ has a Spin lift ([[thm-mod-two-reduction-of-chern-classes]], [[lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor]]).

[F3] The unit round sphere has constant sectional curvature $1$ ([[ex-the-round-sphere-has-positive-constant-sectional-curvature]]); in dimension two the scalar curvature is the sum of the two ordered sectional-curvature terms ([[def-riemann-curvature-four-tensor]]).

[F4] On a compact Spin manifold with positive scalar curvature, the untwisted spinor Dirac kernel vanishes ([[prop-positive-scalar-curvature-forces-untwisted-spinor-kernel-zero]]).

[A1] Full AC is inherited through the characteristic-class and Spin-lift suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The oriented round sphere.

1.1 By [F1]–[F2], $w_2(TS^2)=\rho_2(2x)=0$; the complex orientation orients its tangent bundle. The spin-structure criterion in [F2] supplies a Spin lift. [A1, F1, F2, algebra]

1.2 The sectional curvature is $1$ by [F3]. In an orthonormal frame on a surface, scalar curvature is $R_{1221}+R_{2112}=2$, with the sign convention of [F3]. It is strictly positive everywhere. [F3, given, algebra]

2.1 Apply [F4] to the Spin structure from step 1.1 and the positive scalar curvature from step 1.2. Every smooth untwisted harmonic spinor is zero. The assertion is for the untwisted operator; a line twist has its own curvature term and is treated separately. [A1, F4, step 1.1, step 1.2] ∎
