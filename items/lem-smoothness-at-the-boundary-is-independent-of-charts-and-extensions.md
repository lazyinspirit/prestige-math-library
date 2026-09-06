---
id: lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions
kind: lemma
title: "Boundary smoothness is independent of charts and extensions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-smooth-map-between-manifolds-with-boundary, lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space, prop-chain-rule-for-smooth-half-space-maps]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
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

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 Two coordinate representatives differ by composition on the left and right with smooth chart transitions. [given]

2.1 The half-space chain rule shows one representative is extension-smooth exactly when the other is; the extension lemma makes the derivatives independent as well. [step 1.1] ∎
