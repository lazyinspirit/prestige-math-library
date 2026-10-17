---
id: ex-exponential-kinetics-gauss-newton-fit
kind: example
title: "An exponential-decay kinetics fit has a full-rank exact solution"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-gauss-newton-qr-svd-step-with-rank-safeguard
  - cor-exponential-reciprocal-and-positivity
  - thm-derivative-of-exponential
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 10, §10.1, Example 10.1, printed pp. 247–248 / PDF pp. 266–267: exponential-decay model fitting."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Section Nonlinear least squares: model-fitting residuals and the least-squares objective."
---

## Example

Fit the one-rate exponential-decay model $y(t;a,k)=ae^{-kt}$ to observations at
$t=0$ and $t=1$ with values $2$ and $2e^{-1}$. Its residual is
$r(a,k)=(a-2,\;ae^{-k}-2e^{-1})^T$. The parameter $x_*=(2,1)$ is an exact fit,
and the Jacobian there has full column rank. Thus the exact full-rank
Gauss-Newton step at $x_*$ is zero. This is a local exact-fit illustration; it
does not claim that a nonlinear iteration from every initial parameter
converges to $x_*$.

## Facts & Assumptions

**Given:** The model, observations, residual, and candidate parameters in the Example.

[F1] [[alg-gauss-newton-qr-svd-step-with-rank-safeguard]]: with a supplied exact reduced QR factorization, the full-column-rank exact branch returns the unique minimizer of the linearized residual problem.

[F2] [[thm-derivative-of-exponential]]: the derivative of $e^u$ is $e^u$.

[F3] [[cor-exponential-reciprocal-and-positivity]]: $e^{-1}>0$.

## Verification

1.1 At $x_*=(2,1)$, the residual components are $r_1=2-2=0$ and $r_2=2e^{-1}-2e^{-1}=0$. By [F2], the Jacobian is $J(a,k)=\begin{bmatrix}1&0\\e^{-k}&-ae^{-k}\end{bmatrix}$, hence $J(x_*)=\begin{bmatrix}1&0\\e^{-1}&-2e^{-1}\end{bmatrix}$. [given, F2, algebra]

2.1 Put $c=e^{-1}>0$ and $s=\sqrt{1+c^2}$. Supply the exact reduced QR factorization $Q=\begin{bmatrix}1/s&c/s\\c/s&-1/s\end{bmatrix}$ and $R=\begin{bmatrix}s&-2c^2/s\\0&2c/s\end{bmatrix}$, for which $Q^TQ=I$ and $QR=J(x_*)$; its diagonal entries are positive. The determinant of $J(x_*)$ is $-2e^{-1}\ne0$ by [F3], so the parameters are locally identifiable by the linearized model. Since $r(x_*)=0$, the linearized least-squares objective is $\|J(x_*)p\|_2^2/2$, whose unique minimizer is $p=0$. By [F1], the supplied exact QR branch returns this step. [step 1.1, F1, F3, algebra] ∎
