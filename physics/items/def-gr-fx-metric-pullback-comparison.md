---
id: def-gr-fx-metric-pullback-comparison
kind: definition
title: "Pullback comparison of a Lorentzian metric"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps:
  - def-gr-smooth-covariant-two-tensor-field
  - def-differential-of-a-smooth-map
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-gr-development-and-data-fixing-isometry
dependency_roles:
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations — a Dezornification, arXiv:1309.7591v3 (2015), Section 2, Definition 2.1 and Remark 2.5: pullback of induced metric data and diffeomorphism-invariance convention"
      url: "https://arxiv.org/pdf/1309.7591"
verification:
  precheck: pending
---

## Definition

Let $M$ be a smooth four-manifold, let $g$ be a smooth symmetric covariant $2$-tensor on $M$, and let $\Phi:M\to M$ be a smooth diffeomorphism. The pullback tensor $\Phi^*g$ is the smooth covariant $2$-tensor defined at each $p\in M$ by

$$(\Phi^*g)_p(X,Y):=g_{\Phi(p)}(d\Phi_pX,d\Phi_pY),\qquad X,Y\in T_pM.$$

When $g$ is Lorentzian, this formula defines the metric components seen in the coordinate representative obtained by $\Phi$. Equality of $\Phi^*g$ and $g$ means equality of the bilinear forms on each tangent space, not equality of their component arrays in a chosen chart.

## Definition references

[[def-gr-smooth-covariant-two-tensor-field]]

[[def-differential-of-a-smooth-map]]

[[def-c-r-and-smooth-maps-between-smooth-manifolds]]

[[def-gr-development-and-data-fixing-isometry]]

