---
id: ex-s-five-conjugacy-classes-and-class-equation
kind: example
title: 'The seven conjugacy classes of $S_5$ and their centralizer and class sizes'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-symmetric-group-class-equation-by-cycle-type, thm-centralizer-cardinality-from-cycle-type, cor-sign-from-disjoint-cycle-structure, thm-alternating-conjugacy-class-splitting-criterion]
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

The conjugacy data for $S_5$ are

| cycle type | centralizer size | class size | parity | splits in $A_5$? |
|---|---:|---:|---:|---:|
| $1^5$ | $120$ | $1$ | even | no |
| $2,1^3$ | $12$ | $10$ | odd | -- |
| $2^2,1$ | $8$ | $15$ | even | no |
| $3,1^2$ | $6$ | $20$ | even | no |
| $3,2$ | $6$ | $20$ | odd | -- |
| $4,1$ | $4$ | $30$ | odd | -- |
| $5$ | $5$ | $24$ | even | yes |

## Facts & Assumptions

**Given:** The symmetric group $S_5$.

[F1] A cycle type $(c_k)$ has centralizer size $\prod k^{c_k}c_k!$ ([[thm-centralizer-cardinality-from-cycle-type]]).

[F2] The symmetric class equation uses class size $5!/\prod k^{c_k}c_k!$ ([[cor-symmetric-group-class-equation-by-cycle-type]]).

[F3] Cycle length determines sign ([[cor-sign-from-disjoint-cycle-structure]]).

[F4] An even class splits in $A_n$ exactly when its cycle lengths, including fixed points, are odd and distinct ([[thm-alternating-conjugacy-class-splitting-criterion]]).

## Verification

**Proof technique:** counting.

1.1 The seven partitions of $5$ give the seven rows. Applying [F1] gives the centralizer column, and [F2] gives the class-size column. [F1, F2, algebra]

2.1 The sizes sum to $1+10+15+20+20+30+24=120$, verifying the class equation. [F2, step 1.1, algebra]

3.1 Formula [F3] gives the parity column. Among the even rows, [F4] applies only to the single cycle of length $5$, giving the final column. [F3, F4, step 1.1] ∎
