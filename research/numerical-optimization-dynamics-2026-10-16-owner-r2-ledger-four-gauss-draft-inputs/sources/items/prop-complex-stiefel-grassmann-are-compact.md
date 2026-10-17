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
  - thm-continuous-image-of-a-compact-space-is-compact
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

[F3] A continuous image of a compact space is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** apply Heine–Borel to the frame constraint and compactness under a continuous quotient map.

1.1 The map $X\mapsto X^*X$ is continuous in the real and imaginary coordinates, so its inverse image of the closed singleton $\{I_r\}$ is closed. Also $\|X\|_F^2=\operatorname{tr}(X^*X)=r$ on this set, so it is bounded. The frame $[e_1\ \cdots\ e_r]$ shows it is nonempty. [F1, given, algebra]

2.1 By [F2], $\operatorname{St}_{\mathbb C}(n,r)$ is compact. The quotient map $X\mapsto[X]$ is continuous by the quotient topology in [F1], so [F3] makes its image $\operatorname{Gr}_{\mathbb C}(r,n)$ compact. [F1, F2, F3, given, step 1.1] ∎
