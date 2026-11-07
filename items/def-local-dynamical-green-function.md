---
dependency_level: 3
id: def-local-dynamical-green-function
kind: definition
title: "Classical local dynamical Green kernel"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-local-homogeneous-dynamical-height-and-filled-julia-set
  - def-rational-map-on-projective-line-degree
justified_by:
  - lem-local-dynamical-green-conjugacy-and-good-reduction
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, \u00a73.1, equation (3.3)"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Definition

Let $L$ be a field with a nonarchimedean absolute value, and let $F$ be a homogeneous degree-$d$ lift, $d\ge2$, of a rational map $\phi$ with $R_F\ne0$. For two distinct points $P,Q\in\mathbb P^1(L)$ and chosen nonzero lifts $z,w\in L^2$, put
$$g_\phi(P,Q)=-\log|z\wedge w|+H_F(z)+H_F(w)-\frac{\log|R_F|}{d(d-1)},\qquad z\wedge w=z_1w_2-z_2w_1.$$
Set $g_\phi(P,P)=+\infty$. This is the **classical local dynamical Green kernel**. Its independence of the chosen lifts and of $F$ is proved in the lemma below. This definition does not specify an extension to Berkovich points or a canonical measure.

## Definition references

[[lem-local-homogeneous-dynamical-height-and-filled-julia-set]]

[[def-rational-map-on-projective-line-degree]]
