---
id: thm-a-closed-monoidal-category-is-enriched-in-itself
kind: theorem
title: "A closed monoidal category is enriched in itself"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-enriched-category, def-left-closed-and-right-closed-monoidal-category, thm-the-internal-hom-composition-morphism, thm-the-unit-is-an-internal-hom-unit]
aliases: []
landmark: true
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
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (1.28) to (1.32)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.2"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

If $\mathcal V$ is a right-closed monoidal category whose object collection is
a set, then it carries a canonical $\mathcal V$-enriched category structure
with the same objects as $\mathcal V$
and hom-object
$$\underline{\mathcal V}(X,Y):=[X,Y].$$
The enriched composition is the internal-hom composition morphism and the
enriched identity is the unit morphism into $[X,X]$.

## Facts & Assumptions

**Given:** A right-closed monoidal category $\mathcal V$ with a set of objects.

[L1] Right closedness supplies internal hom-objects $[X,Y]$
([[def-left-closed-and-right-closed-monoidal-category]]).

[L2] There is a natural composition morphism
$[Y,Z]\otimes[X,Y]\to[X,Z]$ with associative and unital laws
([[thm-the-internal-hom-composition-morphism]]).

[L3] The unit object yields the external hom-set bijection
$\mathcal V(\mathbf 1,[X,Y])\cong\mathcal V(X,Y)$
([[thm-the-unit-is-an-internal-hom-unit]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every ordered pair $(X,Y)$ has an internal hom-object $[X,Y]$. Take that object to be the enriched hom-object $\underline{\mathcal V}(X,Y)$. [L1, given]

1.2 Use the composition morphism of [L2] as the enriched composition map $\underline{\mathcal V}(Y,Z)\otimes\underline{\mathcal V}(X,Y)\to\underline{\mathcal V}(X,Z)$. For each $X$, use the unit morphism $\mathbf 1\to[X,X]$ from [L2] as the enriched identity. The associativity and unit axioms required by [[def-enriched-category]] are exactly the associativity and unit laws already proved in [L2]. [L2, algebra]

2.1 Thus the data of steps 1.1 and 1.2 satisfy the definition of a $\mathcal V$-category. The bijection of [L3] explains why the global elements of the enriched hom-object recover the ordinary morphisms of $\mathcal V$. [L3, step 1.1, step 1.2] ∎
