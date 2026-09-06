---
id: ex-the-boundary-of-an-oriented-interval
kind: example
title: "The boundary of an oriented interval"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field]
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

With the standard orientation on $[a,b]$, the induced orientation of its boundary is $\partial[a,b]=\{b\}-\{a\}$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Verification

**Proof technique:** direct.

1.1 The outward vectors are $+\partial_x$ at $b$ and $-\partial_x$ at $a$. [given]

2.1 Outward-normal-first declares the first point positive and the second negative. [step 1.1] ∎
