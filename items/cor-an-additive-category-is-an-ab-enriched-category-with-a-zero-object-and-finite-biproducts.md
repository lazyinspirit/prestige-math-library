---
id: cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts
kind: corollary
title: "An additive category is an Ab-enriched category with a zero object and finite biproducts"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category, def-additive-category]
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
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.3"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
    - title: "The Stacks Project, Section 12.3"
      url: "https://stacks.math.columbia.edu/tag/09SE"
---

## Statement

Every additive category is an $\mathbf{Ab}$-enriched category whose underlying
ordinary category has a zero object and all finite biproducts.

## Facts & Assumptions

**Given:** An additive category $\mathcal A$.

[L1] An additive category is a preadditive category with finite biproducts
([[def-additive-category]]).

[L2] A category is $\mathbf{Ab}$-enriched exactly when it is preadditive
([[thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\mathcal A$ is preadditive and has finite biproducts; in particular it has a zero object as part of that finite-biproduct structure. [L1, given]

2.1 The preadditivity from step 1.1 is exactly the hypothesis of [L2], so $\mathcal A$ is $\mathbf{Ab}$-enriched. The zero object and finite biproducts remain part of the underlying ordinary category because [L2] only rephrases the hom-structure. [L2, step 1.1]

3.1 Therefore every additive category has the stated enriched form. [step 2.1] ∎
