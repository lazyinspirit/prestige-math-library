---
id: fs-transfer-matrix-inversion-needs-a-spectral-radius-hypothesis
kind: false-statement
title: "FALSE: The transfer-matrix identity requires a spectral-radius or convergence hypothesis"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-formal-matrix-geometric-series, thm-transfer-matrix-cofactor-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Theorem 4.7.2"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

**False claim.** The identity $(I-xA)^{-1}=\sum_{n\ge0}A^nx^n$ used by the transfer-matrix method requires an analytic convergence or spectral-radius hypothesis.

## Facts & Assumptions

**Given:** A square matrix $A$ over an arbitrary commutative ring $R$.

[L1] In $M_p(R\llbracket x\rrbracket)$, the coefficientwise geometric series is a two-sided inverse of $I-xA$ ([[lem-formal-matrix-geometric-series]]).

[L2] For a finite weighted directed multigraph over a commutative ring with $p\ge1$ vertices and transfer matrix $A$, the walk generating functions are the entries of $(I_p-xA)^{-1}$, equal to cofactors of $I_p-xA$ divided by its determinant ([[thm-transfer-matrix-cofactor-formula]]).

## Refutation

**Proof technique:** formal coefficient calculation.

1.1 Multiplying $(I-xA)$ by $\sum_{n\ge0}A^nx^n$, the constant coefficient is $I$ and each positive coefficient is $A^n-AA^{n-1}=0$; the same calculation works on the other side. This is the identity in [L1]. [given, L1, algebra]

2.1 Every coefficient uses only finitely many ring operations, and the constant matrix coefficient of $I-xA$ is the invertible matrix $I$. No topology, norm, absolute value, or limiting operation occurs. [step 1.1]

3.1 In the transfer-matrix setting itself — a finite weighted digraph over $R$ with $p\ge1$ vertices and transfer matrix $A$ — [L2] reads the walk generating functions off this same formal inverse, again with no analytic hypothesis. So the transfer-matrix identity remains valid over every commutative coefficient ring regardless of spectral radius. This refutes the claim. [step 1.1, step 2.1, L2] ∎
