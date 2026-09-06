---
id: ex-the-cylinder-with-two-oppositely-oriented-boundary-components
kind: example
title: "A cylinder with oppositely oriented boundary components"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-product-orientation, def-induced-boundary-orientation, prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary]
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

For the product orientation on $[0,1]\times S^1$, the boundary circles $\{1\}\times S^1$ and $\{0\}\times S^1$ receive opposite orientations.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Verification

**Proof technique:** direct.

1.1 At $1$ the outward normal is $+\partial_t$ and at $0$ it is $-\partial_t$. [given]

2.1 The outward-normal-first rule therefore leaves the circle orientation at one end and reverses it at the other. [step 1.1] ∎
