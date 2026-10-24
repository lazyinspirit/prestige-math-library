---
id: thm-third-isomorphism-theorem-rings
kind: theorem
title: 'Third isomorphism theorem for rings: $(R/I)/(J/I)\cong R/J$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-nested-ideals-and-quotients, thm-first-isomorphism-theorem-rings, prop-canonical-quotient-ring-map]
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

Third isomorphism theorem for rings: $(R/I)/(J/I)\cong R/J$.

## Facts & Assumptions

**Given:** Two-sided ideals $I\subseteq J\mathrel{\trianglelefteq}R$.

[L1] $J/I$ is an ideal of $R/I$ ([[lem-nested-ideals-and-quotients]]).

[L2] A ring modulo a kernel is isomorphic to the image ([[thm-first-isomorphism-theorem-rings]]).

[L3] Quotient projections are surjective ring homomorphisms ([[prop-canonical-quotient-ring-map]]).

## Proof

**Proof technique:** direct.

1.1 Define $\phi:R/I\to R/J$ by $\phi(r+I)=r+J$; it is a well-defined surjective ring homomorphism because $I\subseteq J$. [L1, L2, L3, given, construct]

2.1 The equality $\phi(r+I)=0+J$ holds exactly when $r\in J$, so $\ker\phi=J/I$. [step 1.1, L1, L2, L3, given, algebra]

3.1 The kernel and image computation gives $(R/I)/(J/I)\cong R/J$. [step 2.1] ∎
