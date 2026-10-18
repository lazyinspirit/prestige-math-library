---
id: ex-ewald-nonneutral-zero-mode-obstruction
kind: example
title: "A nonneutral periodic source has no periodic Poisson solution"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-ewald-three-dimensional-periodic-source-data]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

On any three-dimensional torus, a single point charge of $1$ is nonneutral and
cannot be the right side of a periodic Poisson equation $-\Delta u=4\pi\rho$.

## Facts & Assumptions

**Given:** A full-rank three-dimensional cell, a point $x_1$ in its torus, and
the one-charge source distribution $\rho$ with $q_1=1$.

[F1] $\langle\rho,\varphi\rangle=\sum_iq_i\varphi(x_i)$ and the distributional Laplacian satisfies $\langle-\Delta u,\varphi\rangle=\langle u,-\Delta\varphi\rangle$ ([[def-ewald-three-dimensional-periodic-source-data]]).

## Verification

**Proof technique:** direct.

1.1 Test a hypothetical periodic distribution solution against the constant smooth periodic function $\varphi\equiv1$. Since $-\Delta1=0$, the left side is $\langle u,-\Delta1\rangle=0$ by [F1]. [given, F1, algebra]

2.1 The right side would be $4\pi\langle\rho,1\rangle=4\pi q_1=4\pi$ by [F1], contradicting step 1.1. Therefore no periodic distribution solution exists for this nonneutral source. [given, F1, step 1.1, algebra] ∎

