---
id: thm-second-isomorphism-theorem-groups
kind: theorem
title: 'Second isomorphism theorem for groups: $H/(H\cap N)\cong HN/N$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-product-with-normal-subgroup, thm-first-isomorphism-theorem-groups, prop-canonical-quotient-map, def-quotient-group]
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
    - title: "Judson, Abstract Algebra: Theory and Applications, Isomorphism Theorems"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.02%3A_The_Isomorphism_Theorms"
pipeline_run: null
---

## Statement

Second isomorphism theorem for groups: $H/(H\cap N)\cong HN/N$.

If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then

$$H/(H\cap N)\cong HN/N.$$

## Facts & Assumptions

**Given:** A subgroup $H\le G$ and a normal subgroup $N\mathrel{\trianglelefteq}G$.

[L1] $HN\le G$ and $H\cap N\mathrel{\trianglelefteq}H$ ([[lem-product-with-normal-subgroup]]).

[L2] A homomorphism modulo its kernel is isomorphic to its image ([[thm-first-isomorphism-theorem-groups]]).

[L3] The canonical quotient map has the given normal subgroup as kernel ([[prop-canonical-quotient-map]]).

[L4] Quotients by normal subgroups are groups of cosets ([[def-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 Restrict the quotient map $HN\to HN/N$ to $\phi:H\to HN/N$, $\phi(h)=hN$; [L1] and [L4] make this a homomorphism. [L1, L2, L3, L4, given, construct]

2.1 Its kernel is $\{h\in H:hN=N\}=H\cap N$, while every $hnN=hN$ shows that its image is $HN/N$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 The kernel and image calculation in step 2.1 gives $H/(H\cap N)\cong HN/N$. [step 2.1] ∎
