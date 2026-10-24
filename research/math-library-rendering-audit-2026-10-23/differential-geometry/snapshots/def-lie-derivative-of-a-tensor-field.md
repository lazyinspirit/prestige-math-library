---
id: def-lie-derivative-of-a-tensor-field
kind: definition
title: "The Lie derivative of a tensor field"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-local-and-global-flow, def-pullback-of-a-covariant-tensor-field, def-smooth-tensor-field]
justified_by: [lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Definition

If $X$ has local flow $\Phi_t$ and $T$ is a smooth tensor field of type $(r,s)$, its Lie derivative is $$\mathcal L_XT=\left.\frac d{dt}\right|_{t=0}\Phi_t^*T,$$ on every local flow domain where this derivative is defined. Here the pullback by the local diffeomorphism $\Phi_t$ acts by $d\Phi_{-t}$ on each contravariant slot and by $d\Phi_t$ on each covariant slot.

