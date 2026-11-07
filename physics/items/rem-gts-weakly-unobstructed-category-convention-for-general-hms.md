---
id: rem-gts-weakly-unobstructed-category-convention-for-general-hms
kind: remark
title: Weak unobstructedness is a specified fixed-potential input
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories-examples
dependency_level: 1
deps:
  - def-gts-weakly-unobstructed-fukaya-category-data
dependency_roles:
  def-gts-weakly-unobstructed-fukaya-category-data: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Kenji Fukaya, Yong-Geun Oh, Hiroshi Ohta, and Kaoru Ono, Lagrangian Floer Theory on Compact Toric Manifolds I
      url: https://arxiv.org/pdf/0802.1703v3
      locator: §3, Definitions 3.6–3.7, and §4.1, weak bounding cochains and equality of potentials
verification:
  precheck: n/a
---

## Remark

In [[op-gts-general-hms-for-a-specified-compact-mirror-datum]], “weakly unobstructed Fukaya $A_\infty$ category specified” means that the chosen branes carry positive-valuation weak bounding cochains $b$ satisfying $\sum_{k\geq0}m_k(b,\ldots,b)=\lambda e$, and the compared objects belong to one fixed-potential block with the deformed multi-object operations supplied. This convention is defined in [[def-gts-weakly-unobstructed-fukaya-category-data]]. It does not assert existence of such bounding cochains or a general multi-object construction.
