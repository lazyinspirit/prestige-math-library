---
id: ex-kernel-ridge-singular-and-zero-gram-matrices
kind: example
title: Kernel ridge systems with singular and zero Gram matrices
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-regularized-kernel-prediction-system
  - lem-regularized-gram-matrix-inverse-bound
  - thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective
justified_by: []
proof_strategy: direct finite verification
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  task: Compute the regularized coefficient and training fit for singular and zero positive-semidefinite Gram matrices.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: 'Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 6 §6.2.2'
      url: https://gaussianprocess.org/gpml/chapters/RW6.pdf
      locator: Equations (6.19)–(6.20), printed pp. 132–133.
---

## Example

For $\tau>0$, the singular matrix $K=\operatorname{diag}(1,0)$ and response $y=(p,q)^T$ give coefficient vector $a=((1+\tau)^{-1}p,\tau^{-1}q)^T$ and training fitted vector $u=((1+\tau)^{-1}p,0)^T$. For the zero matrix $K=0$ of any dimension $n\ge1$ and any response $y\in\mathbb R^n$, the coefficient vector is $a=y/\tau$ and the fitted vector is $u=0$.

## Example references

[[def-regularized-kernel-prediction-system]]: The system is $a=(K+\tau I)^{-1}y$ and $u=Ka$.

[[thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective|These vectors give the unique minimizer whenever the Gram matrix comes from the stated real RKHS kernel.]]

## Facts & Assumptions

**Given:** $\tau>0$, $p,q\in\mathbb R$, and the singular and zero matrices and responses in the Example.

[A1] The matrices and responses are exactly those in the Example.

[F1] [[def-regularized-kernel-prediction-system]]: the coefficient solves $(K+\tau I_n)a=y$ and the fitted vector is $u=Ka$.

[F2] [[lem-regularized-gram-matrix-inverse-bound]]: if $K\succeq0$ and $\tau>0$, then $K+\tau I_n$ is invertible.

[F3] [[thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective]]: for a real RKHS kernel and $\lambda=\tau/n>0$, the same coefficient vector yields the unique minimizer of the mean-square RKHS objective.

## Verification

**Given:** The matrices and responses in [A1].

1.1 For $K=\operatorname{diag}(1,0)$, $K+\tau I_2=\operatorname{diag}(1+\tau,\tau)$, whose inverse is $\operatorname{diag}((1+\tau)^{-1},\tau^{-1})$. Multiplication by $(p,q)^T$ gives the displayed coefficient vector, and multiplication by $K$ gives $u=((1+\tau)^{-1}p,0)^T$. [given, A1, F1, F2, algebra]

2.1 For $K=0$, $K+\tau I_n=\tau I_n$ has inverse $\tau^{-1}I_n$, so $a=y/\tau$ and $u=Ka=0$ for every $n\ge1$. Both matrices are positive semidefinite, and [F3] identifies their finite systems with the stated RKHS minimizers when the kernel hypotheses hold. [given, A1, F1, F2, F3, algebra] ∎
