---
id: def-riemannian-gradient-of-a-smooth-function
kind: definition
title: "The Riemannian gradient is the metric dual of the differential"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian, def-differential-of-a-smooth-real-valued-function, def-smooth-vector-field-as-a-tangent-bundle-section]
justified_by: []
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

## Definition

Let $g$ be a Riemannian metric on a smooth manifold $M$ and let
$f:M\to\mathbb R$ be smooth.  The **Riemannian gradient** of $f$ is the
smooth vector field $\operatorname{grad}_g f$ characterized by

$$ g_x\bigl((\operatorname{grad}_g f)_x,v\bigr)=df_x(v) \quad\text{for every }x\in M\text{ and }v\in T_xM. $$

Pointwise, it is the inverse metric-dual of $df_x$.  In a local frame with
metric matrix $(g_{ij})$ and inverse $(g^{ij})$, it is

$$ \operatorname{grad}_g f=\sum_{i,j}g^{ij}\frac{\partial f}{\partial x^j}\partial_{x^i}; $$

the displayed coefficients are smooth, so this pointwise definition is a
smooth vector field.
