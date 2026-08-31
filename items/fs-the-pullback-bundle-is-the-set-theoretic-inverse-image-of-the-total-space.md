---
id: fs-the-pullback-bundle-is-the-set-theoretic-inverse-image-of-the-total-space
kind: false-statement
title: "The pullback bundle is the set-theoretic inverse image of the total space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pullback-vector-bundle-as-a-fibre-product, thm-the-pullback-fibre-product-is-a-smooth-vector-bundle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

The pullback bundle is the set-theoretic inverse image of the original total
space.

## Facts & Assumptions

**Given:** The displayed claim.

[L1] The pullback bundle consists of pairs $(q,e)$ with $f(q)=\pi(e)$
([[def-pullback-vector-bundle-as-a-fibre-product]]).

## Refutation

**Proof technique:** direct.

1.1 Let $f:\mathbb R\to\{0\}\subseteq\mathbb R$ be the constant map and let $E=\mathbb R\times\mathbb R\to\mathbb R$ be the trivial line bundle. Then $f^*E=\{(q,(0,v)):q\in\mathbb R,\ v\in\mathbb R\}$, which is naturally $\mathbb R\times\mathbb R$. [L1, given, construct]

2.1 Different base points $q_1\neq q_2$ with the same fibre element $v$ give distinct pullback points $(q_1,(0,v))\neq(q_2,(0,v))$. Thus the pullback keeps new base information and is not a subset of the old total space. It is a fibre product, not a set-theoretic inverse image. [L1, step 1.1, algebra] ∎