---
id: ex-the-underlying-category-of-a-cat-enriched-category-forgets-the-two-cells
kind: example
title: "The underlying category of a Cat-enriched category forgets the 2-cells"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-the-underlying-category-can-lose-information, thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Categorical Homotopy Theory, Sections 3.1 and 3.4"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Example

Let $\mathcal K$ be a strict 2-category with a set of objects and small
hom-categories, viewed as a $\mathbf{Cat}$-enriched category. Then its
underlying ordinary category has the same objects and the same 1-morphisms,
but no nonidentity 2-cells.

## Facts & Assumptions

**Given:** A strict 2-category $\mathcal K$ with a set of objects and small hom-categories.

[L1] Strict 2-categories and $\mathbf{Cat}$-enriched categories are the same data in the present size range ([[thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs]]).

[L2] The underlying ordinary category of a Cat-enriched category keeps only the objects of each hom-category ([[rem-the-underlying-category-can-lose-information]]).

## Verification

**Proof technique:** direct.

1.1 Read $\mathcal K$ as a $\mathbf{Cat}$-enriched category using [L1]. [L1, given]

2.1 Then [L2] says that the hom-set in the underlying category is the set of objects of the corresponding hom-category of $\mathcal K$. Those objects are the 1-morphisms, while the 2-morphisms are morphisms inside the hom-category and are forgotten. [L2, step 1.1] ∎
