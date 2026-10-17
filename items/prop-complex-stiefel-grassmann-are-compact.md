---
id: prop-complex-stiefel-grassmann-are-compact
kind: proposition
title: Finite-dimensional complex Stiefel and Grassmann manifolds are compact
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-complex-stiefel-grassmann-optimization-conventions
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §3.1: complex matrix spaces as finite-dimensional real Euclidean spaces."
  - title: "Nicholas D. S. Manton, Optimization algorithms exploiting unitary constraints, IEEE Transactions on Signal Processing 50 (2002), §IV"
    url: "https://cseweb.ucsd.edu/classes/sp24/cse291-e/papers/StiefelManifold/UnitaryConstraints.pdf"
    locator: "Complete 16-page article, §IV: the complex Stiefel manifold with its inherited topology and compactness."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For $1\le r\le n$, $\operatorname{St}_{\mathbb C}(n,r)$ is a nonempty closed
bounded subset of the real coordinate space $\mathbb R^{2nr}$, and
$\operatorname{Gr}_{\mathbb C}(r,n)$ is its continuous quotient image. Both
spaces are compact.

## Facts & Assumptions

**Given:** $1\le r\le n$ and the complex Stiefel and quotient definitions of [[def-complex-stiefel-grassmann-optimization-conventions]].

[F1] Complex matrix entries are real and imaginary coordinates in a finite-dimensional real Euclidean space ([[def-complex-stiefel-grassmann-optimization-conventions]]).

[F2] Closed bounded subsets of finite-dimensional Euclidean space are compact ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F3] The quotient map $q:X\mapsto[X]$ is continuous for the quotient topology and is surjective by the complex quotient definition.

## Proof

**Proof technique:** apply Heine–Borel to the frame constraint and pull back arbitrary open covers along the quotient map.

1.1 The map $X\mapsto X^*X$ is continuous in the real and imaginary coordinates, so its inverse image of the closed singleton $\{I_r\}$ is closed. Also $\|X\|_F^2=\operatorname{tr}(X^*X)=r$ on this set, so it is bounded. The frame $[e_1\ \cdots\ e_r]$ shows it is nonempty. [F1, given, algebra]

2.1 Let $\mathcal U$ be any open cover of $\operatorname{Gr}_{\mathbb C}(r,n)$. By [F3], the sets $q^{-1}(U)$ for $U\in\mathcal U$ are open in $\operatorname{St}_{\mathbb C}(n,r)$ and cover it. Compactness from step 1.1 gives $U_1,\ldots,U_k\in\mathcal U$ whose preimages cover $\operatorname{St}_{\mathbb C}(n,r)$. Surjectivity of $q$ then makes $U_1,\ldots,U_k$ a cover of $\operatorname{Gr}_{\mathbb C}(r,n)$. Thus the quotient is compact directly from the open-cover definition. [F1, F2, F3, given, step 1.1, choose]

3.1 Step 1.1 proves compactness of $\operatorname{St}_{\mathbb C}(n,r)$ and step 2.1 proves compactness of $\operatorname{Gr}_{\mathbb C}(r,n)$, as claimed. [F1, F2, F3, step 1.1, step 2.1] ∎
