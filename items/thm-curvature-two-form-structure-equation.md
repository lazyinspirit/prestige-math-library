---
id: thm-curvature-two-form-structure-equation
kind: theorem
title: Curvature two-form structure equation
status: draft
origin: pipeline
deps: ["prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form", "def-connection-one-form-in-a-local-frame", "prop-local-coordinate-formula-for-a-bundle-connection", "thm-local-coordinate-formula-for-the-exterior-derivative", "def-wedge-product-of-differential-forms"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Will J. Merry, Differential Geometry (2021)
      url: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
      locator: Lecture 36, local curvature matrix
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 6, Proposition 6.1.3 and Remark 6.1.4, printed pages 38–39
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $e=(e_1,\ldots,e_r)$ be a local frame, let $\omega=(\omega^i{}_j)$ be
its connection matrix, and let $\Omega=(\Omega^i{}_j)$ be the matrix of the
curvature two-form, defined by
$R^\nabla(X,Y)e_j=\Omega^i{}_j(X,Y)e_i$. Then

$$\Omega=d\omega+\omega\wedge\omega,$$

where multiplication order is fixed by

$$(\omega\wedge\omega)^i{}_j=\sum_k\omega^i{}_k\wedge\omega^k{}_j.$$

## Facts & Assumptions

[F1] Bundle curvature is an $\operatorname{End}(E)$-valued two-form. [[prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form]].

[F2] In the supplied frame, $\nabla_Xe_j=\omega^i{}_j(X)e_i$. [[def-connection-one-form-in-a-local-frame]].

[F3] For $s=eu$, $\nabla_Xs=e(Xu+\omega(X)u)$. [[prop-local-coordinate-formula-for-a-bundle-connection]].

[F4] The exterior derivative of a local coordinate expansion differentiates its scalar coefficients. [[thm-local-coordinate-formula-for-the-exterior-derivative]].

[F5] The wedge product is the pointwise alternating product of forms. [[def-wedge-product-of-differential-forms]].

## Proof

**Given:** A local frame $e$, a coordinate chart on its domain, and coordinate fields $\partial_a,\partial_b$.

1.1 Since coordinate fields commute, expand the defining curvature commutator on $e_j$ with [F2]–[F3]. The coefficient of $e_i$ is $\partial_a(\omega^i{}_j(\partial_b))-\partial_b(\omega^i{}_j(\partial_a))+\sum_k\bigl(\omega^i{}_k(\partial_a)\omega^k{}_j(\partial_b)-\omega^i{}_k(\partial_b)\omega^k{}_j(\partial_a)\bigr)$. [F1, F2, F3, algebra]

2.1 By [F4], the first two terms in step 1.1 are $d\omega^i{}_j(\partial_a,\partial_b)$; by [F5], the sum is $\sum_k(\omega^i{}_k\wedge\omega^k{}_j)(\partial_a,\partial_b)$ in precisely the stated matrix order. Both sides are two-forms by [F1], so equality on every coordinate-frame pair proves $\Omega^i{}_j=d\omega^i{}_j+\sum_k\omega^i{}_k\wedge\omega^k{}_j$. [F1, F4, F5, step 1.1, algebra] ∎
