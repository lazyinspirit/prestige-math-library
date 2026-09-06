---
id: fs-an-orientable-manifold-comes-with-a-canonical-orientation
kind: false-statement
title: "An orientable manifold has a canonical orientation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations]
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

**False.** A nonempty connected orientable manifold has two orientations, exchanged by reversal.

## Facts & Assumptions

**Given:** A nonempty connected orientable smooth manifold $M$.

[L1] Such a manifold has exactly two orientations, a chosen orientation and its pointwise opposite ([[prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations]]).

## Refutation

**Proof technique:** direct.

1.1 Orientability supplies an orientation $o$, and [L1] supplies its distinct pointwise opposite $-o$. [given, L1, choose]

2.1 By [L1], these two choices are exhaustive. Since the definition of orientability specifies neither one, orientability alone does not determine a canonical orientation. [L1, step 1.1] ∎
