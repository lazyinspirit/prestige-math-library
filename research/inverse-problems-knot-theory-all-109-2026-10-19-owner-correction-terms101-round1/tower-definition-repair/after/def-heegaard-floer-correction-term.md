---
id: def-heegaard-floer-correction-term
kind: definition
title: "Heegaard Floer correction term"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-heegaard-floer-plus-infinity-absolute-grading
dependency_level: 1
justified_by:
  - lem-heegaard-floer-correction-term-heegaard-invariance
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Section 4, Definition 4.1"
    - title: "Jennifer Hom, Lecture Notes on Heegaard Floer Homology"
      url: "https://arxiv.org/pdf/2008.01836v1"
      locator: "Section 2.2, definition of the d-invariant"
---

## Definition

Let $Y$ be a closed connected oriented rational homology three-sphere, let $\mathfrak t$ be a Spin$^c$ structure, and suppose the Heegaard Floer groups, absolute rational grading, and natural map $\iota_*:HF^\infty(Y,\mathfrak t)\to HF^+(Y,\mathfrak t)$ are defined and independent of the construction choices. View $HF^+$ as an $\mathbb F_2[U]$-module. An element is $U$-torsion if some positive power of $U$ annihilates it. The correction term $d(Y,\mathfrak t)$ is the minimum absolute grading of a nonzero homogeneous element in $\operatorname{im}\iota_*$. In the standard plus tower every element is $U$-torsion, although every element is divisible by every positive power of $U$; these two properties are compatible. The definition uses the nonzero homogeneous image elements, rather than imposing $U$-nontorsion. The standard normalization is $d(S^3,\mathfrak t_0)=0$ for the unique Spin$^c$ structure $\mathfrak t_0$ on $S^3$. Existence of the minimum and independence of choices are separate proof obligations.

## Definition references

[[def-heegaard-floer-plus-infinity-absolute-grading|The Floer groups and absolute grading convention]]

[Ozsvath and Szabo, *Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary*, Definition 4.1](https://arxiv.org/pdf/math/0110170v1)

[Hom, *Lecture Notes on Heegaard Floer Homology*, Section 2.2](https://arxiv.org/pdf/2008.01836v1)
