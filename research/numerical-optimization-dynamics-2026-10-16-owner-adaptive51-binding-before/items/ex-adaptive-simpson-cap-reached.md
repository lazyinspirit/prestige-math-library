---
id: ex-adaptive-simpson-cap-reached
kind: example
title: A narrow peak reaches the adaptive Simpson depth cap
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-adaptive-simpson-with-finite-depth-and-panel-cap
  - def-adaptive-simpson-refinement-indicator
  - alg-composite-simpson-rule
justified_by: []
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.7
      url: https://fncbook.com/adaptive/
      locator: §5.7.2, adaptive subdivision and stopping by an error indicator.
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.2
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
      locator: Printed pp. 7–8; Simpson formula.
---

## Example

Let $f(x)=1/(1+10000(x-1/2)^2)$ on $[0,1]$. With tolerance
$\tau=1/1000$, depth cap $D=0$, and panel-call budget $P=1$,
[[alg-adaptive-simpson-with-finite-depth-and-panel-cap]] returns the refined
estimate with `cap-reached` status.

## Facts & Assumptions

**Given:** The real-valued rational function $f$ on $[0,1]$, exact arithmetic,
and the adaptive call with $D=0$, $P=1$, $\tau=1/1000$.

[F1] [[alg-adaptive-simpson-with-finite-depth-and-panel-cap]]: if the local
indicator exceeds its tolerance and the depth cap is reached, the call
returns its refined estimate with `cap-reached` status.

[F2] [[def-adaptive-simpson-refinement-indicator]]: the local indicator is
$|S_1-S_0|/15$.

[F3] [[alg-composite-simpson-rule]]: on an even uniform grid, the composite
Simpson value is the weighted sum of the sampled endpoint, midpoint and
quarter-grid values.

## Verification

1.1 The endpoint values are $f(0)=f(1)=1/2501$, the midpoint value is $f(1/2)=1$, and the quarter-point values are $f(1/4)=f(3/4)=1/626$. The composite rule [F3] gives $S_0=2/3+1/7503$ and $S_1=(1/12)(2+8/626+2/2501)$. [given, F2, F3, algebra]

2.1 Since $8/626=4/313<1/75$ and $2/2501<1/1000$, $S_1<6043/36000$, while $S_0>2/3$. Therefore $S_0-S_1>17957/36000$, and the indicator exceeds $17957/540000>1/1000=\tau$. [given, F2, step 1.1, algebra]

3.1 The indicator rejects the root, and $D=0$ prevents subdivision. By [F1], the procedure returns the refined estimate with `cap-reached` status; it makes no tolerance-success claim. [given, F1, step 2.1, algebra] ∎

