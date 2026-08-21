---
id: thm-classical-weierstrass-function-nowhere-differentiable
kind: theorem
title: "Under $ab>1+3\\pi/2$, the classical Weierstrass function is continuous everywhere and differentiable nowhere"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-classical-weierstrass-function,
       thm-classical-weierstrass-series-converges-uniformly,
       lem-weierstrass-probe-points,
       lem-weierstrass-low-frequency-difference-quotient-bound,
       lem-weierstrass-tail-difference-quotient-bound,
       lem-geometric-sequence-null, def-derivative,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: true
short: "$W_{a,b}$ is nowhere differentiable"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function, Theorem 1"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Example 9.24"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $0<a<1$, let $b>1$ be an odd integer, and let $W_{a,b}$ be the classical
Weierstrass function ([[def-classical-weierstrass-function]]). If $ab>1+3\pi/2$, then $W_{a,b}$ is continuous at every real point and differentiable at no real point.

## Facts & Assumptions

**Given:** Parameters $0<a<1$ and an odd integer $b>1$ satisfying $ab>1+3\pi/2$, and an arbitrary point $x_0\in\mathbb R$.

[L1] The sum $W_{a,b}:\mathbb R\to\mathbb R$ is continuous ([[thm-classical-weierstrass-series-converges-uniformly]]).

[L2] For every $m\ge1$, the low-frequency increment at the probes satisfies $|A_m|<\pi(ab)^m(x_m-x_0)/(ab-1)$ ([[lem-weierstrass-low-frequency-difference-quotient-bound]]).

[L3] For the tail increment at the same probes, $|B_m|\ge(2/3)(ab)^m(x_m-x_0)$ ([[lem-weierstrass-tail-difference-quotient-bound]]).

[L4] If $|r|>1$, then $|r|^m$ diverges to $+\infty$ ([[lem-geometric-sequence-null]]).

[L5] Differentiability at $x_0$ requires the finite limit of $(W_{a,b}(x)-W_{a,b}(x_0))/(x-x_0)$ as $x\to x_0$ ([[def-derivative]]).

[L6] The probes satisfy $x_m>x_0$ and $x_m\to x_0$ ([[lem-weierstrass-probe-points]]).

[L7] The number $\pi=2\gamma$ is positive because the smallest positive zero of cosine satisfies $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x_0$ and use [L6] for its probe sequence $(x_m)$. Continuity at $x_0$ already follows from [L1]. [given, L1, L6]

1.2 The hypothesis $ab>1+3\pi/2$ and positivity of $\pi$ give $ab>1$ and $$c:=\frac23-\frac{\pi}{ab-1}>0.$$ [given, L7, algebra]

2.1 For $m\ge1$, splitting the series increment at frequency $m$ gives $W_{a,b}(x_m)-W_{a,b}(x_0)=A_m+B_m$. The reverse triangle inequality and [L2] to [L3] yield $$|W_{a,b}(x_m)-W_{a,b}(x_0)|\ge(ab)^m\left(\frac23-\frac{\pi}{ab-1}\right)(x_m-x_0).$$ [step 1.1, L2, L3, algebra]

3.1 Since $x_m-x_0>0$, divide step 2.1 by it. Step 1.2 and [L4] show that the absolute values of the selected difference quotients are at least $c(ab)^m$ and tend to $+\infty$. [step 1.2, step 2.1, L4, algebra]

4.1 Although $x_m\to x_0$, the difference quotients along this sequence have no finite limit by step 3.1, so [L5] rules out differentiability at $x_0$. The point $x_0$ was arbitrary, while [L1] gives continuity everywhere. Then $W_{a,b}$ is continuous at every real point and differentiable at no real point. [step 1.1, step 3.1, L1, L5] ∎
