---
id: def-divergence-relative-to-a-volume-form
title: "Divergence relative to a volume form"
kind: definition
status: published
origin: pipeline
deps: ["def-volume-form-on-an-oriented-manifold", "lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary"]
justified_by: ["prop-divergence-is-well-defined-and-has-the-coordinate-formula"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Encyclopedia of Mathematics, Divergence, Comments paragraph beginning Let M be an n-dimensional manifold"
      url: "https://encyclopediaofmath.org/wiki/Divergence"
---
## Definition

Let $\mu$ be a positive volume form and $X$ a smooth vector field on a smooth oriented manifold, with boundary allowed. The **divergence relative to $\mu$** is the smooth scalar function determined by
$$\mathcal L_X\mu=(\operatorname{div}_\mu X)\mu.$$
At a boundary point use the local-extension Lie derivative of [[lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary]]. The nonzero top form spans each top exterior-power fiber, so the scalar is unique. Smooth existence and its coordinate formula are discharged by [[prop-divergence-is-well-defined-and-has-the-coordinate-formula]].
