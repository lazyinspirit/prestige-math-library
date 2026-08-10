---
id: thm-transpositions-generate-the-symmetric-group
kind: theorem
title: 'Every finite permutation is a product of transpositions, so the transpositions generate $S_n$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-disjoint-cycle-decomposition, def-symmetric-group, def-generated-subgroup]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1, Proposition 5.4'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
    - title: 'J. S. Milne, Group Theory, Corollary 4.27'
      url: 'https://www.jmilne.org/math/CourseNotes/GT.pdf'
pipeline_run: null
---

## Statement

Every permutation of a finite set is a product of transpositions. Consequently,
for every natural $n$, the transpositions in $S_n=\operatorname{Sym}(n)$
generate $S_n$. The identity, including the only permutations in $S_0$ and
$S_1$, is represented by the empty product.

## Facts & Assumptions

**Given:** A finite set $X$ and a permutation $\sigma\in\operatorname{Sym}(X)$, with the right-hand factor in a product acting first.

[L1] Every finite permutation is a product of pairwise disjoint cycles, with the identity represented by the empty product ([[thm-disjoint-cycle-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 For $k\ge2$, pointwise evaluation gives $(a_0\,a_1\,\ldots\,a_{k-1})=(a_0\,a_{k-1})\cdots(a_0\,a_2)(a_0\,a_1)$: the rightmost factor sends $a_0$ to $a_1$, each $a_i$ to $a_{i+1}$, and the leftmost factor sends $a_{k-1}$ back to $a_0$, while all other points are fixed. [given, L1]

2.1 Replace each cycle in the decomposition supplied by [L1] with the factorisation in step 1.1 and concatenate the resulting finite lists. This expresses $\sigma$ as a product of transpositions. [step 1.1, L1]

3.1 If $\sigma$ is the identity, the decomposition and the resulting list are empty. Thus the conclusion includes $n=0$ and $n=1$, and the smallest subgroup of $S_n$ containing all transpositions is all of $S_n$. [step 2.1, L1] ∎
