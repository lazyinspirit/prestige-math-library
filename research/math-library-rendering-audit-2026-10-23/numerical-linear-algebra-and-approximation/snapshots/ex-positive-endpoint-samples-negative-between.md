---
id: ex-positive-endpoint-samples-negative-between
kind: example
title: Positive endpoint samples do not ensure a positive interpolant
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-piecewise-bernstein-representation,
    def-binomial-coefficient,
    def-canonical-natural,
    thm-bernstein-convex-hull-and-positivity
  ]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

The quadratic $p(t)=t^2-t+1/10$ is positive at both sampled endpoints $t=0,1$ but negative at $t=1/2$. Its degree-two Bernstein controls are $1/10,-2/5,1/10$; the negative middle control explains why the all-controls-nonnegative hypothesis in [[thm-bernstein-convex-hull-and-positivity]] does not apply.

## Facts & Assumptions

**Given:** The interval $[0,1]$, the polynomial $p(t)=t^2-t+1/10$, and exact real arithmetic.

[F1] [[def-piecewise-bernstein-representation]]: a degree-two Bernstein polynomial has the form $c_0(1-t)^2+2c_1t(1-t)+c_2t^2$.

[F2] [[thm-bernstein-convex-hull-and-positivity]]: nonnegative Bernstein controls suffice for nonnegativity throughout the interval.

[F3] [[def-binomial-coefficient]]: $\binom{n}{1}=n$ for every natural $n$.

[F4] [[def-canonical-natural]]: the canonical embedding sends zero to zero and each successor to the previous image plus one.

## Verification
1.1 By [F3], $\binom21=2$; applying the recursion in [F4] twice shows its canonical real value is $2$. Expanding $\frac1{10}(1-t)^2-\frac45t(1-t)+\frac1{10}t^2$ gives $t^2-t+1/10$, so [F1] identifies its Bernstein controls as $c_0=1/10$, $c_1=-2/5$, $c_2=1/10$. [F1, F3, F4, given, algebra]

1.2 Direct substitution gives $p(0)=p(1)=1/10>0$, while $p(1/2)=1/4-1/2+1/10=-3/20<0$. Thus positive samples at the two endpoints do not control the interpolant between them. [given, algebra]

2.1 The middle Bernstein control is negative, so the sufficient hypothesis in [F2] is absent; the negative value in step 1.2 is consistent with the control-hull theorem. [F2, step 1.1, step 1.2] ∎