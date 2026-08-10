---
id: prop-category-isomorphisms-are-bijective-on-objects-and-morphisms
kind: proposition
title: "A functor is an isomorphism of categories exactly when its object and morphism maps are bijective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-and-contravariant-functor, def-isomorphism-groupoid-and-connected-category, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]
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

A functor is an isomorphism in the category of categories exactly when its
object map and its total morphism map are bijective.

## Facts & Assumptions

**Given:** A functor $F:\mathcal C\to\mathcal D$.

[L1] Functors preserve domains, codomains, identities, and composition ([[def-functor-and-contravariant-functor]]), while a category isomorphism has a two-sided inverse functor ([[def-isomorphism-groupoid-and-connected-category]]).

[L2] A function is bijective exactly when it has a two-sided inverse ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

## Proof

**Proof technique:** direct.

1.1 If $F$ has an inverse functor, the object maps and morphism maps are inverse functions and hence bijective by [L2]. [given, L1, L2]

2.1 Conversely, take inverse functions on objects and morphisms. The inverse morphism map preserves domain and codomain because applying injective $F$ reduces each assertion to the corresponding assertion for $F$. [step 1.1, L1, L2]

3.1 The same injectivity argument shows that the inverse sends identities to identities and preserves composition; it is therefore an inverse functor, so $F$ is a category isomorphism. [step 2.1, L1, L2] ∎

