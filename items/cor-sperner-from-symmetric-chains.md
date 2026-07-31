---
id: cor-sperner-from-symmetric-chains
kind: corollary
title: "A symmetric chain decomposition gives a second proof of Sperner's bound"
status: published
origin: session
deps: [thm-symmetric-chain-decomposition-of-the-boolean-lattice, def-antichain-and-poset-covers, def-boolean-lattice-and-levels, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
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

If $A$ has $n$ elements, every antichain in $B(A)$ has cardinality at most
$\binom n{\lfloor n/2\rfloor}$.

## Facts & Assumptions

**Given:** An $n$-element set $A$ and an antichain $\mathcal F$ in $B(A)$.

[L1] The Boolean lattice has a partition into symmetric chains ([[thm-symmetric-chain-decomposition-of-the-boolean-lattice]]).

[F1] An antichain contains at most one element from any chain ([[def-antichain-and-poset-covers]]).

[F2] Rank $\lfloor n/2\rfloor$ consists of the $\lfloor n/2\rfloor$-subsets of $A$ and has cardinality $\binom n{\lfloor n/2\rfloor}$ ([[def-boolean-lattice-and-levels]], [[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 Fix the symmetric saturated-chain decomposition supplied by [L1]. Every chain in it meets rank $\lfloor n/2\rfloor$ exactly once, because its consecutive ranks run from some $r\le\lfloor n/2\rfloor$ through $n-r\ge\lfloor n/2\rfloor$. [given, L1]

2.1 Consequently the number of chains in the decomposition equals the cardinality of rank $\lfloor n/2\rfloor$, hence equals $\binom n{\lfloor n/2\rfloor}$. [step 1.1, F2]

3.1 By [F1], the antichain $\mathcal F$ contains at most one member from each chain. Its cardinality is therefore at most the number in step 2.1, which is Sperner's bound. [step 2.1, F1] ∎
