---
id: thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category
kind: theorem
title: "Ab-enriched categories are exactly preadditive categories"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-enriched-category, def-preadditive-category, thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product, thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]
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
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.2"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.3"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

A category enriched in $\mathbf{Ab}$ with tensor product
$\otimes_{\mathbb Z}$ is exactly a preadditive category.

## Facts & Assumptions

**Given:** A category or enriched category with object set $\operatorname{Ob}$.

[L1] An $\mathbf{Ab}$-enriched category has abelian-group hom-objects,
composition morphisms
$\mathcal A(B,C)\otimes_{\mathbb Z}\mathcal A(A,B)\to\mathcal A(A,C)$, and
identity morphisms $\mathbb Z\to\mathcal A(A,A)$
([[def-enriched-category]]).

[L2] A preadditive category is a category whose hom-sets are abelian groups and
whose composition is bilinear ([[def-preadditive-category]]).

[L3] $\mathbf{Ab}$ is monoidal under $\otimes_{\mathbb Z}$, and morphisms
out of $X\otimes_{\mathbb Z}Y$ are exactly bilinear maps out of
$X\times Y$
([[thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product]]).

[L4] In a preadditive category, the hom-bifunctor already takes values in
abelian groups ([[thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\mathcal A$ is $\mathbf{Ab}$-enriched. By [L1], each hom-object $\mathcal A(A,B)$ is an abelian group. The composition morphism is a morphism in $\mathbf{Ab}$ out of the tensor product, so by [L3] it is exactly a bilinear map $\mathcal A(B,C)\times\mathcal A(A,B)\to\mathcal A(A,C)$. The identity map $\mathbb Z\to\mathcal A(A,A)$ selects the identity element in the endomorphism group. Thus the underlying ordinary category has abelian-group homs and bilinear composition, so [L2] makes it preadditive. [L1, L2, L3, given]

1.2 Conversely, let $\mathcal C$ be preadditive. By [L4], each hom-set is an abelian group and the two-variable hom-assignment is additive in each variable. So for every triple $A,B,C$, the bilinear composition map $\mathcal C(B,C)\times\mathcal C(A,B)\to\mathcal C(A,C)$ transposes uniquely, by [L3], to a group homomorphism $\mathcal C(B,C)\otimes_{\mathbb Z}\mathcal C(A,B)\to\mathcal C(A,C)$. Sending $1\in\mathbb Z$ to the identity morphism of $A$ gives the required unit map $\mathbb Z\to\mathcal C(A,A)$. The ordinary associativity and unit laws are exactly the enriched ones after this transposition. [L2, L3, L4, algebra]

2.1 Steps 1.1 and 1.2 show that the two notions encode the same data. [step 1.1, step 1.2] ∎
