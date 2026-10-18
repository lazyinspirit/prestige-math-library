---
id: def-fusion-two-category
kind: definition
title: Fusion 2-category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-semisimple-two-category
  - def-monoidal-weak-two-category
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Definitions 2.1.5-2.1.6
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.1
      url: https://arxiv.org/pdf/2306.08117
---

## Definition

A **fusion 2-category** is a finite semisimple linear 2-category with a weak monoidal structure, a simple monoidal unit, and left and right duals for every object. For a right dual $A^\#$ of $A$, the duality data include 1-morphisms
$$e_A:A\otimes A^\#\to I,\qquad i_A:I\to A^\#\otimes A,$$
and invertible cusp 2-morphisms from $(e_A\otimes A)\circ(A\otimes i_A)$ to $1_A$ and from $(A^\#\otimes e_A)\circ(i_A\otimes A^\#)$ to $1_{A^\#}$, with the associator and unitors inserted at the indicated sources and targets.

Here “simple unit” means that $1_I$ is a simple 1-morphism. A pivotal or spherical enhancement is extra structure: it requires its own duality coherence and trace axioms. Neither such enhancement nor a spherical trace is included in “fusion 2-category.”
