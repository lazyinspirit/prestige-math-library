---
id: ex-strict-versus-weak-semidefinite-feasibility
kind: example
title: "Strict feasibility, boundary feasibility, and a weakly infeasible SDP"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-conic-optimization-primal-dual-models
  - lem-psd-cone-self-dual-logdet-barrier
  - thm-phase-i-margin-status-and-weak-infeasibility
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
proof_strategy: direct
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §11.4 and Chapter 11 §§11.6.1–11.6.2, Phase I and SDP cones."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full §16.3, semidefinite programming."
---

## Example

Two affine slices of $\mathbb S^2$ illustrate why Phase I must report a zero margin as inconclusive.

## Facts & Assumptions

**Given:** The positive-semidefinite cone $\mathbb S^2_+$ and the Phase-I margin model of [[thm-phase-i-margin-status-and-weak-infeasibility]].

[F1] $X\succeq0$ exactly when $v^TXv\ge0$ for every $v$, and the cone is self-dual ([[lem-psd-cone-self-dual-logdet-barrier]]).

[F2] A zero Phase-I margin alone does not decide feasibility ([[thm-phase-i-margin-status-and-weak-infeasibility]]).

## Verification

1.1 The slice $X_{11}=1$, $X_{22}=0$ is feasible at $X=\operatorname{diag}(1,0)$ but has no positive-definite point: a symmetric matrix in the slice is $X(a)=\begin{pmatrix}1&a\\a&0\end{pmatrix}$. If $a\ne0$, the vector $(-a,1)$ gives $(-a,1)X(a)(-a,1)^T=-a^2<0$, so $X(a)$ is not positive semidefinite; if $a=0$, it is singular. Its Phase-I margin with $e=I$ is $0$, since $X(0)+\tau I=\operatorname{diag}(1+\tau,\tau)\succeq0$ for $\tau\ge0$ and is impossible for $\tau<0$ by testing the second coordinate. [F1, F2, given, algebra]

2.1 Every matrix in the slice $X_{22}=0$, $X_{12}=1$ has form $X(t)=\begin{pmatrix}t&1\\1&0\end{pmatrix}$. If $t>0$, the vector $(-1/t,1)$ gives quadratic form $-1/t<0$; if $t=0$, vector $(-1,1)$ gives $-2<0$; if $t<0$, vector $(1,0)$ gives $t<0$. Thus the slice is infeasible. For $t>0$, the matrix $Y(t)=\begin{pmatrix}t&1\\1&1/t\end{pmatrix}$ is positive semidefinite because its quadratic form is $t(u+v/t)^2$; its Frobenius distance from $X(t)$ is $1/t\to0$. For any $\tau>0$, choose $t=1/\tau$. Then $X(t)+\tau I$ has quadratic form $\left(\frac1\tau+\tau\right)u^2+2uv+\tau v^2=\left(\frac1\tau+\tau\right)\left(u+\frac{\tau v}{1+\tau^2}\right)^2+\frac{\tau^3}{1+\tau^2}v^2$, which is positive for every nonzero $(u,v)$, so it is positive definite and $\tau$ is Phase-I feasible. If $\tau<0$, the lower-right diagonal entry of $X(t)+\tau I$ is $\tau<0$, so it cannot be positive semidefinite. Hence the Phase-I infimum is zero and is not attained. [F1, F2, given, algebra] ∎
