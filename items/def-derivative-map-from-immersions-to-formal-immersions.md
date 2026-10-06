---
id: def-derivative-map-from-immersions-to-formal-immersions
kind: definition
title: "The derivative map from immersions to formal immersions"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-countable-choice, def-formal-immersion-between-smooth-manifolds, def-space-of-immersions-and-space-of-formal-immersions, def-differential-of-a-smooth-map, def-vector-bundle-map-over-a-smooth-base-map]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
dependency_level: 2
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical smooth tangent bundles and their total-space mapping topology. The **derivative map** $D:\operatorname{Imm}(M,N)\to\operatorname{FImm}(M,N)$ is $D(f):=(f,df)$, where $df:TM\to TN$ is the differential of $f$, which is a smooth bundle map over $f$ and fibrewise injective exactly because $f$ is an immersion. Thus $D$ is the inclusion of the holonomic (genuine) formal immersions into all formal immersions; both its source and target are the spaces of the preceding items, with the weak compact-open $C^\infty$ topology.
