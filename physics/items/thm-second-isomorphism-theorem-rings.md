---
id: thm-second-isomorphism-theorem-rings
kind: theorem
title: 'Second isomorphism theorem for rings: $S/(S\cap I)\cong(S+I)/I$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-subring-plus-ideal-and-intersection, thm-first-isomorphism-theorem-rings, prop-canonical-quotient-ring-map]
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
    - title: "Judson, Abstract Algebra: Theory and Applications, Ring Homomorphisms and Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.05%3A_Ring_Homomorphisms_and_Ideals"
pipeline_run: null
---

## Statement

Second isomorphism theorem for rings: $S/(S\cap I)\cong(S+I)/I$.

If $S$ is a unital subring of $R$ and $I\mathrel{\trianglelefteq}R$, then this
is an isomorphism of unital rings.

## Facts & Assumptions

**Given:** A unital subring $S\subseteq R$ and a two-sided ideal $I\mathrel{\trianglelefteq}R$.

[L1] $S+I$ is a subring, $I\mathrel{\trianglelefteq}S+I$, and $S\cap I\mathrel{\trianglelefteq}S$ ([[lem-subring-plus-ideal-and-intersection]]).

[L2] The first ring isomorphism theorem identifies a ring modulo a kernel with its image ([[thm-first-isomorphism-theorem-rings]]).

[L3] The canonical quotient map is a surjective ring homomorphism ([[prop-canonical-quotient-ring-map]]).

## Proof

**Proof technique:** direct.

1.1 Restrict the quotient map $S+I\to(S+I)/I$ to $\phi:S\to(S+I)/I$, $\phi(s)=s+I$. [L1, L2, L3, given, construct]

2.1 Its kernel is $S\cap I$, and every $(s+i)+I$ equals $s+I$, so its image is all of $(S+I)/I$. [step 1.1, L1, L2, L3, given, algebra]

3.1 The kernel and image computation gives $S/(S\cap I)\cong(S+I)/I$. [step 2.1] ∎
