---
id: ex-complex-projective-plane-has-nonspin-tangent-bundle
kind: example
title: "The complex projective plane has nonzero w2 and no Spin structure"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory-examples
dependency_level: 11
deps:
  - lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor
  - lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
  - thm-mod-two-reduction-of-chern-classes
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - def-schubert-cells-in-real-and-complex-grassmannians
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
  - thm-cellular-homology-computes-singular-homology
  - def-singular-cohomology-with-coefficients
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC; inherited from the characteristic-class and cohomology suppliers"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Let $x=c_1(\gamma^*)$ generate $H^2(\mathbb{CP}^2;\mathbb Z)$, where $\gamma$ is the tautological complex line. Then
$$w_2(T\mathbb{CP}^2)=\rho_2(c_1(T\mathbb{CP}^2))=\rho_2(3x)=\rho_2(x)\ne0.$$
Consequently the oriented tangent bundle of $\mathbb{CP}^2$ has no Spin lift.

## Facts & Assumptions

**Given:** The complex orientation on $\mathbb{CP}^2$ and its tautological line.

[F1] The Euler sequence computation gives $c_1(T\mathbb{CP}^n)=(n+1)x$ ([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]).

[F2] $H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[x]/(x^3)$, with $x$ a generator of $H^2$ ([[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]).

[F3] For a complex bundle, $w_2(E_{\mathbb R})=\rho_2c_1(E)$ ([[thm-mod-two-reduction-of-chern-classes]]).

[F4] The Schubert symbol formula gives one cell in each dimension $0,2,4$ for $\mathbb{CP}^2=\operatorname{Gr}_1(\mathbb C^3)$ ([[def-schubert-cells-in-real-and-complex-grassmannians]], [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]). Cellular homology computes singular homology, and the cohomological universal-coefficient sequence is natural ([[thm-cellular-homology-computes-singular-homology]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]], [[def-singular-cohomology-with-coefficients]]).

[F5] An oriented real bundle admits a Spin lift exactly when its $w_2$ vanishes ([[lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor]]).

## Proof

**Given:** $\mathbb{CP}^2$ and the stated generator $x$.

1.1 By [F1] with $n=2$, $c_1(T\mathbb{CP}^2)=3x$. The coefficient reduction $\rho_2$ is a ring homomorphism, so $\rho_2(3x)=\rho_2(x)$ because $3\equiv1\pmod2$. [F1, algebra]

1.2 The CW structure in [F4] has cellular chains $C_4\cong\mathbb Z$, $C_2\cong\mathbb Z$, and $C_0\cong\mathbb Z$, with all other groups zero. Every cellular boundary is zero because its target is zero, so cellular and singular homology give $H_2(\mathbb{CP}^2;\mathbb Z)\cong\mathbb Z$ and $H_1=0$. By UCT with integral coefficients, evaluation identifies $H^2(\mathbb{CP}^2;\mathbb Z)$ with $\operatorname{Hom}(\mathbb Z,\mathbb Z)$; since $x$ is an integral cohomology generator by [F2], it evaluates as $+1$ or $-1$ on a homology generator. UCT with $\mathbb F_2$ coefficients identifies $H^2(\mathbb{CP}^2;\mathbb F_2)$ with $\operatorname{Hom}(\mathbb Z,\mathbb F_2)$, and naturality of coefficient reduction makes $\rho_2(x)$ evaluate as $1$. Hence $\rho_2(x)\ne0$. [F2, F4, algebra]

2.1 Applying [F3] to the complex tangent bundle and using steps 1.1–1.2 gives $w_2(T\mathbb{CP}^2)=\rho_2(x)\ne0$. The manifold is complex-oriented, hence its tangent bundle is oriented; [F5] therefore implies that it admits no Spin lift. The coefficient group has characteristic two and no sign convention changes the nonzero class. [F3, F5, step 1.1, step 1.2] ∎
