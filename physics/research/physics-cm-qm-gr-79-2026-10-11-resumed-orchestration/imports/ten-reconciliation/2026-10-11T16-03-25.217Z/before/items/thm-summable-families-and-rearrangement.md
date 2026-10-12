---
id: thm-summable-families-and-rearrangement
kind: theorem
title: "Summable formal families may be regrouped and rearranged, distribute over multiplication, and have well-defined locally finite products"
status: published
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
  audited: 2026-08-13
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

**Given:** The hypotheses and notation of the statement above.

[F1] A family is summable exactly when, below every degree cutoff $N$, only finitely many members have a nonzero coefficient ([[def-summable-family-of-formal-series]]).

[F2] When $\operatorname{ord}_x(u_k)\to+\infty$, the product $\prod_{k\ge0}(1+u_k)$ is defined by stabilization of finite partial products modulo every $x^N$ ([[def-summable-family-of-formal-series]]).

[F3] Two formal series are equal if and only if all their coefficients are equal ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[F4] A finite sum over $S\times T$ equals either iterated finite sum, and finite sums are invariant under bijective reindexing ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** reduce every coefficient range to a finite calculation.

1.1 Fix $N$. Only finitely many members of the family survive modulo $x^N$, so bijective reindexing and regrouping are finite operations there. Finite reindexing gives the same coefficients below $N$; coefficient extensionality, as $N$ is arbitrary, proves clause 1. [given, F1, F3, F4]

1.2 The coefficient of $hf_i$ below $N$ uses only coefficients of $f_i$ below $N$, so only finitely many indices contribute. Finite distributivity gives the displayed identity coefficient by coefficient. [given, F1, F4]

1.3 For fixed $N$, eventually every $u_k$ has order at least $N$, so $1+u_k\equiv1\pmod{x^N}$. All later factors therefore leave the partial product unchanged modulo $x^N$. A permutation or finite grouping merely reorders the finitely many factors that matter, and multiplication is commutative and associative. [given, F2]

2.1 At an empty index set, the same arguments read $0=0$ and $1=1$. Steps 1.1-1.3 prove all clauses. [step 1.1, step 1.2, step 1.3] ∎
