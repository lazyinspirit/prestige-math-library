---
id: thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category
kind: theorem
title: "Enrichment in a preorder recovers a preorder, and enrichment in sets recovers a small ordinary category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-enriched-category, def-preorder, def-category]
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
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.2"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Sections 3.2 and 3.3"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

Let $\mathcal V$ be a monoidal category that is also a preorder in the sense
that between any two objects of $\mathcal V$ there is at most one morphism.
Then the underlying ordinary category of every $\mathcal V$-category is a
preorder. If $\mathcal V=\mathbf{Set}$ with its cartesian monoidal structure,
then a $\mathbf{Set}$-enriched category is exactly a small ordinary category.

## Facts & Assumptions

**Given:** A $\mathcal V$-category $\mathcal A$.

[L1] A preorder is a reflexive and transitive relation on a set
([[def-preorder]]).

[L2] A category has objects, morphisms, identities, and associative
composition ([[def-category]]).

[L3] A $\mathcal V$-category has hom-objects, enriched composition, and
enriched identities ([[def-enriched-category]]).

## Proof

**Proof technique:** direct.

1.1 Suppose the base $\mathcal V$ is thin. Then for any objects $A,B$ of $\mathcal A$, the hom-set of the underlying ordinary category is $\mathcal V(\mathbf 1,\mathcal A(A,B))$. Because $\mathcal V$ has at most one morphism between any two objects, this hom-set has at most one element. The enriched identities and composition from [L3] become ordinary identities and composition, so the underlying category is a category all of whose hom-sets are subsingletons. Defining $A\le B$ when such a morphism exists gives a reflexive and transitive relation by [L2], hence a preorder by [L1]. [L1, L2, L3, given]

1.2 Now take $\mathcal V=\mathbf{Set}$ with cartesian product and singleton unit. Then a hom-object of [L3] is literally a set of morphisms, an identity map $\{*\}\to\mathcal A(A,A)$ chooses an identity element, and the composition morphism $\mathcal A(B,C)\times\mathcal A(A,B)\to\mathcal A(A,C)$ is ordinary composition of elements. The associativity and unit diagrams of [L3] are exactly the axioms of [L2]. Conversely, every small ordinary category gives such data by taking its hom-sets as the enriched hom-objects; its object collection is a set as required by [L3]. [L2, L3, algebra]

2.1 Therefore thin-base enrichment recovers a preorder on the object set, and Set-enrichment recovers precisely a small ordinary category. [step 1.1, step 1.2] ∎
