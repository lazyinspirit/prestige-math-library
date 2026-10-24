---
id: ex-the-boundary-of-an-oriented-interval
kind: example
title: "The boundary of an oriented interval"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field]
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

## Example

With the standard orientation on $[a,b]$, the induced orientation of its boundary is $\partial[a,b]=\{b\}-\{a\}$.

## Facts & Assumptions

**Given:** Real numbers $a<b$, with $[a,b]$ oriented by the positive tangent $\partial_x$.

[L1] Boundary orientation uses the outward-normal-first rule ([[def-induced-boundary-orientation]]).

[L2] The orientation obtained from that rule does not depend on the chosen outward vector ([[prop-boundary-orientation-is-independent-of-the-outward-vector-field]]).

## Verification

**Proof technique:** direct.

1.1 The vectors $+\partial_x$ at $b$ and $-\partial_x$ at $a$ point out of the interval. [given, algebra]

2.1 At $b$, the outward vector $+\partial_x$ is positive, so [L1] gives the point $b$ the positive orientation. At $a$, the outward vector $-\partial_x$ is negative, so [L1] gives $a$ the negative orientation; [L2] makes these conclusions independent of the particular outward vectors. Hence $\partial[a,b]=\{b\}-\{a\}$. [given, L1, L2, step 1.1, algebra] ∎
