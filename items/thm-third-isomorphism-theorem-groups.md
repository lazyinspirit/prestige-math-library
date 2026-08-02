---
id: thm-third-isomorphism-theorem-groups
kind: theorem
title: 'Third isomorphism theorem for groups: $(G/K)/(N/K)\cong G/N$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-nested-normal-subgroups-and-quotients, thm-first-isomorphism-theorem-groups, prop-canonical-quotient-map, def-quotient-group]
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

Third isomorphism theorem for groups: $(G/K)/(N/K)\cong G/N$.

If $K\subseteq N$ are normal subgroups of $G$, then

$$ (G/K)/(N/K)\cong G/N. $$

## Facts & Assumptions

**Given:** $K\subseteq N$ with $K,N\mathrel{\trianglelefteq}G$.

[L1] $N/K\mathrel{\trianglelefteq}G/K$ ([[lem-nested-normal-subgroups-and-quotients]]).

[L2] The first isomorphism theorem identifies a quotient by a kernel with the image ([[thm-first-isomorphism-theorem-groups]]).

[L3] Quotient maps are surjective homomorphisms ([[prop-canonical-quotient-map]]).

[L4] Quotient groups use coset multiplication ([[def-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 Define $\phi:G/K\to G/N$ by $\phi(gK)=gN$; it is well defined because $K\subseteq N$, and [L4] shows it is a homomorphism. [L1, L2, L3, L4, given, construct]

2.1 The map is onto and $\phi(gK)=N$ exactly when $g\in N$, so $\ker\phi=N/K$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 The kernel and image calculation yields $(G/K)/(N/K)\cong G/N$. [step 2.1] ∎
