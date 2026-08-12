---
id: thm-alternating-conjugacy-class-splitting-criterion
kind: theorem
title: 'An $S_n$-class of an even permutation splits in $A_n$ exactly when all cycle lengths, including $1$-cycles, are odd and distinct'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup, thm-centralizer-cardinality-from-cycle-type, cor-sign-from-disjoint-cycle-structure, def-alternating-group, thm-disjoint-cycle-decomposition]
justified_by: []
aliases: []
landmark: true
proof_strategy: iff
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Statement

Let $\sigma\in A_n$. Its $S_n$-conjugacy class splits into two
$A_n$-conjugacy classes of equal size if and only if the lengths of all cycles
in its cycle decomposition, including $1$-cycles for fixed points, are odd and
no two lengths are equal.

## Facts & Assumptions

**Given:** An even permutation $\sigma\in A_n$.

[F1] $A_n$ is the kernel of sign ([[def-alternating-group]]).

[F2] A $k$-cycle has sign $(-1)^{k-1}$, and sign is multiplicative ([[cor-sign-from-disjoint-cycle-structure]]).

[F3] An $S_n$-class splits in the index-two subgroup $A_n$ exactly when its centralizer in $S_n$ is contained in $A_n$ ([[lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup]]).

[F4] Every permutation has a disjoint-cycle decomposition unique up to reordering and cyclic rotation ([[thm-disjoint-cycle-decomposition]]).

[F5] If a permutation has $c_k$ cycles of length $k$, including fixed points, then its centralizer has cardinality $\prod_{k=1}^n k^{c_k}c_k!$ ([[thm-centralizer-cardinality-from-cycle-type]]).

## Proof

**Proof technique:** iff.

1.1 If $\sigma$ has an even-length cycle, that cycle commutes with every disjoint cycle of $\sigma$, so it lies in $C_{S_n}(\sigma)$; [F2] makes it odd. [F2, F4, algebra]

1.2 If two cycles have the same odd length $k$, including $k=1$, the permutation swapping their entries positionwise is a product of $k$ transpositions. It centralizes $\sigma$ and is odd by [F2]. [F2, F4, algebra]

1.3 Conversely, suppose all cycle lengths are odd and distinct. Products of independent powers of the disjoint cycles form a subgroup $P\subseteq C_{S_n}(\sigma)$ of cardinality $\prod_k k$. Here each $c_k$ is $0$ or $1$, so [F5] gives $|C_{S_n}(\sigma)|=\prod_k k=|P|$. Hence $C_{S_n}(\sigma)=P$: every centralizing permutation preserves each cycle and restricts to a power of it. [F4, F5, algebra]

2.1 In either case the centralizer is not contained in $A_n$, so [F3] says the class does not split. [F1, F3, step 1.1, step 1.2]

2.2 Each cycle has odd length, so [F2] makes it and all its powers even. By step 1.3 every centralizing permutation is a product of such powers and is therefore even. [F2, step 1.3]

3.1 Hence $C_{S_n}(\sigma)\subseteq A_n$, so [F3] gives two equal $A_n$-classes. [F1, F3, step 2.2] ∎
