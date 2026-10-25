---
id: thm-inclusion-of-integers-in-rationals-is-monic-epic-not-iso-in-ring
kind: theorem
title: "The inclusion $\\mathbb Z\\hookrightarrow\\mathbb Q$ is monic and epic but neither surjective nor an isomorphism in $\\mathbf{Ring}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-rings-and-homomorphisms-form-category-ring, def-monomorphism-and-epimorphism, def-isomorphism-groupoid-and-connected-category, lem-int-embeds-rat, thm-int-comm-ring, thm-rat-field, lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

In $\mathbf{Ring}$, the canonical inclusion
$i:\mathbb Z\hookrightarrow\mathbb Q$ is monic and epic, but its underlying
function is not surjective and it is not an isomorphism.

## Facts & Assumptions

**Given:** The canonical unital ring homomorphism $i:\mathbb Z\to\mathbb Q$.

[L1] The integers form a commutative ring ([[thm-int-comm-ring]]), the rationals form a field and hence a commutative ring ([[thm-rat-field]], [[lem-field-is-a-commutative-ring]]), and [[lem-int-embeds-rat]] identifies $i$ as an injective embedding.

[L2] Morphisms of $\mathbf{Ring}$ are unit-preserving ring homomorphisms ([[prop-rings-and-homomorphisms-form-category-ring]]); monic, epic, and isomorphism mean cancellation and a two-sided inverse ([[def-monomorphism-and-epimorphism]], [[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** direct.

1.1 If $i\circ u=i\circ v$, injectivity of $i$ gives $u=v$ pointwise, so $i$ is monic. [given, L1, L2]

2.1 If ring homomorphisms $f,g:\mathbb Q\to R$ agree after $i$, then for $q=a/b$ with $b\ne0$ both send $q$ to the common image of $a$ times the inverse of the common image of $b$; hence $f(q)=g(q)$ for every $q$, so $i$ is epic. [step 1.1, L1, L2]

3.1 The rational $1/2$ is not an integer, so the underlying function of $i$ is not surjective; a categorical inverse would be an inverse function and would force surjectivity, so $i$ is not an isomorphism. [step 2.1, L1, L2] ∎

