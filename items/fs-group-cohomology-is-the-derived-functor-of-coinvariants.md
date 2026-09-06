---
id: fs-group-cohomology-is-the-derived-functor-of-coinvariants
kind: false-statement
title: "Group cohomology is the derived functor of coinvariants"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-cohomology-as-a-derived-functor, def-group-homology-as-a-derived-functor]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Definition 6.1.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

Group cohomology is the derived functor of coinvariants.

## Refutation

**Given:** The definitions of group cohomology and group homology.

1.1 Coinvariants are right exact, so their left derived functors are indexed homologically. [given]

2.1 Those derived functors are $H_n(G;M)$; cohomology is instead the right derived functor of the left exact invariants functor. [step 1.1] ∎
