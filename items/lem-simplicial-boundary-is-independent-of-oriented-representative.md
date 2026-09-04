---
id: lem-simplicial-boundary-is-independent-of-oriented-representative
kind: lemma
title: "The simplicial boundary is independent of the chosen oriented representative"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-simplicial-chain-groups-and-boundary, lem-an-odd-permutation-reverses-oriented-simplex-sign]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Statement

The formula
$$\partial_n[v_0,\dots,v_n]=\sum_{i=0}^n (-1)^i [v_0,\dots,\widehat{v_i},\dots,v_n]$$
depends only on the orientation class of the simplex, not on the chosen ordered
representative.

## Proof

**Given:** Two orderings of the same simplex that represent the same oriented simplex in the chain group.

1.1 It is enough to compare two orderings that differ by one adjacent transposition, because adjacent transpositions generate the symmetric group. [given]

2.1 Let $w=[v_0,\dots,v_i,v_{i+1},\dots,v_n]$ and $w'=[v_0,\dots,v_{i+1},v_i,\dots,v_n]=-w$. For $j<i$ or $j>i+1$, deleting the $j$th vertex from $w$ and $w'$ leaves two orderings of the same face that still differ by one adjacent transposition, so the corresponding face terms differ by a minus sign. The face obtained from $w$ by deleting $v_i$ is exactly the face obtained from $w'$ by deleting $v_i$ in position $i+1$, and their coefficients are $(-1)^i$ and $(-1)^{i+1}$. Likewise the face obtained from $w$ by deleting $v_{i+1}$ is the face obtained from $w'$ by deleting the entry in position $i$, again with opposite coefficients. Hence every term of $\partial w'$ is the negative of the corresponding term of $\partial w$, so $\partial w'=-\partial w$. [step 1.1]

3.1 Therefore equivalent oriented representatives have the same boundary value, so the boundary formula is well defined on orientation classes. [step 2.1] ∎
