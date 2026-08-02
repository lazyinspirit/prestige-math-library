---
id: thm-proper-ideal-contained-in-maximal-ideal
kind: theorem
title: 'In a nonzero commutative ring, every proper ideal is contained in a maximal ideal'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-and-maximal-ideals, def-left-right-and-two-sided-ideal, lem-ideal-criterion-and-intersections, thm-zorn, def-chain, def-maximal-element, def-ring]
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
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Maximal and Prime Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals"
pipeline_run: null
---

## Statement

In a nonzero commutative ring, every proper ideal is contained in a maximal ideal.

## Facts & Assumptions

**Given:** A nonzero commutative ring $R$ and a proper ideal $I\mathrel{\trianglelefteq}R$.

[L1] A maximal ideal is a maximal proper ideal under inclusion ([[def-prime-and-maximal-ideals]]).

[L2] Ideals are additive subgroups with multiplication absorption ([[def-left-right-and-two-sided-ideal]]).

[L3] An ideal criterion and intersection closure are available ([[lem-ideal-criterion-and-intersections]]).

[L4] Zorn's lemma gives a maximal element when every chain has an upper bound ([[thm-zorn]]).

[L5] A chain is a subset linearly ordered by the ambient order ([[def-chain]]).

[L6] A maximal element has no strictly larger element in the poset ([[def-maximal-element]]).

[L7] A nonzero ring has $1\ne0$ and ring operations distribute ([[def-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal P$ be the nonempty poset of proper ideals containing $I$, ordered by inclusion. [L1, L2, L3, L4, L5, L6, L7, given, construct]

2.1 For a chain $\mathcal C\subseteq\mathcal P$, its union is an ideal; if it contained $1$, one member of the chain would contain $1$ and would equal $R$, contradicting properness. [step 1.1, L1, L2, L3, L4, L5, L6, L7, given, algebra]

3.1 Zorn gives a maximal member of $\mathcal P$, which is a maximal ideal containing $I$. [step 2.1] ∎
