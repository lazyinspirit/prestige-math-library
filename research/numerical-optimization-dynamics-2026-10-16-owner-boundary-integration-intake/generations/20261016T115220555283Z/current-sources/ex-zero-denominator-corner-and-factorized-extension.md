---
id: ex-zero-denominator-corner-and-factorized-extension
kind: example
title: "A zero compartment makes the standard ratio undefined"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-finite-conservative-production-destruction-system
  - alg-modified-patankar-euler
  - def-source-factored-production-destruction-rates
  - alg-zero-compatible-modified-patankar-euler
  - thm-zero-compatible-modified-patankar-euler-admissibility
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
---

## Example

Take state domain and factorization neighborhood $\Omega=U=\mathbb R^2$ and $K=\{(1,0)\}$. Consider two compartments $X,Y$ with transfers $X\to Y$ at rate $2y_X$ and $Y\to X$ at rate $3y_Y$, starting from $(y_X^n,y_Y^n)=(1,0)$. Verify that the standard denominator choice $\sigma_i=y_i^n$ is undefined, while the source-factored zero-compatible step with $h=1$ is well-defined and conserves mass.

## Verification

**Given:** The two transfer rates, initial state $(1,0)$, and step $h=1$.

[F1] [[def-finite-conservative-production-destruction-system]]: a transfer from donor $j$ to recipient $i$ is $p_{ij}=d_{ji}$.

[F2] [[alg-modified-patankar-euler]]: the standard step requires every declared denominator $\sigma_j>0$ and rejects nonpositive denominators before rate evaluation; its standard consistency choice is $\sigma_j=y_j^n$.

[F3] [[def-source-factored-production-destruction-rates]]: a transfer from donor $j$ factors as $p_{ij}(y)=y_j a_{ij}(y)$, with the coefficient defined also at zero.

[F4] [[alg-zero-compatible-modified-patankar-euler]]: the factorized update solves $(I-hB(y^n))y^{n+1}=y^n$ without dividing by $y_j^n$.

[F5] [[thm-zero-compatible-modified-patankar-euler-admissibility]]: this update is uniquely defined, nonnegative, and mass-conservative for nonnegative input.

1.1 The rates are $p_{21}=d_{12}=2y_X$ and $p_{12}=d_{21}=3y_Y$, so [F1] holds. At $y^n=(1,0)$, the standard choice has $\sigma_Y=0$, so [F2] returns inadmissible-input before evaluating a rate. The displayed standard-step equation itself would contain $p_{12}(y^n)y_Y^{n+1}/\sigma_Y=0\cdot y_Y^{n+1}/0$, which is undefined; assigning $0/0=0$ is not an algebraic evaluation of that expression. [F1, F2, algebra]

1.2 The transfer factors are $a_{21}=2$ and $a_{12}=3$, both defined at $(1,0)$. With $h=1$, [F4] gives $\begin{pmatrix}3&-3\\-2&4\end{pmatrix}y^{n+1}=\begin{pmatrix}1\\0\end{pmatrix}$, whose determinant is $6$ and whose solution is $(y_X^{n+1},y_Y^{n+1})=(2/3,1/3)$. [F3, F4, algebra]

2.1 The computed coordinates are nonnegative and sum to $1$, equal to the initial total. This agrees with [F5] and exhibits a well-defined first-order zero-state extension; it makes no second-order claim for a zero MPRK stage. [F5, step 1.2, algebra] ∎
