---
id: thm-generated-ideal-description-in-a-commutative-ring
kind: theorem
title: 'In a commutative ring, $(S)$ consists of finite sums $\sum r_i s_i$, and $(a)=Ra$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-generated-and-principal-ideals, lem-ideal-criterion-and-intersections, def-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Janssen and Lindsey, Rings with Inquiry, Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Rings_with_Inquiry_%28Janssen_and_Lindsey%29/04%3A_Ideals_and_Homomorphisms_and_test/4.01%3A_Ideals_in_general"
pipeline_run: null
---

## Statement

In a commutative ring, $(S)$ consists of finite sums $\sum r_i s_i$, and $(a)=Ra$.

The empty sum is included and equals $0$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a subset $S\subseteq R$.

[L1] $(S)$ is the intersection of ideals containing $S$ ([[def-generated-and-principal-ideals]]).

[L2] The ideal criterion uses subtraction and absorption ([[lem-ideal-criterion-and-intersections]]).

[L3] Multiplication in a commutative ring commutes ([[def-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $J$ be the finite sums $\sum r_is_i$; it contains $S$ and is closed under subtraction and multiplication by arbitrary ring elements. [L1, L2, L3, given, algebra]

2.1 Thus $J$ is an ideal containing $S$, while every ideal containing $S$ contains each such finite sum. [step 1.1, L1, L2, L3, given, algebra]

3.1 Hence $J=(S)$; taking $S=\{a\}$ gives $(a)=Ra$. [step 2.1] ∎
