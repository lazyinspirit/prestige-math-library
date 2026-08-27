---
id: def-canonical-morphism-from-a-finite-coproduct-to-a-finite-product
kind: definition
title: "Canonical morphism from a finite coproduct to a finite product"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense, def-products-and-coproducts]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Definition

Let $\mathcal C$ have zero morphisms, and let $(A_i)_{i\in I}$ be a finite
family of objects with coproduct $(Q,\iota_i)$ and product $(P,p_i)$
([[def-products-and-coproducts]]).

The **canonical morphism from the finite coproduct to the finite product** is
the unique morphism

$$c:Q\to P$$

whose components satisfy

$$p_jc\iota_i=\begin{cases}1_{A_i},&i=j,\\0_{A_i,A_j},&i\ne j.\end{cases}$$

The zero morphisms used here are the canonical ones supplied by
[[cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense]]
when the ambient category is preadditive with a zero object.
