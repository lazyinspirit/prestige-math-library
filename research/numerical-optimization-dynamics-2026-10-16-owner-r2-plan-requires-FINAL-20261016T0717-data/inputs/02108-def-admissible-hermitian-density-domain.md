---
id: def-admissible-hermitian-density-domain
kind: definition
title: The fixed-particle admissible Hermitian density domain
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-rank-r-orthogonal-projector-domain, def-self-adjoint-and-normal-endomorphism, def-matrix-product-and-identity-matrix, def-trace-of-a-square-matrix, def-frobenius-matrix-norm]
justified_by:
  - lem-projector-is-admissible-density
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §4.4 and Appendix Lemma 4.1
      url: https://arxiv.org/pdf/2004.09088
verification:
  precheck: n/a
---

## Definition

For $n\ge2$ and $1\le r<n$, let $\mathbb H_n$ and $\mathcal P_r$ be as in
[[def-rank-r-orthogonal-projector-domain]]. The **admissible fixed-particle
density domain** is
$$\mathcal D_r:=\{D\in\mathbb H_n:0\preceq D\preceq I_n,\ \operatorname{tr}D=r\},$$
where $D\succeq0$ means $x^*Dx\ge0$ for every $x\in\mathbb C^n$, and
$D\preceq I_n$ means $I_n-D\succeq0$. A member of $\mathcal D_r$ need not be
idempotent. The matrix norm and metric used below are the Frobenius norm and its
induced metric. Every rank-$r$ orthogonal projector is in $\mathcal D_r$ by
[[lem-projector-is-admissible-density]].
