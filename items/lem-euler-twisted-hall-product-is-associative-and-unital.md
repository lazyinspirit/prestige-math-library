---
id: lem-euler-twisted-hall-product-is-associative-and-unital
kind: lemma
title: "The Euler-twisted Hall product is associative and unital"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-euler-twisted-hall-algebra
  - lem-euler-twisted-hall-product-is-well-defined
  - lem-hall-euler-form-is-additive
  - thm-untwisted-hall-algebra-is-associative-and-unital
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.3, PDF pp. 7–9: associativity of the Euler-twisted Hall product by bilinearity of the Euler form and the flag formula."
    - title: "Matthew B. Young, Degenerate versions of Green’s theorem for Hall modules, arXiv:1810.08238v2"
      url: "https://arxiv.org/pdf/1810.08238v2"
      locator: "§2.1, PDF pp. 7–8: the underlying finitary Hall associativity and unit."
verification:
  precheck: pending
---

## Statement

The operation of [[def-euler-twisted-hall-algebra]] is a well-defined
associative $\mathbb Q(\nu)$-bilinear product with unit $[0]$.

## Facts & Assumptions

**Given:** A finite-field hereditary Hall category and the twisted product
$[M]\star[N]=\nu^{\langle M,N\rangle}\sum_Lg^L_{M,N}[L]$.

[F1] The untwisted Hall product is associative with unit $[0]$
([[thm-untwisted-hall-algebra-is-associative-and-unital]]).

[F2] The Euler form is bilinear on $K_0$
([[lem-hall-euler-form-is-additive]]).

[F3] The twisted basis products have finite support
([[lem-euler-twisted-hall-product-is-well-defined]]).

## Proof



**Proof technique:** direct.

1.1 Fix basis objects $M,N,P$. Every middle object $L$ in $[M]\star[N]$ has class $[L]=[M]+[N]$, and every middle object $U$ in $[N]\star[P]$ has class $[U]=[N]+[P]$, by short exact sequence additivity in $K_0$. Thus the scalar exponent in $([M]\star[N])\star[P]$ is $\langle M,N\rangle+\langle M+N,P\rangle$, while in $[M]\star([N]\star[P])$ it is $\langle N,P\rangle+\langle M,N+P\rangle$. [given, F2, algebra]

1.2 The zero object has class $0$ and $\langle0,\alpha\rangle= \langle\alpha,0\rangle=0$. Its twisted products therefore have the same coefficients as the untwisted products in [F1], so $[0]$ is a two-sided unit. [F1, F2, algebra]

2.1 Bilinearity [F2] makes those exponents equal. After factoring out their common scalar, the remaining coefficient sums are the corresponding untwisted Hall coefficients, which agree by [F1]. Therefore the two parenthesizations agree on basis triples. [F1, F2, step 1.1, algebra]

3.1 Finite support [F3] and bilinearity extend the basis calculation to all vectors in the direct-sum Hall space. Step 1.2 supplies the unit. [F3, step 2.1, step 1.2, algebra] ∎

