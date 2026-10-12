---
id: lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions
kind: lemma
title: "Boundary smoothness is independent of charts and extensions"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-smooth-map-between-manifolds-with-boundary, lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space, prop-chain-rule-for-smooth-half-space-maps]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

The local-extension definition of a smooth map between manifolds with boundary is independent of the chosen boundary charts and of all chosen extensions.

## Facts & Assumptions

**Given:** A continuous map $f:M\to N$ between smooth manifolds with boundary, two compatible source charts, two compatible target charts, and any local Euclidean extensions of the resulting coordinate representatives.

[L1] Boundary-chart transition maps are smooth in the local-extension sense ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]).

[L2] Smooth half-space maps are closed under composition and satisfy the chain rule ([[prop-chain-rule-for-smooth-half-space-maps]]).

[L3] Agreeing smooth Euclidean extensions have identical derivatives on their common half-space domain ([[lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space]]).

## Proof

**Proof technique:** direct.

1.1 On every common domain, the two coordinate representatives differ by composition on the left and right with the source and target transition maps, which are smooth by [L1]. [given, L1]

2.1 By [L2], one representative is extension-smooth exactly when the other is, because the transition maps are diffeomorphisms with smooth inverses. By [L3], all derivatives obtained from different extensions agree on the half-space. Thus neither the charts nor the extensions affect the definition. [L2, L3, step 1.1] ∎
