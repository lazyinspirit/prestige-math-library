---
id: def-equivariant-map-and-equivariant-vector-bundle
kind: definition
title: Equivariant maps and equivariant vector bundles
status: draft
origin: pipeline
deps: [def-smooth-left-action-of-a-lie-group, def-vector-bundle-map-over-a-smooth-base-map]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Homogeneous Space Characterization Theorem 21.18, printed pages 552–553
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

If $X$ and $Y$ are smooth left $G$-manifolds, a smooth map $f:X\to Y$ is
**$G$-equivariant** if

$$f(g\cdot x)=g\cdot f(x)$$

for all $g\in G$ and $x\in X$.

A smooth vector bundle $\pi:E\to M$ is a **$G$-equivariant vector bundle**
if $G$ acts smoothly on $E$ and $M$, the projection is equivariant, and each
map $E_x\to E_{g\cdot x}$, $v\mapsto g\cdot v$, is linear. Thus the
total-space action is jointly smooth and consists of fibrewise-linear bundle
maps covering the base action.
