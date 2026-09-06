---
id: ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary
kind: example
title: "The Mobius band is nonorientable although its boundary circle is orientable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-orientable-manifold, def-oriented-smooth-manifold-and-oriented-chart, fs-every-manifold-is-orientable]
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

## Example

The Möbius band is nonorientable, while its boundary circle is orientable independently.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Verification

**Proof technique:** direct.

1.1 In the quotient $[0,1]\times[-1,1]/(0,s)\sim(1,-s)$, one trip around the core reverses one coordinate and hence reverses a determinant ray. [given]

2.1 Thus no ambient orientation descends. Its single boundary component is a circle and admits an orientation-preserving parametrization; this is not induced from the nonoriented band. [step 1.1] ∎
