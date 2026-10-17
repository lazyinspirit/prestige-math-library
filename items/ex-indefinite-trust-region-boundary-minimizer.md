---
id: ex-indefinite-trust-region-boundary-minimizer
kind: example
title: "An indefinite quadratic has a unique boundary trust-region minimizer"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-trust-region-quadratic-model-and-ratio
  - lem-trust-region-subproblem-optimality-and-hard-case
  - alg-trust-region-cauchy-step
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

Take $n=2$, $\Delta=1$, $B=\operatorname{diag}(-1,1)$, and
$g=(-1,-3)/\sqrt2$. The model Hessian is indefinite. The exact global
trust-region minimizer is a unique boundary point, while the Cauchy step is a
different feasible boundary point with a strictly smaller predicted decrease.

## Facts & Assumptions

**Given:** The trust-region model of [[def-trust-region-quadratic-model-and-ratio]],
the optimality characterization of
[[lem-trust-region-subproblem-optimality-and-hard-case]], and the Cauchy
procedure of [[alg-trust-region-cauchy-step]].

[F1] The model is $m(p)=f(x)+g^Tp+\tfrac12p^TBp$ and feasibility is
$\|p\|_2\le1$ ([[def-trust-region-quadratic-model-and-ratio]]).

[F2] A feasible $p$ satisfying the shifted-Hessian equation, positive
semidefiniteness, and multiplier complementarity is a global minimizer
([[lem-trust-region-subproblem-optimality-and-hard-case]]).

[F3] For $g^TBg>0$, the Cauchy step is
$p_C=-\min\{\|g\|_2^2/(g^TBg),\Delta/\|g\|_2\}g$
([[alg-trust-region-cauchy-step]]).

## Proof

1.1 Set $p_*=(1,1)/\sqrt2$. Then $\|p_*\|_2=1$, $(B+2I)p_*=(1,3)/\sqrt2=-g$, and $B+2I=\operatorname{diag}(1,3)$ is positive definite. With $\lambda=2$, complementarity holds at the boundary, so [F2] gives a global minimizer. For any other feasible $z\ne p_*$, expansion gives $$m(z)-m(p_*)=\tfrac12(z-p_*)^T(B+2I)(z-p_*)+(1-\|z\|_2^2)>0,$$ because the first term is strictly positive and the second nonnegative; hence the minimizer is unique. [given, F1, F2, algebra]

2.1 The global minimizer has $g^Tp_*=-2$ and $p_*^TBp_*=0$, so its predicted reduction is $2$. For the Cauchy step, $\|g\|_2^2=5$ and $g^TBg=4$, hence [F3] gives $p_C=(1,3)/\sqrt{10}$ and $\|p_C\|_2=1$. Its model value is $m(p_C)=f(x)-\sqrt5+2/5$, so its predicted reduction is $\sqrt5-2/5<2$; the strict inequality follows from $\sqrt5<12/5$. [given, F1, F3, algebra] ∎

