---
id: thm-lym-inequality
kind: theorem
title: "Lubell-Yamamoto-Meshalkin inequality for antichains in a Boolean lattice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-maximal-chains-of-the-boolean-lattice, def-antichain-and-poset-covers, def-binomial-coefficient, def-sum-over-a-finite-index-set, thm-binomial-closed-formula]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.2"
      url: "https://appliedcombinatorics.org/book/s_posets_subset-lattice.html"
pipeline_run: null
---

## Statement

Let $A$ be an $n$-element set and let $\mathcal F\subseteq\mathcal P(A)$ be an
antichain. Then

$$\sum_{S\in\mathcal F}\frac{1}{\binom n{|S|}}\le1.$$

## Facts & Assumptions

**Given:** An $n$-element set $A$ and an antichain $\mathcal F$ in its Boolean lattice.

[L1] There are $n!$ maximal chains in $B(A)$, and a fixed $k$-set belongs to exactly $k!(n-k)!$ of them ([[lem-maximal-chains-of-the-boolean-lattice]]).

[F1] An antichain contains no two comparable distinct elements ([[def-antichain-and-poset-covers]]).

[L2] For $0\le k\le n$, $\binom nk\,k!(n-k)!=n!$ ([[thm-binomial-closed-formula]]).

[F2] Finite sums may be indexed by an arbitrary finite set and reindexed without changing their value ([[def-sum-over-a-finite-index-set]]).

## Proof

**Proof technique:** direct.

1.1 Count pairs $(S,C)$ where $S\in\mathcal F$ and $C$ is a maximal chain containing $S$. By [L1], the number is $\sum_{S\in\mathcal F}|S|!(n-|S|)!$. [given, L1, F2]

1.2 A maximal chain contains at most one member of $\mathcal F$, because all members of a chain are comparable. Hence the number of pairs is at most the number $n!$ of maximal chains. [given, F1, L1]

2.1 Combining steps 1.1 and 1.2 and dividing by the positive number $n!$ gives $\sum_{S\in\mathcal F}|S|!(n-|S|)!/n!\le1$. [step 1.1, step 1.2, algebra]

3.1 By [L2], each summand in step 2.1 equals $1/\binom n{|S|}$. Substitution yields the asserted LYM inequality. [step 2.1, L2, algebra] ∎
