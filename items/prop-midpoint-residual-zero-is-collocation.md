---
id: prop-midpoint-residual-zero-is-collocation
kind: proposition
title: "Zeros of the normalized midpoint residual are precisely midpoint collocation solutions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-midpoint-collocation-residual-for-bvps, def-nonlinear-two-point-bvp-and-boundary-residual]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/nonlinear/"

verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For any $Y\in D_h$, $G_h(Y)=0$ if and only if

$$Y_{i+1}-Y_i=h f\!\left(t_i+\frac h2,\frac{Y_i+Y_{i+1}}2\right)\quad(0\le i<N),\qquad B(Y_0,Y_N)=0.$$

Equivalently, the piecewise-linear interpolant has on each segment a constant slope equal to the vector field at the segment midpoint state and satisfies the endpoint residual.

## Facts & Assumptions

**Given:** The BVP data, uniform mesh, admissible node vector, and normalized residual from [[def-midpoint-collocation-residual-for-bvps]].

[F1] [[def-midpoint-collocation-residual-for-bvps]]: every interior block is the increment divided by $h>0$ minus the midpoint vector field, and the last block is $B(Y_0,Y_N)$.

[F2] [[def-nonlinear-two-point-bvp-and-boundary-residual]]: the endpoint equation in the BVP is $B(y(a),y(b))=0$.

## Proof

1.1 If $G_h(Y)=0$, each block is zero. For $i<N$, multiply the normalized row by the positive scalar $h$ to get the stated increment equation; the last block gives $B(Y_0,Y_N)=0$, the BVP endpoint equation by [F2]. [given, F1, F2, algebra]

1.2 Conversely, if all displayed increment equations and the endpoint equation hold, dividing each increment equation by $h>0$ makes every interior block zero, and the endpoint equation makes the last block zero; by [F2] it is the BVP boundary condition. Thus $G_h(Y)=0$. [given, F1, F2, algebra]

2.1 The piecewise-linear interpolant changes by $Y_{i+1}-Y_i$ over an interval of width $h$, so its slope is the quotient on the left of each increment equation. This proves the equivalent slope wording without adding another condition. [step 1.1, step 1.2, algebra] ∎
