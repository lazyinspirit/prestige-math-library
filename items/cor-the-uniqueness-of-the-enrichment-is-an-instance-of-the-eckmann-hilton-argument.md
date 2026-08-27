---
id: cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument
kind: corollary
title: "The uniqueness of the enrichment is an Eckmann-Hilton phenomenon"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids, thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique, thm-eckmann-hilton-argument]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.2"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
    - title: "nLab, Eckmann-Hilton argument"
      url: "https://ncatlab.org/nlab/show/Eckmann-Hilton%2Bargument"
pipeline_run: frontier-20
---

## Statement

The uniqueness of the commutative-monoid enrichment determined by finite
biproducts is an instance of the Eckmann-Hilton phenomenon.

## Facts & Assumptions

**Given:** Two candidate bilinear commutative-monoid laws on the hom-sets of a category with finite biproducts.

[L1] Finite biproducts define a canonical commutative-monoid law on every hom-set ([[thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]]).

[L2] The compatible enrichment is unique ([[thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique]]).

[L3] Two unital operations satisfying interchange coincide and are commutative ([[thm-eckmann-hilton-argument]]).

## Proof

**Proof technique:** direct.

1.1 Fix a hom-set $\mathcal C(A,B)$, write $+$ for the canonical law from [L1], and let $\boxplus$ be any second compatible bilinear law. Let $i_1,i_2:B\to B\oplus B$, $p_1,p_2:B\oplus B\to B$, and $\nabla_B:B\oplus B\to B$ be the standard biproduct maps. Because post- and precomposition are homomorphisms for $\boxplus$, the morphism $i_1f\boxplus i_2g:A\to B\oplus B$ has projections $f$ and $g$, so it is the pairing $\langle f,g\rangle$. By the canonical construction from [L1], this gives $f+g=\nabla_B\langle f,g\rangle$. [L1]

2.1 Using step 1.1 and bilinearity for $\boxplus$,

$$(f+g)\boxplus(h+k)=\nabla_B(\langle f,g\rangle\boxplus\langle h,k\rangle)=\nabla_B\bigl(i_1(f\boxplus h)\boxplus i_2(g\boxplus k)\bigr)=(f\boxplus h)+(g\boxplus k).$$

Both operations have the same unit $0_{A,B}$, so $+$ and $\boxplus$ satisfy the interchange law on $\mathcal C(A,B)$. [L1, step 1.1]

3.1 Applying [L3] to $+$ and $\boxplus$ shows that they coincide and are commutative. This is exactly the uniqueness conclusion of [L2], expressed as an Eckmann-Hilton rigidity statement on each hom-set. [L2, L3, step 2.1]

4.1 Therefore the uniqueness of the enrichment determined by finite biproducts is an Eckmann-Hilton phenomenon. [step 3.1] ∎
