---
id: fs-an-orientable-manifold-comes-with-a-canonical-orientation
kind: false-statement
title: "An orientable manifold has a canonical orientation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations]
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

**False.** A nonempty connected orientable manifold has two orientations, exchanged by reversal.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Refutation

**Proof technique:** direct.

1.1 Choose one orientation. Its pointwise opposite is another orientation. [given]

2.1 The two-orientations proposition says these are distinct and exhaustive, so orientability alone does not choose one. [step 1.1] ∎
