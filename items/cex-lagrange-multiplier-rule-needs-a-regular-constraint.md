---
id: cex-lagrange-multiplier-rule-needs-a-regular-constraint
kind: counterexample
title: "The degenerate constraint $x^2+y^2=0$ defeats the multiplier conclusion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-parametrized-constraint-necessary-condition, def-jacobian-matrix-and-gradient]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Lagrange Multipliers"
      url: "https://www2.math.upenn.edu/~gressman/analysis/12-lagrange.html"
pipeline_run: null
---

## Statement refuted

Refuted: every constrained local extremum satisfies $\nabla f=\lambda\nabla g$, even when the constraint gradient vanishes.

## Facts & Assumptions

**Given:** $g(x,y)=x^2+y^2$ and $f(x,y)=x$.

[L1] The Jacobian and gradient use the convention of [[def-jacobian-matrix-and-gradient]].

## Counterexample

## Proof

**Proof technique:** direct.

1.1 The constraint set $\{g=0\}$ is the singleton $(0,0)$, so $f$ has both a constrained local maximum and a constrained local minimum there. [given, algebra]

1.2 At the origin, $\nabla g=(0,0)$ while $\nabla f=(1,0)$. [given, L1, algebra]

2.1 No scalar $\lambda$ can satisfy $\nabla f(0,0)=\lambda\nabla g(0,0)$. Thus a regularity hypothesis is necessary for the usual multiplier conclusion. [step 1.1, step 1.2, algebra] ∎
