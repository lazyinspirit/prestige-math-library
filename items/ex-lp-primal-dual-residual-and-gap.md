---
id: ex-lp-primal-dual-residual-and-gap
kind: example
title: "An LP primal-dual residual and exact gap certificate"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones
  - thm-fraction-to-boundary-and-primal-dual-gap-certificates
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
      locator: "Chapter 11 §11.7, primal-dual residuals and surrogate gap."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full §16.1, standard-form LP."
---

## Example

For $\min x_1+2x_2$ subject to $x_1+x_2=1$ and $x\ge0$, take candidate $x=(3/5,2/5)$, dual scalar $y=1$, and dual slack $s=(0,1)$.

## Facts & Assumptions

**Given:** $A=(1,1)$, $b=1$, $c=(1,2)$, and the candidate variables above.

[F1] The algorithm's residuals are $r_p=Ax-b$ and $r_d=c-A^Ty-s$ for this LP ([[alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones]]).

[F2] Exact primal feasibility, dual feasibility, stationarity, and gap $x^Ts$ imply $0\le f_0(x)-p^*\le x^Ts$ ([[thm-fraction-to-boundary-and-primal-dual-gap-certificates]]).

## Verification

1.1 The primal residual is $(1,1)\cdot(3/5,2/5)-1=0$. The dual stationarity residual is $c-A^Ty-s=(1,2)-(1,1)-(0,1)=(0,0)$, and $x\ge0$, $s\ge0$, so the candidate pair is exactly feasible. [given, F1, algebra]

2.1 The primal objective is $3/5+2(2/5)=7/5$, the dual value is $b y=1$, and the gap is $x^Ts=2/5$. Every primal feasible vector has $x_1+x_2=1$, $x_i\ge0$, and objective $x_1+2x_2=1+x_2\ge1$; the feasible point $(1,0)$ attains $1$, so $p^*=1$. Thus the objective error is exactly $7/5-1=2/5=x^Ts$, and [F2] gives the same certified upper bound. [F2, step 1.1, algebra] ∎
