---
id: ex-stable-linear-noise-lyapunov-covariance
kind: example
title: "A stable linear noise covariance balance has a positive solution"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-hurwitz-matrix-and-continuous-lyapunov-equation
  - thm-continuous-lyapunov-integral-and-positivity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

For $A=\operatorname{diag}(-1,-2)$ and noise-factor column $B=(1,1)^T$, the stable covariance-balance equation is $AX+XA^T+BB^T=0$. Its unique positive solution is

$$
X=\begin{pmatrix}1/2&1/3\\1/3&1/4\end{pmatrix}.
$$

This verifies the algebraic covariance balance and its positive solution; it does not assert a separate stochastic realization or stationary-law theorem.

## Facts & Assumptions

**Given:** The matrices in the Example.

[F1] [[def-hurwitz-matrix-and-continuous-lyapunov-equation]]: $A$ is Hurwitz when all its eigenvalues have negative real part, and the balance is $AX+XA^T+Q=0$.

[F2] [[thm-continuous-lyapunov-integral-and-positivity]]: For Hurwitz $A$, the Lyapunov equation has a unique solution, and the integral solution is positive definite under the stated conditions.

## Verification


1.1 The eigenvalues of $A$ are $-1$ and $-2$, so $A$ is Hurwitz by [F1]. Direct multiplication gives $BB^T=\begin{pmatrix}1&1\\1&1\end{pmatrix}$ and $AX+XA^T=\begin{pmatrix}-1&-1\\-1&-1\end{pmatrix}=-BB^T$. Thus the displayed $X$ solves the balance. [given, F1, algebra]

2.1 For real $(u,v)$, $\begin{pmatrix}u&v\end{pmatrix}X\begin{pmatrix}u\\v\end{pmatrix}=\frac12(u+\frac23v)^2+\frac1{36}v^2$, which is positive unless $u=v=0$. Hence $X\succ0$. [step 1.1, algebra]

3.1 Since $A$ is Hurwitz, [F2] gives uniqueness of the solution, so this positive matrix is the unique stable Lyapunov covariance-balance solution. [F1, F2, step 1.1, step 2.1] ∎
