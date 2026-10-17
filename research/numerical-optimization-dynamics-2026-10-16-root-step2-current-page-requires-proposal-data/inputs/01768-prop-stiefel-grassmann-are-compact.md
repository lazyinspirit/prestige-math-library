---
id: prop-stiefel-grassmann-are-compact
kind: proposition
title: Finite-dimensional Stiefel and Grassmann manifolds are compact
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-stiefel-grassmann-optimization-conventions
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf"
    locator: "Complete 37-page chapter, §§3.3.2, 3.4.4, 3.5.7, 3.6.2 and 3.6.4: Stiefel/Grassmann structures, tangent and horizontal spaces, Frobenius projections and gradients."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§3.6–3.8, 7.3 and 9.16: embedded metrics, gradients, Stiefel frames and Grassmann quotient geometry."
verification:
  precheck: n/a
---

## Statement

For $1\le r\le n$, $\operatorname{St}(n,r)$ is a nonempty closed bounded
subset of $\mathbb R^{n\times r}$, and $\operatorname{Gr}(r,n)$ is compact as
its continuous quotient image. Hence both spaces are compact.

## Facts & Assumptions

**Given:** Integers $1\le r\le n$ and the Stiefel and quotient definitions of [[def-stiefel-grassmann-optimization-conventions]].

[F1] A subset of finite-dimensional Euclidean space is compact if it is closed and bounded ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F2] The quotient map $q:X\mapsto[X]$ is continuous for the quotient topology and is surjective by the quotient definition in the real conventions.

## Proof

**Proof technique:** Heine–Borel followed by the open-cover definition of quotient compactness.

1.1 The equations $X^{\mathsf T}X=I_r$ are polynomial equations in the entries, so their common zero set is closed. Also $\|X\|_F^2=\operatorname{tr}(X^{\mathsf T}X)=r$, so the set is bounded. The matrix with columns $e_1,\ldots,e_r$ belongs to it, so it is nonempty. [given, F1, algebra]

2.1 Let $\mathcal U$ be any open cover of $\operatorname{Gr}(r,n)$. By [F2], the sets $q^{-1}(U)$ for $U\in\mathcal U$ are open in $\operatorname{St}(n,r)$ and cover it. Compactness from step 1.1 gives $U_1,\ldots,U_k\in\mathcal U$ whose preimages cover $\operatorname{St}(n,r)$. Since $q$ is surjective, $U_1,\ldots,U_k$ cover $\operatorname{Gr}(r,n)$. Thus the quotient is compact directly from the open-cover definition. [F1, F2, step 1.1, choose]

3.1 Step 1.1 proves compactness of $\operatorname{St}(n,r)$ and step 2.1 proves compactness of $\operatorname{Gr}(r,n)$, as claimed. [step 1.1, step 2.1] ∎
