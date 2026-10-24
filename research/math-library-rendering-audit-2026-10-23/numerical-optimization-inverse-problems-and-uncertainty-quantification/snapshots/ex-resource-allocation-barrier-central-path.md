---
id: ex-resource-allocation-barrier-central-path
kind: example
title: "A two-resource allocation LP and its central path"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-conic-optimization-primal-dual-models
  - def-barrier-central-path-and-newton-residuals
  - lem-nonnegative-orthant-log-barrier
  - thm-central-path-barrier-gap-and-dual-certificate
  - thm-short-step-complexity-and-primal-gap-bound
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §§11.2–11.5, LP central path and the m/t gap."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 15: Path-following methods"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture15.pdf"
      locator: "Full lecture, path-following and central-path gap."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16: LP, SOCP, and SDP"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full lecture, §16.1 LP standard form."
---

## Example

Allocate one unit between two resources by minimizing $x_1+2x_2$ subject to $x_1+x_2=1$ and $x_1,x_2\ge0$. The exact optimum is $1$, at $(1,0)$.

## Facts & Assumptions

**Given:** The LP, the strict-interior logarithmic barrier objective $t(x_1+2x_2)-\log x_1-\log x_2$, and the exact candidate $x_1(1)=(\sqrt5-1)/2$, $x_2(1)=(3-\sqrt5)/2$ at $t_0=1$.

[F1] The exact central point has gap at most $m/t$ ([[thm-central-path-barrier-gap-and-dual-certificate]]).

[F2] For valid inputs with positive-definite restricted barrier Hessian and finite primal value, the short-step theorem gives the stated count from a strictly feasible centered start, provided the exact Newton solver is supplied and the finite caps permit all required updates ([[thm-short-step-complexity-and-primal-gap-bound]]).

[F3] The orthant log barrier $-\log x_1-\log x_2$ has parameter $\nu=2$ ([[lem-nonnegative-orthant-log-barrier]]).

## Verification

1.1 Substituting $x_2=1-x_1$, stationarity of the barrier objective gives $-t-1/x_1+1/x_2=0$, or $1/x_2-1/x_1=t$. Multiplying by $x_1x_2>0$ and using $x_1+x_2=1$ yields $t x_1^2+(2-t)x_1-1=0$. Its roots are $(t-2\pm\sqrt{t^2+4})/(2t)$; because $\sqrt{t^2+4}>|t-2|$, only the plus root is positive. Thus $x_1=(t-2+\sqrt{t^2+4})/(2t)$, and rationalizing $1-x_1$ gives $x_2=2/(t+2+\sqrt{t^2+4})>0$. These coordinates sum to one and satisfy stationarity. The restricted second derivative is $1/x_1^2+1/x_2^2>0$, so the stationary point is the unique exact central point. At $t_0=1$ these become the values in **Given**, whose reciprocal difference is $1$; hence the supplied start is exact and its decrement is zero. [given, algebra]

2.1 The central inequality multipliers are $\lambda_i=1/(t x_i)>0$. Their difference is $\lambda_2-\lambda_1=(1/t)(1/x_2-1/x_1)=1$, so the equality multiplier $y=1-\lambda_1=2-\lambda_2$ satisfies both dual stationarity equations. Every primal feasible vector has objective $x_1+2x_2=1+x_2\ge1$, while $(1,0)$ attains $1$, so $p^*=1$ and the objective excess is $x_2$. The primal-dual gap is $x_1\lambda_1+x_2\lambda_2=2/t$; hence $x_2\le2/t$ by [F1]. By [F3], $\nu=2$. For $0<\varepsilon<3$, put $K=\lceil\log(3/\varepsilon)/\log(1+1/(8\sqrt2))\rceil$, supply exact solves of the scalar restricted Newton equations, and choose $N_{out}\ge K$ and $N_{in}\ge2$. Their scalar Hessian is positive by step 1.1. With the exact $t_0=1$ start from that step and $p^*=1$, all hypotheses of [F2] hold, so at most $K$ path updates suffice, with at most two corrections each. [F1, F2, F3, step 1.1, algebra] ∎
