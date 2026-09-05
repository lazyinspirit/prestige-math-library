---
id: thm-a-conical-limit-is-stronger-than-a-limit-in-the-underlying-category
kind: theorem
title: "A conical enriched limit is stronger than a limit in the underlying category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-conical-limit-in-an-enriched-category, rem-the-underlying-category-can-lose-information]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Categorical Homotopy Theory, Example 7.5.2"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

Whenever a conical enriched limit exists, its image in the underlying ordinary
category is an ordinary limit.

## Facts & Assumptions

**Given:** A diagram in a $\mathcal V$-category.

[L1] A conical enriched limit is an enriched weighted limit of constant-unit shape ([[def-conical-limit-in-an-enriched-category]]).

[L2] Passing to the underlying category can lose enriched hom-object information ([[rem-the-underlying-category-can-lose-information]]).

## Proof

**Proof technique:** direct.

1.1 If $L$ is a conical enriched limit, then the enriched universal morphism gives, after applying the underlying-hom functor to each hom-object, exactly the ordinary cone bijection in the underlying category. So every conical enriched limit is an ordinary limit after forgetting enrichment. [L1, L2, given]

2.1 So the conical enriched universal property is stronger than the underlying ordinary one: once the former exists, the latter follows by forgetting to global elements of the enriched hom-objects. [L2, step 1.1] ∎
