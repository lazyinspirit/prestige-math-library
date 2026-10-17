---
id: ex-boundary-barrier-conditioning
kind: example
title: "A central path approaches the boundary and the Hessian conditioning diverges"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-barrier-central-path-and-newton-residuals
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
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
      locator: "Chapter 11 §§11.2–11.3, central path and logarithmic barrier Hessian."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 15"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture15.pdf"
      locator: "Full lecture, central-path definition and path limit."
---

## Example

Consider $\min x_1$ subject to $x_1\ge0$, $x_2\ge0$, and $x_1+x_2\le1$. On the strict interior the logarithmic barrier objective at parameter $t>0$ is
$$\Phi_t(x)=t x_1-\log x_1-\log x_2-\log(1-x_1-x_2).$$

## Facts & Assumptions

**Given:** The strict feasible region and barrier objective above; write $q=1-x_1-x_2$.

[F1] Any attained minimizer of the logarithmic barrier objective $\Phi_t$ in the strict feasible region is a central point ([[def-barrier-central-path-and-newton-residuals]]).

[F2] A real symmetric matrix has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]); hence its extreme eigenvalues bound each unit-vector Rayleigh quotient.

## Verification

1.1 The closed feasible triangle $\{x_1\ge0,x_2\ge0,x_1+x_2\le1\}$ is compact, and $x_1,x_2,q$ lie in $[0,1]$. On its strict interior, each barrier term is nonnegative; as any boundary point is approached, at least one of $x_1,x_2,q$ tends to zero and its negative logarithm tends to $+\infty$, while $t x_1$ is bounded. Fix any strict-interior point. Its objective sublevel set is therefore separated from the boundary, closed in the compact triangle by continuity, and compact; the objective attains a strict-interior minimizer. Direct differentiation gives $H_t=\begin{pmatrix}x_1^{-2}+q^{-2}&q^{-2}\\q^{-2}&x_2^{-2}+q^{-2}\end{pmatrix}$, whose quadratic form is $h_1^2/x_1^2+h_2^2/x_2^2+(h_1+h_2)^2/q^2>0$ for every nonzero $h$, so the minimizer is unique. At the central point, the $x_2$ derivative is $-1/x_2+1/q=0$, hence $q=x_2$ and $x_1+2x_2=1$. The $x_1$ derivative is $t-1/x_1+1/q=0$, so $1/x_1=t+1/x_2>t$ and $0<x_1<1/t$. Consequently $x_1\to0$ and $x_2=q\to1/2$ as $t\to\infty$. [given, F1, algebra]

2.1 For $t\ge4$, step 1.1 gives $x_1<1/4$ and $x_2=q=(1-x_1)/2>3/8$. By [F2] applied to the coordinate unit vectors, $\lambda_{\max}(H_t)\ge(H_t)_{11}>x_1^{-2}>t^2$ and $0<\lambda_{\min}(H_t)\le(H_t)_{22}=x_2^{-2}+q^{-2}<2(8/3)^2=128/9$. With $\kappa_2(H_t):=\lambda_{\max}(H_t)/\lambda_{\min}(H_t)$ for this positive-definite Hessian, $\kappa_2(H_t)>9t^2/128$, exhibiting growing conditioning as the central path approaches the boundary. [F2, step 1.1, algebra] ∎
