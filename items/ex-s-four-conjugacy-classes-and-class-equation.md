---
id: ex-s-four-conjugacy-classes-and-class-equation
kind: example
title: 'The five conjugacy classes of $S_4$ and the class equation $24=1+6+3+8+6$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types, cor-symmetric-group-class-equation-by-cycle-type, thm-centralizer-cardinality-from-cycle-type, cor-sign-from-disjoint-cycle-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: counting
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Example

The conjugacy data for $S_4$ are

| cycle type | representative | centralizer size | class size | parity |
|---|---:|---:|---:|---:|
| $1^4$ | $1$ | $24$ | $1$ | even |
| $2,1^2$ | $(12)$ | $4$ | $6$ | odd |
| $2^2$ | $(12)(34)$ | $8$ | $3$ | even |
| $3,1$ | $(123)$ | $3$ | $8$ | even |
| $4$ | $(1234)$ | $4$ | $6$ | odd |

## Facts & Assumptions

**Given:** The symmetric group $S_4$.

[F1] A cycle type $(c_k)$ has centralizer size $\prod k^{c_k}c_k!$ ([[thm-centralizer-cardinality-from-cycle-type]]).

[F2] $S_n$-classes are indexed by the tuples with $\sum kc_k=n$ ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]), and $n!=\sum n!/\prod_k k^{c_k}c_k!$ over those tuples, the summand indexed by $(c_k)$ being the size of the corresponding class ([[cor-symmetric-group-class-equation-by-cycle-type]]).

[F3] A $k$-cycle has sign $(-1)^{k-1}$, and $\operatorname{sgn}(\sigma)=(-1)^{n-c(\sigma)}$ when fixed points are included as $1$-cycles ([[cor-sign-from-disjoint-cycle-structure]]).

## Verification

**Proof technique:** counting.

1.1 The five partitions of $4$ give exactly the five cycle types in the table. [F2, algebra]

2.1 Applying [F1] gives centralizer sizes $24,4,8,3,4$; dividing $24$ by them gives class sizes $1,6,3,8,6$. [F1, F2, step 1.1, algebra]

3.1 Their sum is $24=1+6+3+8+6$, which verifies [F2]. [F2, step 2.1, algebra]

4.1 Applying [F3] to the representatives gives the parity column. [F3, step 1.1] ∎
