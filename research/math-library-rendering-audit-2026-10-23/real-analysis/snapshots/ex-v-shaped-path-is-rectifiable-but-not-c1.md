---
id: ex-v-shaped-path-is-rectifiable-but-not-c1
kind: example
title: "$\\gamma(t)=(t,|t|)$ on $[-1,1]$ is rectifiable of length $2\\sqrt{2}$ but is not differentiable at $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-piecewise-c1-paths-have-additive-speed-integral-length, def-vector-valued-derivative-and-integral, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Rectifiable curve"
      url: "https://en.wikipedia.org/wiki/Rectifiable_curve"
pipeline_run: null
---

## Example

The path

$$\gamma:[-1,1]\to\mathbb R^2,\qquad\gamma(t)=(t,|t|),$$

is rectifiable with length $2\sqrt2$, but it is not differentiable at $0$ and hence is not $C^1$.

## Facts & Assumptions

**Given:** The V-shaped path $\gamma$.

[L1] Vector differentiation is componentwise ([[def-vector-valued-derivative-and-integral]]).

[L2] A piecewise $C^1$ path has length equal to the sum of its speed integrals ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L3] $\sqrt2$ is the nonnegative number whose square is $2$ ([[thm-of-square-roots]]).

## Verification

**Proof technique:** computation.

1.1 On $[-1,0]$ the derivative is $(1,-1)$, and on $[0,1]$ it is $(1,1)$; each has Euclidean norm $\sqrt2$ by [L3]. [given, L1, L3]

1.2 The right difference quotients at $0$ equal $(1,1)$ and the left difference quotients equal $(1,-1)$. They have different limits, so the vector derivative at $0$ does not exist. [given, L1]

2.1 By [L2], the two pieces have lengths $\sqrt2$ and $\sqrt2$, so the total length is $2\sqrt2$. [step 1.1, L2]

3.1 Thus the path is rectifiable by step 2.1 but not differentiable, and therefore not continuously differentiable, at its corner. [step 2.1, step 1.2] ∎
