---
id: ex-active-learning-boundary-cases
kind: example
title: "Empty pools, singleton classes, and zero query budgets"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-finite-pool-version-space-query
  - def-pool-based-realizable-active-learning
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

In a finite pool-based instance with finite nonempty classifier class $\mathcal H$, exact target $h^*\in\mathcal H$, ordered pool $U=(u_1,\ldots,u_m)$, and exact oracle, run the ascending-scan procedure with any query budget $b\ge0$. If $m=0$, it returns $V=\mathcal H$ with no pool records and no queries. If $\mathcal H=\{h_0\}$ and $h^*=h_0$, it predicts every pool entry without querying, including when $b=0$. For a general $\mathcal H$ with $b=0$, it predicts each unanimous entry before the first disagreement, then marks that index and the remaining pool suffix as abstentions; it makes no queries.

## Example references

[[def-pool-based-realizable-active-learning]]: fixes the finite-pool, exact-target model used in the boundary cases.

[[alg-finite-pool-version-space-query]]: specifies the ascending scan, unanimous-prediction priority, and zero-budget stopping behavior.

## Facts & Assumptions

**Given:** The three boundary cases and the exact-target finite-pool model stated in the Example.

[F1] [[def-pool-based-realizable-active-learning]]: $h^*\in\mathcal H$ and every exact oracle response equals $h^*$ at the queried point.

[F2] [[alg-finite-pool-version-space-query]]: the procedure checks unanimity before the query-budget condition and marks an unresolved suffix as abstentions when it reaches a disagreement with no budget remaining.

## Verification

1.1 If $m=0$, the initialized scan index is $i=1>m$. The loop has no iteration, so the procedure returns the initialized $V=\mathcal H$ and empty query log. [given, F2, algebra]

1.2 If $\mathcal H=\{h_0\}$, then initially $V=\{h_0\}$; after any query-free scan step it remains that singleton. Thus every $u_i$ is unanimous with label $h_0(u_i)=h^*(u_i)$ by [F1]. Since [F2] tests unanimity before the budget condition, the procedure predicts each index and never queries, even when $b=0$. [given, F1, F2, construct]

2.1 If $b=0$ for a general class, the query count remains $q=0$ until the first disagreement. At every preceding unanimous index, [F2] records a prediction and advances without a query. At the first disagreement, $q=b$, so [F2] marks that index and the remaining suffix as abstentions and returns; if no disagreement occurs, the scan reaches its end. In either case no oracle query is made. [given, F2, algebra] ∎
