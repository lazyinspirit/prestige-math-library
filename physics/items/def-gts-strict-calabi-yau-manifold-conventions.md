---
id: def-gts-strict-calabi-yau-manifold-conventions
kind: definition
title: Strict Calabi–Yau manifold convention
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
deps:
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-gts-compact-calabiyau-manifold-conventions
dependency_roles:
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Yiran Cheng, Bridgeland stability conditions on some higher-dimensional Calabi-Yau manifolds and generalized Kummer varieties
      url: https://arxiv.org/pdf/2510.22432v1
      locator: §1, Theorems 1.3–1.5 and the source's strict Calabi–Yau examples
    - title: Mark Gross and P. M. H. Wilson, Mirror symmetry via 3-tori for a class of Calabi-Yau threefolds
      url: https://arxiv.org/pdf/alg-geom/9608004v3
      locator: §0, contextual special-Lagrangian and Borcea–Voisin discussion; the strict intermediate-form vanishing convention is fixed in this item
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A strict Calabi–Yau $n$-fold in this library is a smooth connected compact Kähler complex manifold $X$ of complex dimension $n$, with a specified holomorphic trivialization $K_X\cong\mathcal O_X$, and with $H^0(X,\Omega_X^p)=0$ for every integer $p$ satisfying $0<p<n$. The broad Calabi–Yau and canonical-bundle notation are as defined by the preceding page suppliers. Projectivity is an additional hypothesis whenever a theorem requires an algebraic variety. This convention does not assert exact $SU(n)$ holonomy.

## Definition references

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[[def-gts-compact-calabiyau-manifold-conventions]]
