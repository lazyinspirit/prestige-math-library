---
id: thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids
kind: theorem
title: "A category with finite biproducts is enriched in commutative monoids"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-biproduct-data-characterisation-without-addition, prop-the-empty-biproduct-is-a-zero-object, prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism]
justified_by: []
aliases: []
landmark: true
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.2, Proposition 3 and Exercise 2.4(a)"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
    - title: "Merlin Christ, Tobias Dyckerhoff, and Tashi Walde, Lax Additivity, Section 2"
      url: "https://www.edit.fis.uni-hamburg.de/ws/files/59475679/2402.12251v1.pdf"
pipeline_run: frontier-20
---

## Statement

If a category has finite biproducts, then each hom-set carries a canonical
commutative monoid structure for which composition is bilinear.

## Facts & Assumptions

**Given:** A category $\mathcal C$ with finite biproducts and objects $A,B,C$.

[L1] Biproducts can be recognized from products, coproducts, and the zero
equations without using any pre-existing addition
([[thm-biproduct-data-characterisation-without-addition]]).

[L2] The empty biproduct is a zero object ([[prop-the-empty-biproduct-is-a-zero-object]]).

[L3] Finite biproducts are associative, commutative, and unital up to canonical
isomorphism ([[prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Let $\nabla_B:B\oplus B\to B$ be the copairing $[1_B,1_B]$, and for $f,g:A\to B$ define $f+g:=\nabla_B\langle f,g\rangle$. Let $0_{A,B}$ be the zero morphism through the zero object supplied by [L2]. These constructions are available because $B\oplus B$ is simultaneously a product and a coproduct by [L1]. [L1, L2, construct]

2.1 Commutativity follows from the symmetry isomorphism $\tau:B\oplus B\to B\oplus B$ in [L3]: one has $\tau\langle f,g\rangle=\langle g,f\rangle$ and $\nabla_B\tau=\nabla_B$, so $f+g=\nabla_B\langle f,g\rangle=\nabla_B\langle g,f\rangle=g+f$. The unit law follows from the canonical identifications $B\oplus0\cong B\cong0\oplus B$ in [L3], which turn $\langle f,0_{A,B}\rangle$ and $\langle 0_{A,B},f\rangle$ into the evident copies of $f$. [L2, L3, step 1.1]

2.2 Under the canonical associativity isomorphism of [L3], both $(f+g)+h$ and $f+(g+h)$ are the composite of the triple pairing $\langle f,g,h\rangle:A\to B\oplus B\oplus B$ with the triple codiagonal $[1_B,1_B,1_B]:B\oplus B\oplus B\to B$. Hence the addition is associative. [L3, step 1.1]

2.3 If $k:B\to C$, then $k(f+g)=k\nabla_B\langle f,g\rangle=\nabla_C\langle kf,kg\rangle=kf+kg$, because postcomposing a coproduct copairing with $k$ gives the copairing of the postcomposites. Dually, $(f+g)h=fh+gh$ for every $h:X\to A$, because precomposing a product pairing with $h$ gives the pairing of the precomposites. Thus composition is bilinear. [L1, step 1.1, algebra]

3.1 Steps 2.1, 2.2, and 2.3 show that each hom-set is a commutative monoid with bilinear composition. So the category is enriched in commutative monoids. [step 2.1, step 2.2, step 2.3] ∎
