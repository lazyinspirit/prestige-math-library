---
id: ex-nested-trial-spaces-may-have-equal-energies
kind: example
title: "Nested trial spaces give nonincreasing energies, sometimes with equality"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - thm-nested-finite-basis-infimum-monotonicity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-matrix-product-and-identity-matrix
  - thm-heine-borel-rn
  - thm-extreme-value-metric
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $H=\operatorname{diag}(-1,1,3)$ on $\mathbb C^3$, take the nested trial
spaces $K_1=\operatorname{span}\{e_2\}$,
$K_2=\operatorname{span}\{e_2,e_3\}$, and $K_j=\mathbb C^3$ for every $j\ge3$. Their minimum
unit-vector energies $\min_{v\in K_j,\,\|v\|=1}v^*Hv$ are $1,1,-1,-1,\ldots$. The sequence is nonincreasing but need not
decrease strictly at every enrichment; its limit is the infimum over the union.

## Facts & Assumptions

**Given:** $H=\operatorname{diag}(-1,1,3)$ and the nested subspaces $K_1\subset K_2\subset K_3=K_4=\cdots$ displayed above.

[F1] Nested compact trial sets for a common continuous energy have nonincreasing minima and converge to the infimum over their union ([[thm-nested-finite-basis-infimum-monotonicity]]).

[F2] A Hermitian matrix has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] Closed bounded subsets of finite-dimensional real coordinate space are compact ([[thm-heine-borel-rn]]).

[F4] A continuous real-valued function on a nonempty compact set attains its minimum ([[thm-extreme-value-metric]]).

## Verification

1.1 Each unit sphere in $K_j$ is closed and bounded in finite-dimensional real coordinates, hence compact by [F3]. The energy $v\mapsto v^*Hv$ is continuous, so [F4] gives a minimum on each sphere; diagonalizing the restrictions by [F2] gives the values $1,1,-1$ on $K_1,K_2,K_3$, respectively, and $-1$ for every $j\ge3$. [F2, F3, F4, given]

2.1 The spaces satisfy $K_1\subset K_2\subset K_3$ and their infinite union is $\mathbb C^3$. The computed values are nonincreasing, with equality at the first enrichment, and converge to $-1=\inf_{v\in\mathbb C^3,\|v\|=1}v^*Hv$. Applying [F1] to the infinite nested sequence of their unit spheres gives this same limit. [F1, step 1.1, algebra] ∎

