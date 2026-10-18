---
id: def-formal-equivalence-of-star-products
kind: definition
title: Formal differential gauge equivalence of star products
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-formal-star-product-on-a-poisson-manifold
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Maxim Kontsevich, Deformation Quantization of Poisson Manifolds, I
      url: https://arxiv.org/pdf/q-alg/9709040
      locator: §1.1, gauge group and action on star-products (PDF pp. 1–2)
    - title: Nima Moshayedi, Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory
      url: https://arxiv.org/pdf/2012.14662
      locator: §4.1.4, Definition 4.1.17 and Remark 4.1.18 (PDF p. 88)
verification:
  precheck: n/a
---

## Definition

Let $\star$ and $\star'$ be differential star products on the same real
Poisson manifold $(M,\pi)$, with $A=C^\infty(M,\mathbb R)$. They are
**formally gauge equivalent** if there is an invertible
$\mathbb R\llbracket\hbar\rrbracket$-linear map $T:A\llbracket\hbar\rrbracket\to A\llbracket\hbar\rrbracket$ of the
form
$$T=\operatorname{id}+\sum_{r\geq1}\hbar^rD_r,$$
where each $D_r:A\to A$ is a differential operator and $D_r(1)=0$,
such that
$$f\star' g=T^{-1}\bigl(Tf\star Tg\bigr).$$
The condition $D_r(1)=0$ makes $T(1)=1$, so this change of variables
preserves the unit. The map is formal and coefficientwise; no analytic
convergence or classification of equivalence classes is asserted.
