---
id: fs-every-manifold-is-orientable
kind: false-statement
title: "Every manifold is orientable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-orientable-manifold, def-oriented-smooth-manifold-and-oriented-chart]
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

**False.** The Möbius band is nonorientable.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Refutation

**Proof technique:** direct.

1.1 Transport a local determinant ray once around its core; the twist sends it to its negative ray. [given]

2.1 A global continuous orientation would return the ray unchanged, a contradiction. Its boundary circle can be oriented independently, not as an induced boundary orientation. [step 1.1] ∎
