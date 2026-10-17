---
id: ex-two-compartment-stiff-reversible-transfer
kind: example
title: "A stiff reversible two-compartment transfer"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-finite-conservative-production-destruction-system
  - alg-modified-patankar-euler
  - thm-modified-patankar-euler-positive-conservative
  - def-xd-finite-column-generator
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Take state domain $\Omega=\mathbb R^2$ and two compartments with transfers $p_{21}=d_{12}=1000y_1$ and $p_{12}=d_{21}=y_2$, all other transfers zero. This is a stiff reversible conservative system: its fast difference mode has decay rate $1001$. Starting from $y^n=(1,1)$ and taking $h=1$, verify one modified Patankar Euler step and the finite column-generator convention.

## Verification

**Given:** The transfer rates in the Example, the positive input $(1,1)$, and step $h=1$.

[F1] [[def-finite-conservative-production-destruction-system]]: the PDS equations are $y_i'=\sum_j(p_{ij}-d_{ij})$ with $p_{ij}=d_{ji}$.

[F2] [[alg-modified-patankar-euler]]: for positive input and denominators $\sigma_i=y_i^n$, the step solves the transfer-weighted linear system.

[F3] [[thm-modified-patankar-euler-positive-conservative]]: that solve is positive and preserves the sum.

[F4] [[def-xd-finite-column-generator]]: a finite column generator has nonnegative off-diagonal entries and each column sums to zero; column $j$ is the source state.

1.1 The rates satisfy $p_{21}=d_{12}=1000y_1$ and $p_{12}=d_{21}=y_2$, so [F1] gives $y_1'=-1000y_1+y_2$ and $y_2'=1000y_1-y_2$. In the state order $(1,2)$ the coefficient matrix is $Q=\begin{pmatrix}-1000&1\\1000&-1\end{pmatrix}$; its off-diagonal entries are nonnegative and both column sums are zero, so it is a finite column generator under [F4]. [F1, F4, algebra]

1.2 With $h=1$ and $y^n=(1,1)$, [F2] gives $\begin{pmatrix}1001&-1\\-1000&2\end{pmatrix}y^{n+1}=\begin{pmatrix}1\\1\end{pmatrix}$. The determinant is $1001\cdot2-1000=1002$, and direct elimination gives $y_1^{n+1}=3/1002=1/334$ and $y_2^{n+1}=2001/1002=667/334$. Both coordinates are positive and their sum is $2$, as also predicted by [F3]. [F2, F3, algebra]

2.1 For total mass $M=y_1+y_2$ and $s=1001$, the continuous first coordinate obeys $y_1'=-s(y_1-y_1^*)$ with equilibrium $y_1^*=M/1001$. The one-step formula in step 1.2 satisfies $y_1^{n+1}-y_1^*=(y_1^n-y_1^*)/(1+hs)$; for $h=1$ this positive damping factor is $1/1002$ although $hs=1001$. This verifies the large-rate damping for the specified example without inferring a general stability theorem. [F1, step 1.2, algebra] ∎
