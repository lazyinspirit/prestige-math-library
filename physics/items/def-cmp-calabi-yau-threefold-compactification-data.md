---
id: def-cmp-calabi-yau-threefold-compactification-data
kind: definition
title: "Calabi–Yau threefold data used by string compactifications"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 2
deps:
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
dependency_roles:
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Geometric input data for compactifications in this pair. Broad canonical-bundle triviality makes no claim of exact SU(3) holonomy, an N=2 spectrum, or a supergravity solution."
empirical_premises: []
sources:
  references:
    - title: "Paul S. Aspinwall, Compactification, Geometry and Duality: N=2, arXiv:hep-th/0001001v1"
      url: "https://arxiv.org/pdf/hep-th/0001001v1"
      locator: "§2.4, PDF pp. 9–13; compact CY3 compactification and its strict-holonomy caveat."
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§2 and §§3.1–3.2, PDF pp. 4–16; harmonic geometric data, with the orientifold/N=1 scope retained."
---

## Definition

A geometric Calabi–Yau threefold compactification datum consists of a specified smooth connected compact complex threefold $X$, a Kähler class $[J]$, a chosen trivialization $\Omega$ of $K_X$, orientation and integral-cohomology conventions, and any additional bundle, involution, flux, brane, or source data stated for the physical model. It uses the broad Calabi–Yau convention: $K_X\cong\mathcal O_X$ does not imply exact $SU(3)$ holonomy, simple connectivity, or $h^{p,0}=0$ for $0<p<3$. Claims of precisely four-dimensional $N=2$ supersymmetry require the corresponding holonomy and worldsheet conditions in addition to this broad definition.

## Definition references

[[def-gts-compact-calabiyau-manifold-conventions]]

## Facts & Assumptions

**Given:** A smooth connected compact complex threefold $X$, a Kähler form $J$ on $X$, a specified holomorphic trivialization $\Omega$ of $K_X$, an orientation, and declared integral-cohomology conventions. Any other physical data are supplied separately.

[F1] [[def-gts-compact-calabiyau-manifold-conventions]] defines the broad Calabi–Yau convention as connected, compact, Kähler, with a specified holomorphic trivialization of the canonical line; it explicitly does not assert exact $SU(n)$ holonomy or intermediate $h^{p,0}$ vanishing.

[F2] [[def-gts-kahler-class-canonical-bundle-and-ricci-form]] defines a Kähler form as a smooth real positive closed $(1,1)$-form and its cohomology class as a real de Rham class.

## Proof

**Proof technique:** direct interface verification.

**Given:** The smooth connected compact complex threefold, Kähler form, nowhere-zero holomorphic canonical form, orientation, integral convention, and separately supplied model data in the Facts & Assumptions section.

1.1 By [F1] and [F2], the first three data in the Given clause are exactly the broad Calabi–Yau geometry interface: $X$ is connected, compact, and Kähler, and $\Omega$ is the chosen nowhere-zero holomorphic section supplied by the trivialization of $K_X$. The orientation and integral-cohomology conventions are additional choices attached to this compactification datum; they are not consequences of broad CY status. [F1, F2, given]

2.1 The listed bundles, involutions, fluxes, branes, and sources are explicitly supplied model data. Nothing in [F1] or [F2] supplies them, and [F1] expressly permits broad CY manifolds without exact $SU(3)$ holonomy. Therefore no strict-holonomy or $N=2$ conclusion follows from this definition alone. [F1, F2, given, step 1.1] ∎
