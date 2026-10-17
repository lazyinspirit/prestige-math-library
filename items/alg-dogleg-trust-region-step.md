---
id: alg-dogleg-trust-region-step
kind: algorithm
title: "Dogleg steps for positive-definite trust-region models"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-trust-region-quadratic-model-and-ratio
  - alg-trust-region-cauchy-step
  - def-definite-and-indefinite-hessian-quadratic-forms
justified_by:
  - lem-positive-definite-model-has-unique-newton-step
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 4, §4.1, pp. 73–75 / PDF pp. 93–95: the positive-definite dogleg path and its trust-boundary intersection."
---

## Definition

Input a quadratic trust-region model of
[[def-trust-region-quadratic-model-and-ratio]] with positive-definite $B$
([[def-definite-and-indefinite-hessian-quadratic-forms]]) and radius
$\Delta>0$. If $g=0$, return $p=0$ with status `stationary`. Otherwise
compute the Cauchy step $p_C$ by [[alg-trust-region-cauchy-step]] and the
Newton-model step $p_N$ by solving $Bp_N=-g$.

1. If $\|p_N\|_2\le\Delta$, return $p_N$.
2. If $\|p_C\|_2=\Delta$, return $p_C$.
3. Otherwise put $d:=p_N-p_C$, $a:=\|d\|_2^2$,
   $b:=2\langle p_C,d\rangle$, and $c:=\|p_C\|_2^2-\Delta^2<0$. Compute
   $$t:=\frac{-b+\sqrt{b^2-4ac}}{2a}.$$
   Set $p_D:=p_C+td$, the boundary intersection on the segment from the
   Cauchy step to the Newton-model step.
4. Compare the two model values. Return $p_D$ if $m(p_D)\le m(p_C)$ and
   return $p_C$ otherwise.

The status is `step` in the nonstationary branches.
