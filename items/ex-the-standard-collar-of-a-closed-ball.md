---
id: ex-the-standard-collar-of-a-closed-ball
kind: example
title: "The standard collar of a closed ball"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-collar-of-a-manifold-boundary, thm-collar-neighborhood-theorem, ex-the-closed-ball-and-its-sphere-boundary]
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

For $n\ge1$, $c:S^{n-1}\times[0,\varepsilon)\to B^n$, $c(u,t)=(1-t)u$, is a collar for $0<\varepsilon<1$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Verification

**Proof technique:** direct.

1.1 It fixes the sphere at $t=0$ and is injective because radius and direction are recovered from a nonzero image. [given]

2.1 Its image is $\{x:1-\varepsilon<|x|\le1\}$, an open neighbourhood of the boundary in the relative topology, and its inverse is smooth in polar collar coordinates. [step 1.1] ∎
