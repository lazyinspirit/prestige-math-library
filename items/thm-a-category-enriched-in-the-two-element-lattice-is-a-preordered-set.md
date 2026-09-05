---
id: thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set
kind: theorem
title: "A category enriched in the two-element lattice is a preordered set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-enriched-category, def-preorder]
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
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, examples after Section 1.2"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement

Let $\mathbf 2=\{0\le1\}$ be the two-element lattice, regarded as a monoidal
preorder with tensor product $\wedge$ and unit $1$. Then a $\mathbf 2$-enriched
category is exactly a preordered set.

## Facts & Assumptions

**Given:** A $\mathbf 2$-enriched category $\mathcal A$ or a preorder $(P,\le)$.

[L1] A preorder is a reflexive and transitive relation on a set
([[def-preorder]]).

[L2] A $\mathcal V$-category has a set of objects, hom-objects, enriched
composition, and enriched identities ([[def-enriched-category]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal A$ be $\mathbf 2$-enriched. Define a relation on its object set by $A\le B \Longleftrightarrow \mathcal A(A,B)=1$. Because the unit object of the base is $1$, the identity morphism of [L2] forces $\mathcal A(A,A)=1$ for every $A$, so the relation is reflexive. Since composition in the base is $\wedge$, the composition morphism $\mathcal A(B,C)\wedge\mathcal A(A,B)\to\mathcal A(A,C)$ implies that if both hom-objects on the left are $1$, then $\mathcal A(A,C)=1$ on the right. So the relation is transitive. By [L1], it is a preorder. [L1, L2, given]

1.2 Conversely, given a preorder $(P,\le)$, put the object set equal to $P$ and define the hom-object by $\mathcal A(x,y)=1$ when $x\le y$ and $\mathcal A(x,y)=0$ otherwise. Reflexivity gives the identity maps, and transitivity gives the composition morphism because $1\wedge1=1$ exactly in the composable case. Thus the preorder data satisfy [L2]. [L1, L2, algebra]

2.1 The two constructions are inverse restatements of the same information, so $\mathbf 2$-enrichment and preorder structure are equivalent. [step 1.1, step 1.2] ∎
