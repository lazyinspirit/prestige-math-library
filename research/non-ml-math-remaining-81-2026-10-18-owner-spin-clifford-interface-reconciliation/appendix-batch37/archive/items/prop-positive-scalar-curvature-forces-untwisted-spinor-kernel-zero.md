---
id: prop-positive-scalar-curvature-forces-untwisted-spinor-kernel-zero
kind: proposition
title: "Positive scalar curvature annihilates untwisted spinor harmonic sections"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 11
deps:
  - def-even-dimensional-spinor-bundle-chirality-and-spin-connection
  - lem-spinor-and-clifford-associated-bundles-are-well-defined
  - lem-lichnerowicz-formula-for-geometric-dirac-operators
  - thm-riemannian-divergence-theorem
  - thm-extreme-value-r
  - def-axiom-of-choice
  - thm-complex-spin-modules-and-compact-reducibility
justified_by:
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC; conditional on the exact PA-04 spinor-module interface"
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

Assume full AC and the exact complex spinor interface [A1]. Let $M$ be a compact boundaryless even-dimensional Spin Riemannian manifold, and suppose its scalar curvature satisfies $\operatorname{scal}_g(x)>0$ for every $x\in M$. Then every smooth untwisted spinor $\psi$ satisfying $D_S\psi=0$ is zero.

## Facts & Assumptions

**Given:** The closed Spin manifold, its untwisted spinor bundle and spin connection, and a smooth harmonic spinor $\psi$.

[F1] For the untwisted spinor module, the relative curvature vanishes, so the Lichnerowicz identity is $D_S^2=\nabla^*\nabla+\operatorname{scal}_g/4$ ([[lem-lichnerowicz-formula-for-geometric-dirac-operators]], [[lem-spinor-and-clifford-associated-bundles-are-well-defined]]).

[F2] On a compact boundaryless Riemannian manifold, integration by parts gives $\int_M\langle\nabla^*\nabla\psi,\psi\rangle=\int_M|\nabla\psi|^2$ ([[thm-riemannian-divergence-theorem]]).

[F3] A continuous real-valued function on a compact space attains its minimum ([[thm-extreme-value-r]]).

[A1] The spinor module source [[thm-complex-spin-modules-and-compact-reducibility]] remains conditional on the unready PA-04 classification suppliers; full AC is inherited through the connection and integration suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** $\psi\in C^\infty(S)$ and $D_S\psi=0$.

1.1 Apply [F1], take the Hermitian inner product with $\psi$, and integrate. Since $D_S\psi=0$, [F2] gives $0=\int_M|\nabla\psi|^2\,d\operatorname{vol}_g+\frac14\int_M\operatorname{scal}_g|\psi|^2\,d\operatorname{vol}_g$. Both integrands are nonnegative. [A1, F1, F2, given]

2.1 If $M$ is nonempty, [F3] gives a minimum $c=\min_M\operatorname{scal}_g$, and strict positivity at the minimizing point gives $c>0$. Step 1.1 then implies $0\ge(c/4)\|\psi\|_{L^2}^2$, so $\psi=0$ almost everywhere and, by smoothness, everywhere. If $M$ is empty there is only the zero section. No twist is present; for a twisted connection the curvature term need not vanish. The PA-04 interface in [A1] remains unresolved. [A1, F3, step 1.1, given, algebra] ∎

