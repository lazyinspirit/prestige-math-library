---
id: alg-adaptive-simpson-with-finite-depth-and-panel-cap
kind: algorithm
title: Finite-depth adaptive Simpson with an indicator
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-composite-simpson-rule
  - def-adaptive-simpson-refinement-indicator
justified_by: [thm-adaptive-simpson-cap-termination-and-indicator-budget]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.7
      url: https://fncbook.com/adaptive/
      locator: §§5.7.1–5.7.3 and Example 5.7.2; Simpson refinement, acceptance, bisection, and explicit tolerance failure.
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: §5.6.2; Simpson rule from one level of extrapolation.
---

## Definition

Input $a<b$, an absolute indicator tolerance $\tau>0$, a remaining depth
$D\in\mathbb N$ and a positive panel-call budget $P\in\mathbb N$, and a
deterministic evaluation routine $\operatorname{Eval}$ that returns a finite
real value at a requested node or reports failure. It reports failure when a
required node cannot be evaluated, including when its midpoint is
unrepresentable in the evaluator's arithmetic. Apply the exact-real Simpson
formulas of [[alg-composite-simpson-rule]] to the returned values;
floating-point rounding accuracy is not asserted.

Define the recursive call $A(u,v,d,p,t)$ for $u<v$, $d\ge0$, $p\ge1$ and
$t>0$ as follows.

1. Compute $m=(u+v)/2$ and the five values of $\operatorname{Eval}$ at
   $u,(3u+v)/4,m,(u+3v)/4,v$. On failure, return `failure` with no estimate.
2. Compute $S_0=Q_S(f;u,v,2)$ and $S_1=Q_S(f;u,v,4)$ from the two nested
   grids of [[def-adaptive-simpson-refinement-indicator]], and put
   $\eta=\eta_2(f;u,v)=|S_1-S_0|/15$.
3. If $\eta\le t$, return (`accepted`, estimate $S_1$, indicator $\eta$).
4. If $\eta>t$ and either $d=0$ or $p<3$, return (`cap-reached`, estimate
   $S_1$, indicator $\eta$).
5. Otherwise put $p_L=\lfloor(p-1)/2\rfloor$ and
   $p_R=\lceil(p-1)/2\rceil$. Recursively call
   $A(u,m,d-1,p_L,t/2)$ and $A(m,v,d-1,p_R,t/2)$. If either returns failure,
   return failure. Otherwise return the sum of their estimates and indicators,
   with status `cap-reached` if either child has that status and `accepted`
   otherwise.

The public call is $A(a,b,D,P,\tau)$. The budget counts recursive panel calls;
each call uses at most five point evaluations. `accepted` means that the
returned leaf indicators sum to at most $\tau$. Neither that status nor the
indicator is a certified true-error statement. A cap result is an estimate
with explicit `cap-reached` status, not a successful tolerance claim.
