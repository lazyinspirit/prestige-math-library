---
id: prop-category-isomorphisms-are-bijective-on-objects-and-morphisms
kind: proposition
title: "A functor is an isomorphism of categories exactly when its object and morphism maps are bijective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [rem-category-theory-class-and-size-conventions, def-functor-and-contravariant-functor, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

A functor is an **isomorphism of categories**, meaning that it has a two-sided
inverse functor, exactly when its object map and its total morphism map are
bijective.

For large categories, these are bijective definable class maps under
[[rem-category-theory-class-and-size-conventions]].

## Facts & Assumptions

**Given:** A functor $F:\mathcal C\to\mathcal D$.

[L1] Functors preserve domains, codomains, identities, and composition ([[def-functor-and-contravariant-functor]]), while the Statement defines a category isomorphism by a two-sided inverse functor.

[L2] A set function is bijective exactly when it has a two-sided inverse ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]). Under the Statement's definable-class convention, the same pointwise statement defines a bijective class map and its uniquely determined inverse class map.

## Proof

**Proof technique:** direct.

1.1 If $F$ has an inverse functor, the object maps and morphism maps are pointwise inverse maps and hence bijective by [L2]. [given, L1, L2]

1.2 Conversely, use the uniquely determined inverse set functions or definable class maps on objects and morphisms supplied by [L2]. The inverse morphism map preserves domain and codomain because applying injective $F$ reduces each assertion to the corresponding assertion for $F$. [given, L1, L2]

2.1 The same injectivity argument shows that the inverse sends identities to identities and preserves composition; it is therefore an inverse functor, so $F$ is a category isomorphism. [step 1.2, L1, L2] ∎
