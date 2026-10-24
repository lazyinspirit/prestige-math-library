---
id: cex-positive-gradient-reverses-stable-and-unstable-dimensions
kind: counterexample
title: "Using the positive gradient reverses the stable and unstable dimensions"
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

For $f(u,v)=-|u|^2+|v|^2$, one may use the positive gradient while retaining
the descending convention that the unstable dimension equals the Morse index.

## Counterexample

**Given:** The Euclidean quadratic $f(u,v)=-|u|^2+|v|^2$ evolved by $+\operatorname{grad}f$.

1.1 The positive-gradient equations are $\dot u=-2u$ and $\dot v=2v$, so $u(t)=e^{-2t}u_0$ and $v(t)=e^{2t}v_0$. [given, algebra]

2.1 Thus the forward-stable space is $\{v=0\}$ of index dimension and the backward-unstable space is $\{u=0\}$ of coindex dimension. The labels are reversed from the descending convention, refuting the assertion. [step 1.1] ∎
