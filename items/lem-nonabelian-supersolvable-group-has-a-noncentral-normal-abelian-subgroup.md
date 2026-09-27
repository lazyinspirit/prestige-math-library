---
id: lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup
kind: lemma
title: A nonabelian supersolvable group has a noncentral normal abelian subgroup
status: published
origin: pipeline
deps: [def-supersolvable-groups-and-monomial-characters, def-subnormal-normal-series-refinement-and-equivalence, cor-prime-order-group-is-cyclic, def-normal-subgroup, def-quotient-group]
proof_strategy: direct
verification:
  audited: 2026-09-24
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Lemma 4.3.3
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Every nonabelian finite supersolvable group has an abelian normal subgroup that is not central.

## Facts & Assumptions

[F1] A finite supersolvable group has a normal series with prime-order factors ([[def-supersolvable-groups-and-monomial-characters]]).

[F2] A group of prime order is cyclic ([[cor-prime-order-group-is-cyclic]]).

[F3] Every term of a normal series is normal in the whole group ([[def-subnormal-normal-series-refinement-and-equivalence]]).

## Proof

**Given:** $1=G_0\triangleleft\cdots\triangleleft G_r=G$ is a supersolvable series.

1.1 Let $i$ be maximal with $G_i$ abelian; such an $i$ exists since $G_0=1$. If $i=r$, then $G$ is abelian, contrary to the hypothesis, so $i<r$. Suppose $G_i\le Z(G)$. By [F1] and [F2], $G_{i+1}/G_i$ is cyclic of prime order; choose $x\in G_{i+1}$ whose coset generates it. Then every element of $G_{i+1}$ has the form $a x^k$ with $a\in G_i$. All such elements commute because $G_i\le Z(G)$ and powers of $x$ commute, so $G_{i+1}$ is abelian, contradicting maximality of $i$. Thus $G_i\nleq Z(G)$, and there are $a\in G_i$ and $g\in G$ with $ag\ne ga$. [F1, F2, given]

2.1 By [F3], $G_i\trianglelefteq G$. It is abelian by construction and not central by step 1.1, so it is the required abelian normal subgroup. [F3, step 1.1] ∎
