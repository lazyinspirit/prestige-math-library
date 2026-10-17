---
id: ex-trust-region-singular-hard-case
kind: example
title: "A singular shifted Hessian produces two hard-case minimizers"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-trust-region-quadratic-model-and-ratio
  - lem-trust-region-subproblem-optimality-and-hard-case
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

Take $n=2$, $\Delta=1$, $B=\operatorname{diag}(-2,1)$, and $g=(0,1)$.
The gradient is orthogonal to the most negative eigenspace. The singular
multiplier leaves a free component in that eigenspace, and the boundary
condition produces two distinct global minimizers.

## Facts & Assumptions

**Given:** The model definition
[[def-trust-region-quadratic-model-and-ratio]] and the necessary-and-sufficient
global optimality result [[lem-trust-region-subproblem-optimality-and-hard-case]].

[F1] The model quadratic part is $q(p)=g^Tp+\tfrac12p^TBp$ and its feasible
set is $\|p\|_2\le1$ ([[def-trust-region-quadratic-model-and-ratio]]).

[F2] Feasible points satisfying the shifted-Hessian conditions are global
minimizers ([[lem-trust-region-subproblem-optimality-and-hard-case]]).

## Proof

1.1 The least eigenvalue is $\mu=-2$ with eigenspace $E_\mu=\operatorname{span}\{(1,0)\}$, and $g\perp E_\mu$. The equation $(B-\mu I)p_0=-g$ with $p_0\perp E_\mu$ gives $p_0=(0,-1/3)$, so $\|p_0\|_2=1/3<1$. The missing boundary component has squared norm $1-1/9=8/9$. [given, F1, algebra]

2.1 Let $p_\pm=(\pm2\sqrt2/3,-1/3)$. Each has norm $1$, and $(B+2I)p_\pm=(0,-1)=-g$ with $B+2I=\operatorname{diag}(0,3)\succeq0$. Thus both satisfy [F2] with $\lambda=2$ and are global minimizers. They are distinct, and each has $$q(p_\pm)=-\tfrac13+\tfrac12\left(-2\cdot\tfrac89+\tfrac19\right) =-\tfrac76.$$ This verifies the singular hard case and its two boundary choices. [given, F1, F2, step 1.1, algebra] ∎

