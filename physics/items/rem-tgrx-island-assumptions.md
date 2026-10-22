---
id: rem-tgrx-island-assumptions
kind: remark
title: Replica saddles and islands retain their model assumptions
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 5
deps:
  - post-tgrx-semiclassical-ads-dictionary
dependency_roles:
  post-tgrx-semiclassical-ads-dictionary: formulation-prerequisite
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  A source-based limitation on island and quantum-extremal-surface calculations
  in selected semiclassical gravity models. It records their regulator,
  state-factorization, replica-continuation, and gravitational-saddle
  assumptions; it asserts no empirical observation or theorem of microscopic
  unitarity for an unspecified four-dimensional black hole.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Ahmed Almheiri, Thomas Hartman, Juan Maldacena, Edgar Shaghoulian, and Amirhossein Tajdini, The entropy of Hawking radiation, §§8, 10, and 11.2"
      url: "https://arxiv.org/html/2006.06872"
      locator: "Full-text review; §8, equation (8.2), and §10, equations (10.1)–(10.4), for the island prescription and replica continuation; §11.2 for the unresolved gravitational path-integral contour, saddle inclusion, cutoff, and exact-state issues."
    - title: "Phil Saad, Stephen H. Shenker, and Douglas Stanford, JT gravity as a matrix integral, §§1 and 6"
      url: "https://arxiv.org/html/1903.11115"
      locator: "Full-text article; §1 for the model-specific JT genus expansion and non-unique nonperturbative matrix-integral completion; §§6.1–6.3 for ensemble dependence, non-disordered theories, and open higher-dimensional questions."
---

## Statement

For selected semiclassical gravity-plus-bath models, an island or quantum-extremal-surface calculation uses a specified boundary state and region factorization, a regulator and renormalization prescription, and gravitational path-integral assumptions. The replica prescription for a density matrix $\rho$ computes $S=(1-n\partial_n)\log\operatorname{Tr}(\rho^n)|_{n=1}$ by analytic continuation from replica number $n$; the gravitational calculation must also specify which saddle configurations contribute and which dominates. A Page-like curve here means a model entropy profile that rises and later falls under its stipulated parameter evolution. Such a curve is a conditional prediction of that selected calculation; it does not establish microscopic unitarity of an unspecified four-dimensional evaporating black hole or prove that a candidate saddle contributes in another theory.

## Statement references

[[post-tgrx-semiclassical-ads-dictionary]]

[Ahmed Almheiri et al., *The entropy of Hawking radiation*](https://arxiv.org/html/2006.06872)

[Phil Saad, Stephen H. Shenker, and Douglas Stanford, *JT gravity as a matrix integral*](https://arxiv.org/html/1903.11115)
