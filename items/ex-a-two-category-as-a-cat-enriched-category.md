---
id: ex-a-two-category-as-a-cat-enriched-category
kind: example
title: "A strict 2-category read as a Cat-enriched category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs]
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
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.1"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Example

Let $\mathcal K$ be any strict 2-category with a set of objects and small
hom-categories. Then $\mathcal K$ itself is an example of a
$\mathbf{Cat}$-enriched category: the hom-object from $A$ to $B$ is the
hom-category $\mathcal K(A,B)$, and enriched composition is horizontal
composition.

## Facts & Assumptions

**Given:** A strict 2-category $\mathcal K$ with a set of objects and small hom-categories.

[L1] Such a strict 2-category is exactly the same thing as a $\mathbf{Cat}$-enriched category ([[thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs]]).

## Verification

**Proof technique:** direct.

1.1 The hom-categories, horizontal composition, and identity 1-morphisms of $\mathcal K$ are exactly the data that [L1] identifies with the hom-objects, enriched composition, and enriched identities of a $\mathbf{Cat}$-enriched category. [L1, given]

2.1 Therefore every such strict 2-category is read directly as a $\mathbf{Cat}$-enriched category. [step 1.1] ∎
