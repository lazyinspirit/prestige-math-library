---
id: post-f4-four-dimensional-anomaly-consistency
kind: postulate
title: Four-dimensional gauge-anomaly consistency in flux models
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: physics
library: physics
category: string-theory
deps:
  - post-f4-global-gauge-group-from-mordell-weil-torsion
  - pthm-f4-matter-surface-chiral-index
dependency_roles:
  post-f4-global-gauge-group-from-mordell-weil-torsion: physical-assumption
  pthm-f4-matter-surface-chiral-index: physical-result
physical_scope: "Adopted perturbative four-dimensional consistency condition for a specified chiral F-theory effective model. The actual global gauge group, charge lattice, anomaly normalization, Green–Schwarz axions and localized source terms must be supplied model by model. It is not a theorem that flux geometry alone cancels every anomaly."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ling Lin and Timo Weigand, G4-Flux and Standard Model Vacua in F-theory, arXiv:1604.04292v2"
      url: "https://arxiv.org/pdf/1604.04292v2"
      locator: "§3.2.1–§3.2.2, printed pp. 14–17, anomaly equations and Green–Schwarz qualifications; the singlet indices 1(2), 1(4), and 1(6) are inferred from anomaly matching."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§9.2 and 10.1, printed pp. 85–99, flux-induced chiral data and effective-theory consistency context."
verification:
  precheck: n/a
---

## Postulate

For a proposed four-dimensional F-theory flux model, adopt the consistency requirement that perturbative gauge, mixed gauge, abelian cubic, and mixed gravitational anomalies be evaluated from the model's actual chiral representations and charges and cancel against the specified Green–Schwarz axion couplings and any required localized source contributions, all in one declared normalization. The geometric matter-surface index supplies net chiral data only. It does not determine the global gauge group, the axionic couplings, vectorlike states, or anomaly cancellation by itself. A model-specific anomaly check is a consistency condition, not a proof of phenomenological viability.

## Facts & Assumptions

**Given:** A fixed four-dimensional effective model with its global gauge group, representations, charges, chiral indices, axionic couplings, localized sources, and a common anomaly normalization.

[A1] [[post-f4-global-gauge-group-from-mordell-weil-torsion]] currently states the model-dependent Mordell–Weil/Shioda/torsional-coweight dictionary, including the requirement that the quotient act trivially on realized matter weights. Its current Step 1 readiness record is escalated for its exact group-law/Kodaira/Shioda inputs; no global group is asserted here.

[F1] [[pthm-f4-matter-surface-chiral-index]] provides only a conditional net-index formula; its broad arbitrary-flux branch remains escalated.

## Postulate references

[[post-f4-global-gauge-group-from-mordell-weil-torsion]]

[[pthm-f4-matter-surface-chiral-index]]
