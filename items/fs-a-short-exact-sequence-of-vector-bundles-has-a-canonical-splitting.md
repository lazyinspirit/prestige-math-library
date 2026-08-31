---
id: fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting
kind: false-statement
title: "A short exact sequence of vector bundles has a canonical splitting"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-every-short-exact-sequence-of-smooth-vector-bundles-splits]
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

Every short exact sequence of smooth vector bundles has a canonical splitting.

## Facts & Assumptions

**Given:** The displayed claim.

[L1] Every short exact sequence of smooth vector bundles admits some smooth
splitting ([[cor-every-short-exact-sequence-of-smooth-vector-bundles-splits]]).

## Refutation

**Proof technique:** direct.

1.1 Consider the split exact sequence of trivial line bundles over any nonempty manifold $M$, $0\to M\times\mathbb R\to M\times\mathbb R^2\to M\times\mathbb R\to0$, where the first map is $t\mapsto(t,0)$ and the second is projection to the second coordinate. [L1, given, construct]

2.1 For every $c\in\mathbb R$, the bundle automorphism $T_c(p,(x,y))=(p,(x+cy,y))$ fixes the included first summand and commutes with projection to the second summand, so it is an automorphism of the exact sequence in step 1.1. Every splitting has the form $s_a(p,u)=(p,(a(p)u,u))$ for a smooth function $a$, while $T_c\circ s_a=s_{a+c}$. Thus no splitting is fixed by all automorphisms of the sequence: taking $c=1$ moves every candidate. A splitting determined canonically by the sequence would have to be invariant under these automorphisms, so none exists. The result [L1] is therefore an existence theorem, not a canonical choice. [L1, step 1.1, algebra] ∎
