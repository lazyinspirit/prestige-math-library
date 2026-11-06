---
id: post-dp-brane-boundary-state-supercharge-gluing
kind: postulate
title: Flat Dp Boundary State Supercharge Gluing
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
- def-type-ii-dp-brane-boundary-state
- def-dp-brane-open-string-boundary-condition
- def-supergravity-conventions-and-normalizations
dependency_roles:
  def-type-ii-dp-brane-boundary-state: formulation-prerequisite
  def-dp-brane-open-string-boundary-condition: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: Adopted flat static Type II Dp boundary-state condition relating the two ten-dimensional supersymmetry parameters
  through the invertible Ramond zero-mode gluing map; excludes worldvolume flux, curvature, and backreaction.
sources:
  references:
  - title: J. Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3
    url: https://arxiv.org/pdf/hep-th/9510017v3
    locator: §2, PDF pp. 2–4, Ramond zero-mode gluing and Type IIA/IIB parity.
  - title: J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2
    url: https://arxiv.org/pdf/hep-th/9602052v2
    locator: Lecture III §§3.1–3.3, PDF pp. 22–31; Type II spinor chirality and D-brane Ramond boundary state.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Postulate

Let $\mathcal S_L$ and $\mathcal S_R$ be the real 16-dimensional left- and right-moving Majorana–Weyl supersymmetry spaces, of opposite chiralities in Type IIA and equal chiralities in Type IIB. For a static flat Dp boundary state, adopt as model data an invertible real-linear map $K_p\in\operatorname{Iso}_{\mathbb R}(\mathcal S_R,\mathcal S_L)$, where $\operatorname{Iso}_{\mathbb R}$ denotes the set of bijective $\mathbb R$-linear maps. The unbroken target-supersymmetry pairs are exactly the graph $\{(K_p\epsilon_R,\epsilon_R):\epsilon_R\in\mathcal S_R\}$, equivalently $\epsilon_L=K_p\epsilon_R$. Reversing the Dp orientation replaces $K_p$ by $-K_p$. This is the boundary-state supersymmetry condition, not a consequence of the bosonic endpoint conditions alone; no matrix-to-map identification is used in this adopted abstract formulation.

## Statement References

[Polchinski, §2](https://arxiv.org/pdf/hep-th/9510017v3)

[Polchinski, Chaudhuri, and Johnson, Lecture III §§3.1–3.3](https://arxiv.org/pdf/hep-th/9602052v2)
