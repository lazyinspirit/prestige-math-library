---
id: cex-an-incomplete-gradient-flow-on-a-noncompact-manifold
kind: counterexample
title: "A gradient flow on a noncompact manifold can be incomplete"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: []
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, §13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement refuted

Every negative-gradient vector field on a noncompact manifold is complete.

## Counterexample

**Given:** The Euclidean line and $f(x)=-x^3/3$.

1.1 Since $\operatorname{grad}f=-x^2\partial_x$, the negative-gradient field is $x^2\partial_x$ and its equation is $\dot x=x^2$. [given, algebra]

2.1 For $x_0>0$, the solution is $x(t)=x_0/(1-x_0t)$, which tends to $+\infty$ as $t\uparrow1/x_0$. Hence its maximal interval has a finite positive endpoint and the field is incomplete. [step 1.1, algebra] ∎

This witnesses incompleteness only: $f$ is not offered as a Morse-function example.
