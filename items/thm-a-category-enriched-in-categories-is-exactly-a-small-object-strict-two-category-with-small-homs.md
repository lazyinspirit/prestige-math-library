---
id: thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs
kind: theorem
title: "A Cat-enriched category is exactly a strict 2-category with a set of objects and small hom-categories"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-enriched-category, def-strict-two-category, thm-the-category-of-small-categories-is-cartesian-closed]
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
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.1"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

With $\mathbf{Cat}$ equipped with its cartesian monoidal structure on small
categories, a $\mathbf{Cat}$-enriched category is exactly the same data as a
strict 2-category with a set of objects and small hom-categories.

## Facts & Assumptions

**Given:** A $\mathbf{Cat}$-enriched category or, conversely, a strict
2-category with a set of objects and small hom-categories.

[L1] A $\mathcal V$-category consists of a set of objects, hom-objects in the
base, enriched composition morphisms, and enriched identities
([[def-enriched-category]]).

[L2] A strict 2-category consists of objects, hom-categories, identity
1-morphisms, and horizontally composable functors that are strictly
associative and unital ([[def-strict-two-category]]).

[L3] The category $\mathbf{Cat}$ of small categories is cartesian closed, hence
in particular cartesian monoidal on small categories
([[thm-the-category-of-small-categories-is-cartesian-closed]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $\mathcal A$ is enriched in $\mathbf{Cat}$. By [L1], each hom-object $\mathcal A(A,B)$ is a small category, and the object set of $\mathcal A$ is already a set. Because the monoidal product in [L3] is the cartesian product, the enriched composition morphism is a functor $\mathcal A(B,C)\times\mathcal A(A,B)\to\mathcal A(A,C)$, which is exactly horizontal composition on 1-morphisms and 2-morphisms. The identity morphism $\mathbf 1\to\mathcal A(A,A)$ picks out an object of the hom-category, hence an identity 1-morphism. The enriched associativity and unit diagrams are therefore exactly the strict 2-category axioms of [L2]. [L1, L2, L3, given]

1.2 Conversely, let $\mathcal K$ be a strict 2-category with a set of objects and small hom-categories. Use the hom-categories $\mathcal K(A,B)$ as the hom-objects. The horizontal-composition functor of [L2] supplies $\mathcal K(B,C)\times\mathcal K(A,B)\to\mathcal K(A,C)$, and each identity 1-morphism gives a functor $\mathbf 1\to\mathcal K(A,A)$. Since the tensor product in [L3] is cartesian product, these data satisfy the definition of [L1]. [L1, L2, L3, algebra]

2.1 Steps 1.1 and 1.2 are inverse unpackings of the same data, so the two notions agree exactly. [step 1.1, step 1.2] ∎
