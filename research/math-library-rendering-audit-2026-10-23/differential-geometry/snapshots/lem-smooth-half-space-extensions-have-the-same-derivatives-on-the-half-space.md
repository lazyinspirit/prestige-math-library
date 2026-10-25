---
id: lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space
kind: lemma
title: "Half-space extensions agreeing on a relatively open set have the same derivatives there"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-function-on-a-relatively-open-subset-of-a-half-space]
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

If two smooth Euclidean extensions agree on a relatively open subset of $\mathbb H^n$, then all of their derivatives agree at every point of that subset.

## Facts & Assumptions

**Given:** A relatively open set $U\subseteq\mathbb H^n$ and two smooth Euclidean maps $F$ and $G$, defined on neighbourhoods of $U$, whose restrictions to $U$ agree.

## Proof

**Proof technique:** direct.

1.1 Their difference vanishes on the relative interior, which is dense in the relative set. Every Euclidean derivative of the difference vanishes there by ordinary differentiation. [given]

2.1 Those derivatives are continuous, so they also vanish at each face point. Hence the derivative of a half-space-smooth map is independent of its chosen extension. [step 1.1] ∎
