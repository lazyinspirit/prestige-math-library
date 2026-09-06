---
id: cor-diffeomorphisms-preserve-interior-and-boundary
kind: corollary
title: "Diffeomorphisms preserve interior and boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-smooth-invariance-of-manifold-boundary, def-smooth-map-between-manifolds-with-boundary]
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

Every diffeomorphism of manifolds with boundary maps $\partial M$ onto $\partial N$ and $\operatorname{Int}M$ onto $\operatorname{Int}N$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 In boundary charts its representative and inverse are smooth half-space diffeomorphisms. [given]

2.1 Boundary invariance applied in those charts gives both asserted equalities. [step 1.1] ∎
