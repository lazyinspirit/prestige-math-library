---
id: ex-xd-periodic-iteration-versus-stationarity
kind: example
title: "Periodic iteration can fail while the stationary solve is well-defined"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - lem-dobrushin-zero-sum-l1-coefficient
  - thm-m-step-dobrushin-stationary-residual-bound
  - alg-corrected-stationary-residual-certificate
  - thm-irreducible-finite-class-has-unique-invariant-vector
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§11.3, Example 11.16, printed pp. 432–433; an irreducible periodic chain need not have convergent powers."
    - title: "Ilse C. F. Ipsen and Teresa M. Selee, Ergodicity Coefficients Defined by Vector Norms"
      url: "https://ipsen.math.ncsu.edu/ps/simax75294.pdf"
      locator: "§3, Theorem 3.7 and Corollary 3.9, PDF pp. 12–13; permutation columns have coefficient one, while identical columns have coefficient zero."
verification:
  precheck: pass
---

## Example

For the two-state periodic chain

$$P=\begin{pmatrix}0&1\\1&0\end{pmatrix},$$

the unique stationary law is $(1/2,1/2)^{\mathsf T}$, but power iteration from $e_1$ alternates forever. For $m=1$, the global overlap coefficient is one and the residual certificate is unavailable. The lazy matrix $L=(I+P)/2$ has identical columns, coefficient zero, and certifies the stationary law after one step.

## Verification

**Given:** The periodic matrix P, initial vector $e_1$, and lazy matrix $L=(I+P)/2$.

[F1] [[thm-irreducible-finite-class-has-unique-invariant-vector]]: an irreducible finite transition matrix has a unique invariant probability, even when its powers are periodic.

[F2] [[lem-dobrushin-zero-sum-l1-coefficient]]: the coefficient is one minus the minimum pairwise column overlap.

[F3] [[alg-corrected-stationary-residual-certificate]]: for exact rational P and raw y with $\sum_i y_i^+>0$, a computed coefficient at least one returns `certificate-unavailable`; a coefficient below one returns a residual bound.

[F4] [[thm-m-step-dobrushin-stationary-residual-bound]]: a coefficient below one gives the stationary residual error bound.

**Proof technique:** direct exact calculation.

1.1 The matrix P is a row and column transition matrix, is irreducible, and $\pi=(1/2,1/2)^{\mathsf T}$ satisfies $P\pi=\pi$. Hence [F1] identifies it as the unique stationary law. But $Pe_1=e_2$ and $Pe_2=e_1$, so $P^ne_1$ alternates between two distinct vectors and does not converge. [given, F1, algebra]

2.1 The columns of P are $e_2,e_1$ and have overlap zero, so [F2] gives $\delta(P)=1$; every power is either P or I and also has coefficient one. With exact raw input $y=e_1$, the algorithm reaches its coefficient branch and [F3] returns `certificate-unavailable` for the ordinary chain. [F2, F3, step 1.1, algebra]

3.1 The lazy matrix has both columns equal to $\pi$, hence [F2] gives $\delta(L)=0$. With raw input $y=e_1$, the corrected algorithm has correction zero, residual $Le_1-e_1=(-1/2,1/2)^{\mathsf T}$ of norm one, and bound $1/(1-0)=1$. This equals $\|e_1-\pi\|_1$, so [F4] certifies the stationary law. [F2, F3, F4, step 1.1, algebra] ∎
