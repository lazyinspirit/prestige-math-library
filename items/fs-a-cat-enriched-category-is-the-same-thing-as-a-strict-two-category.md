---
id: fs-a-cat-enriched-category-is-the-same-thing-as-a-strict-two-category
kind: false-statement
title: "FALSE: a Cat-enriched category is the same thing as a strict 2-category without smallness hypotheses"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.1"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

A Cat-enriched category is the same thing as a strict 2-category, with no extra
size hypotheses.

## Facts & Assumptions

**Given:** The dictionary theorem on the A page.

[L1] A Cat-enriched category is exactly a strict 2-category only when the object set is a set and the hom-categories are small ([[thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs]]).

## Refutation

**Proof technique:** direct.

1.1 The theorem [L1] states the precise equivalence and includes the smallness hypotheses as part of the claim. [L1, given]

2.1 Removing those hypotheses enlarges the statement beyond [L1], so the displayed unrestricted claim is false. [step 1.1] ∎
