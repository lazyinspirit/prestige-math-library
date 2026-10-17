---
id: prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism
kind: proposition
title: "Biproducts are associative, commutative, and unital up to canonical isomorphism"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-biproduct, prop-the-empty-biproduct-is-a-zero-object, def-products-and-coproducts]
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
pipeline_run: frontier-20
---

## Statement

Whenever the displayed biproducts exist, there are canonical isomorphisms

$$A\oplus(B\oplus C)\cong(A\oplus B)\oplus C,\qquad A\oplus B\cong B\oplus A,\qquad A\oplus0\cong A\cong0\oplus A,$$

where $0$ denotes the empty biproduct.

## Facts & Assumptions

**Given:** Objects $A,B,C$ in a category with the indicated finite biproducts.

[L1] A biproduct is in particular a product and a coproduct ([[def-biproduct]]).

[L2] The empty biproduct is a zero object ([[prop-the-empty-biproduct-is-a-zero-object]]).

[L3] Products and coproducts have their universal properties ([[def-products-and-coproducts]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], both $A\oplus(B\oplus C)$ and $(A\oplus B)\oplus C$ are products of the ordered triple $(A,B,C)$. Let $\alpha:A\oplus(B\oplus C)\to(A\oplus B)\oplus C$ be the unique morphism whose three composites with the target projections are the three source projections, and define $\beta$ in the reverse direction the same way. Then $\beta\alpha$ and $1_{A\oplus(B\oplus C)}$ have the same three composites with the source projections, while $\alpha\beta$ and $1_{(A\oplus B)\oplus C}$ have the same three composites with the target projections. By the product universal property in [L3], $\alpha$ and $\beta$ are inverse isomorphisms. This is the canonical associativity isomorphism. [L1, L3]

1.2 Likewise, $A\oplus B$ and $B\oplus A$ are products of the same ordered pair after swapping the labels. The unique maps exchanging the two projections are inverse by the same product-uniqueness argument, giving the canonical symmetry isomorphism $A\oplus B\cong B\oplus A$. [L1, L3]

1.3 By [L2], the object $0$ is both initial and terminal. Let $p_A:A\oplus0\to A$ and $p_0:A\oplus0\to0$ be the product projections from [L1], and let $\lambda:A\to A\oplus0$ be the unique map with $p_A\lambda=1_A$ and $p_0\lambda$ equal to the unique map $A\to0$. Then $p_A$ and $\lambda$ are inverse, because $p_A\lambda=1_A$ and $\lambda p_A$ has the same composites with $p_A$ and $p_0$ as $1_{A\oplus0}$. So $A\oplus0\cong A$. The same argument with the product projections of $0\oplus A$ gives $0\oplus A\cong A$. [L1, L2, L3]

2.1 The three displayed isomorphisms are therefore forced by the universal properties alone, which is exactly the asserted associativity, commutativity, and unitality up to canonical isomorphism. [step 1.1, step 1.2, step 1.3] ∎
