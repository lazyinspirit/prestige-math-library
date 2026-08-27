---
id: fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen
kind: false-statement
title: "FALSE: the addition on an additive category is extra structure that must be chosen"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique, def-additive-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Merlin Christ, Tobias Dyckerhoff, and Tashi Walde, Lax Additivity, Section 2"
      url: "https://www.edit.fis.uni-hamburg.de/ws/files/59475679/2402.12251v1.pdf"
pipeline_run: frontier-20
---

## Statement

**False claim:** the addition on an additive category is extra structure that
must be chosen independently of the biproduct data.

## Facts & Assumptions

**Given:** An additive category.

[L1] An additive category has finite biproducts
([[def-additive-category]]).

[L2] The commutative-monoid enrichment determined by finite biproducts is
unique
([[thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], an additive category has exactly the finite biproduct structure to which [L2] applies. [L1]

2.1 The theorem [L2] says that any compatible addition law on the hom-sets is forced by that biproduct structure. So there is no further independent choice to make. [L2, step 1.1] ∎
