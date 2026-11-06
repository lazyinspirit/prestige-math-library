---
id: def-gts-log-hms-surface-data
kind: definition
title: Log HMS surface data with distinguished complex structure
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
dependency_level: 3
deps:
  - def-gts-log-cy-pair-toric-degeneration-and-scattering-data
  - def-gts-toric-fan-and-laurent-potential-for-abouzaid
dependency_roles:
  def-gts-log-cy-pair-toric-degeneration-and-scattering-data: mathematical-premise
  def-gts-toric-fan-and-laurent-potential-for-abouzaid: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Paul Hacking and Ailsa Keating, Homological mirror symmetry for log Calabi–Yau surfaces
      url: https://arxiv.org/pdf/2005.05010v3
      locator: Definition 2.1, §2.1.1 and §2.2, maximal boundary and distinguished complex structure
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

A **log HMS surface datum** is a smooth rational projective surface $Y$ over $\mathbb C$ with a nodal anticanonical divisor $D\in|-K_Y|$ as in [[def-gts-log-cy-pair-toric-degeneration-and-scattering-data]], together with a chosen toric model and the source’s distinguished complex-structure data. A toric model includes a smooth projective toric pair $(\bar Y,\bar D)$, a sequence of interior blow-ups of points on the toric boundary components that leaves the boundary unchanged, and the corner blow-ups and total transforms specifying $(Y,D)$. For the distinguished structure, on each toric boundary component choose its torus coordinate $\mathbb C^*$ from the fixed torus action and place the selected interior blow-up point at $-1\in\mathbb C^*$, using the corresponding point on successive strict transforms when iterating. The selected model and blow-up sequence are part of the datum.

This records the hypotheses used by Hacking–Keating; it does not assert existence or uniqueness of a toric model, nor does it produce a mirror fibration or categorical equivalence.

## Definition references

[[def-gts-log-cy-pair-toric-degeneration-and-scattering-data]]

[[def-gts-toric-fan-and-laurent-potential-for-abouzaid]]

