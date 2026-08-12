---
id: thm-summable-families-and-rearrangement
kind: theorem
title: "Summable formal families may be regrouped and rearranged, distribute over multiplication, and have well-defined locally finite products"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-coefficient-extraction-linearity-and-extensionality, def-summable-family-of-formal-series, lem-formal-order-laws, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Statement

Let $(f_i)_{i\in I}$ be a summable family in $R\llbracket x\rrbracket$.

1. A bijection of its index set does not change its sum. A partition $I=\bigsqcup_{j\in J}I_j$ gives summable subfamilies, a summable family $(\sum_{i\in I_j}f_i)_{j\in J}$, and
   $$\sum_{i\in I}f_i=\sum_{j\in J}\sum_{i\in I_j}f_i.$$
2. For every $h\in R\llbracket x\rrbracket$, the family $(hf_i)_{i\in I}$ is summable and
   $$h\sum_{i\in I}f_i=\sum_{i\in I}hf_i.$$
3. If $\operatorname{ord}_x(u_k)\to+\infty$, the partial products $\prod_{k<M}(1+u_k)$ stabilize modulo each $x^N$. The resulting infinite product is unchanged by a permutation of the factors or by finite regrouping.

The assertions include the empty sum and empty product.

## Facts & Assumptions

**Given:** Summability and locally finite products as in [[def-summable-family-of-formal-series]], coefficient extensionality from [[prop-coefficient-extraction-linearity-and-extensionality]], and the order inequalities of [[lem-formal-order-laws]].

The theorem [[lem-finite-sum-reindexing-and-fubini]] states finite reindexing, finite distributivity, and equality of the two iterated sums over a finite rectangle.

## Proof

**Proof technique:** reduce every coefficient range to a finite calculation.

1.1 Fix $N$. Only finitely many members of the family survive modulo $x^N$, so bijective reindexing and regrouping are finite operations there. Finite reindexing gives the same coefficients below $N$; coefficient extensionality, as $N$ is arbitrary, proves clause 1. [given]

1.2 The coefficient of $hf_i$ below $N$ uses only coefficients of $f_i$ below $N$, so only finitely many indices contribute. Finite distributivity gives the displayed identity coefficient by coefficient. [given]

1.3 For fixed $N$, eventually every $u_k$ has order at least $N$, so $1+u_k\equiv1\pmod{x^N}$. All later factors therefore leave the partial product unchanged modulo $x^N$. A permutation or finite grouping merely reorders the finitely many factors that matter, and multiplication is commutative and associative. [given]

2.1 At an empty index set, the same arguments read $0=0$ and $1=1$. Steps 1.1-1.3 prove all clauses. [step 1.1, step 1.2, step 1.3] ∎
