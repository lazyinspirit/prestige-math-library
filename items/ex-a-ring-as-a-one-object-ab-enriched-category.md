---
id: ex-a-ring-as-a-one-object-ab-enriched-category
kind: example
title: "A ring as a one-object Ab-enriched category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category, thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring]
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
    - title: "The Stacks Project, Section 12.3"
      url: "https://stacks.math.columbia.edu/tag/09SE"
---

## Example

Every ring $R$ determines a one-object $\mathbf{Ab}$-enriched category whose
single hom-object is the additive group of $R$ and whose enriched composition
is multiplication in $R$.

## Facts & Assumptions

**Given:** A ring $R$.

[L1] A one-object preadditive category is the same thing as a ring ([[thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring]]).

[L2] A preadditive category is exactly an $\mathbf{Ab}$-enriched category ([[thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $R$ is the endomorphism ring of a one-object preadditive category. [L1, given]

2.1 Applying [L2] to that preadditive category turns it into a one-object $\mathbf{Ab}$-enriched category, with the additive group of $R$ as hom-object and ring multiplication as enriched composition. [L2, step 1.1] ∎
