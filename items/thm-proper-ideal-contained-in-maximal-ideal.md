---
id: thm-proper-ideal-contained-in-maximal-ideal
kind: theorem
title: 'In a nonzero commutative ring, every proper ideal is contained in a maximal ideal'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-and-maximal-ideals, def-left-right-and-two-sided-ideal, lem-ideal-criterion-and-intersections, thm-zorn, def-axiom-of-choice, def-chain, def-maximal-element, def-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Maximal and Prime Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

In a nonzero commutative ring, every proper ideal is contained in a maximal ideal.

## Facts & Assumptions

**Given:** A nonzero commutative ring $R$ and a proper ideal $I\mathrel{\trianglelefteq}R$.

[L1] A maximal ideal is a maximal proper ideal under inclusion ([[def-prime-and-maximal-ideals]]).

[L2] Ideals are additive subgroups with multiplication absorption ([[def-left-right-and-two-sided-ideal]]).

[L3] An ideal criterion and intersection closure are available ([[lem-ideal-criterion-and-intersections]]).

[L4] Assuming the Axiom of Choice, a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L5] A chain is a subset linearly ordered by the ambient order ([[def-chain]]).

[L6] A maximal element has no strictly larger element in the poset ([[def-maximal-element]]).

[L7] A nonzero ring has $1\ne0$ and ring operations distribute ([[def-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal P$ be the poset of proper ideals of $R$ containing $I$, ordered by inclusion. [L1, L2, given, construct]

1.2 $\mathcal P$ is nonempty, because $I$ is a proper ideal containing $I$. [given, L2]

2.1 The empty chain of $\mathcal P$ has an upper bound in $\mathcal P$: every member of $\mathcal P$ is vacuously above all of its members, and $\mathcal P$ is nonempty, so $I$ is such an upper bound. [step 1.1, step 1.2, L5]

2.2 A nonempty chain $\mathcal C\subseteq\mathcal P$ has an upper bound in $\mathcal P$: $\bigcup\mathcal C$ is an ideal containing $I$, and it is proper, since $1\in\bigcup\mathcal C$ would place $1$ in some member of $\mathcal C$, forcing that member to equal $R$ and contradicting its properness. [step 1.1, L2, L3, L5, L7, algebra]

3.1 Every chain of $\mathcal P$ has an upper bound in $\mathcal P$, and $\mathcal P$ is a nonempty poset, so Zorn's lemma yields a maximal element $M$ of $\mathcal P$. [step 1.2, step 2.1, step 2.2, L4]

4.1 $M$ is a proper ideal containing $I$ that is maximal among proper ideals of $R$, so $M$ is a maximal ideal containing $I$. [step 3.1, L1, L6] ∎
