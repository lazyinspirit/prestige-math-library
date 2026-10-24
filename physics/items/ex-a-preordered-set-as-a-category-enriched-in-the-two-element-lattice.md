---
id: ex-a-preordered-set-as-a-category-enriched-in-the-two-element-lattice
kind: example
title: "A preordered set read as a category enriched in the two-element lattice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set]
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
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.2"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Example

Let $(P,\le)$ be a preordered set. Define a $\mathbf 2$-valued hom-object by
$\mathcal P(x,y)=1$ exactly when $x\le y$ and $0$ otherwise. Then $\mathcal P$
is a $\mathbf 2$-enriched category.

## Facts & Assumptions

**Given:** A preordered set $(P,\le)$.

[L1] A $\mathbf 2$-enriched category is exactly a preordered set ([[thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set]]).

## Verification

**Proof technique:** direct.

1.1 The displayed hom-object assignment is the standard construction used in [L1]. Reflexivity gives the enriched identities and transitivity gives enriched composition. [L1, given]

2.1 Hence the preorder $(P,\le)$ is an example of a $\mathbf 2$-enriched category. [step 1.1] ∎
