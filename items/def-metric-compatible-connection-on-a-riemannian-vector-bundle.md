---
id: def-metric-compatible-connection-on-a-riemannian-vector-bundle
kind: definition
title: "Metric compatible connection on a riemannian vector bundle"
status: draft
origin: pipeline
deps: ["prop-connection-laws-in-directional-form","def-smooth-bundle-metric","def-product-connection-on-tensor-and-hom-bundles"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

Let $h$ be a supplied smooth positive-definite bundle metric, as in [[def-smooth-bundle-metric]]. A connection is **metric compatible** if, for all local smooth sections $s,t$ and local vector fields $X$,
$$X(h(s,t))=h(\nabla_Xs,t)+h(s,\nabla_Xt).$$
Local connection operations are provided by [[prop-connection-laws-in-directional-form]]. Equivalently, the induced connection on $E^*\otimes E^*$ annihilates $h$: by [[def-product-connection-on-tensor-and-hom-bundles]], its evaluation is exactly the left side minus the right side. Thus $\nabla h=0$ is a specified identity of tensors, not an independent assumption about an endomorphism.

In a local frame write $h(e_i,e_j)=H_{ij}$. Testing on frame sections gives $X(H)=\omega(X)^TH+H\omega(X)$; conversely expanding $s=eu,t=ev$ and using the scalar product rule gives the full identity from this matrix equation. This makes the condition pointwise testable in the direction and the two section values. Rank zero satisfies it vacuously. A metric is supplied, so metric existence and its choice requirements are not used.
