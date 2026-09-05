---
id: fs-the-underlying-ordinary-category-determines-the-enriched-category
kind: false-statement
title: "FALSE: the underlying ordinary category determines the enriched category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-the-underlying-category-can-lose-information]
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
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.4"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

The underlying ordinary category determines the full enriched category.

## Facts & Assumptions

**Given:** The information-loss remark from the A page.

[L1] The underlying category can lose enriched information, for instance 2-cells in Cat-enrichment ([[rem-the-underlying-category-can-lose-information]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], distinct enriched hom-objects can induce the same underlying ordinary hom-set data. [L1, given]

2.1 Therefore the underlying ordinary category does not determine all enriched structure, so the statement is false. [step 1.1] ∎
