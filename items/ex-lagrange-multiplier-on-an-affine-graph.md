---
id: ex-lagrange-multiplier-on-an-affine-graph
kind: example
title: "A constrained extremum on an affine graph satisfies the graph Lagrange rule"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-lagrange-multiplier-rule-for-graph-constraints]
aliases: []
landmark: false
proof_strategy: calculation
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

## Statement

The minimum of $f(x,y)=x^2+y^2$ on the graph $y=x+1$ occurs at $(-1/2,1/2)$ and satisfies $\nabla f=\lambda\nabla(y-x-1)$ with $\lambda=1$.

## Facts & Assumptions

**Given:** $f(x,y)=x^2+y^2$ and $G(x,y)=y-x-1$.

[L1] The graph-constraint Lagrange rule is [[cor-lagrange-multiplier-rule-for-graph-constraints]].

## Proof

**Proof technique:** calculation.

1.1 On the graph, $f(x,x+1)=2x^2+2x+1=2(x+1/2)^2+1/2$, so the unique constrained minimum is $a=(-1/2,1/2)$. [given, algebra]

1.2 At $a$, $\nabla f(a)=(-1,1)=\nabla G(a)$. Hence the multiplier equation holds with $\lambda=1$, in accord with [L1]. [given, L1, algebra]

2.1 This explicitly realizes the graph-constraint conclusion at the constrained minimum. [step 1.1, step 1.2, algebra] ∎
