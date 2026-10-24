---
id: ex-star-class-linear-disagreements
kind: example
title: "A finite star class can require one query per alternative"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-finite-pool-version-space-query
  - def-natural-logarithm
  - def-pool-based-realizable-active-learning
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Daniel Joseph Hsu, Algorithms for Active Learning, Chapter 2"
      url: "https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf"
---

## Example

For any integer $m\ge2$, let $\mathcal X=\{x_1,\ldots,x_m\}$ with its full sigma-algebra, let $D_X$ be any probability measure on $\mathcal X$, and define $h_*(x_j)=1$ for every $j$ and $h_i(x_j)=0$ exactly when $j=i$, for $1\le i,j\le m$. Let $\mathcal H=\{h_*,h_1,\ldots,h_m\}$, pool $U=(x_1,\ldots,x_m)$, target $h_*$, exact oracle $\mathcal O(x_j)=1$, and query budget $b\ge m$. The fixed ascending-scan procedure queries every pool index, receives label $1$ at each query, removes exactly one alternative hypothesis per query, and ends with $V=\{h_*\}$ after $m=|\mathcal H|-1$ queries. For every integer $k\ge2$, the subfamily $m=2^k-1$ has class size $2^k$ and query count $2^k-1$, so the query count is not bounded by any fixed constant times $\log|\mathcal H|$ as $k$ varies; $\log$ denotes the natural logarithm.

## Example references

[[def-pool-based-realizable-active-learning]]: supplies the exact-target finite-pool model.

[[alg-finite-pool-version-space-query]]: specifies the ascending scan and update rule used in this example.

[[def-natural-logarithm]]: defines the natural logarithm used in the asymptotic comparison.

[[thm-natural-logarithm-laws]]: supplies the product law and strict monotonicity for that comparison.

## Facts & Assumptions

**Given:** The star class, pool, target, exact oracle, and budget in the Example.

[F1] [[def-pool-based-realizable-active-learning]]: the target belongs to the finite classifier class and the oracle returns its label at every queried pool point.

[F2] [[alg-finite-pool-version-space-query]]: the fixed procedure scans pool indices in increasing order and retains exactly the hypotheses agreeing with each queried label.

[F3] [[def-natural-logarithm]]: for positive $x$, $\log x$ is the real inverse of the exponential.

[F4] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing, $\log(xy)=\log x+\log y$, and $\log 1=0$.

## Verification

1.1 Before the first query, $V=\{h_*,h_1,\ldots,h_m\}$. Suppose before index $i$ the current version space is $\{h_*,h_i,h_{i+1},\ldots,h_m\}$. At $x_i$, $h_i(x_i)=0$ while $h_*(x_i)=1$ and $h_j(x_i)=1$ for every $j>i$, so the point is a disagreement. Since $i\le m\le b$, the procedure queries it; [F1] returns $1$, and [F2] removes exactly $h_i$. Thus after this query the version space is $\{h_*,h_{i+1},\ldots,h_m\}$. Induction proves this description at every index. [given, F1, F2, construct]

2.1 Applying step 1.1 through $i=m$ shows that all $m$ queries receive the positive target label, each removes one distinct alternative, and the final version space is $\{h_*\}$. Hence $q=m=|\mathcal H|-1$. [step 1.1, algebra]

3.1 Set $m=2^k-1$ for integers $k\ge2$. Then $|\mathcal H|=2^k$ and $q=2^k-1$. Repeated application of [F4]'s product law gives $\log|\mathcal H|=k\log2$, and strict increase with $2>1$ gives $\log2>\log1=0$. The ratio $q/(k\log2)$ is at least $2^{k-1}/(k\log2)$; the latter grows without bound because its consecutive-term ratio is $2k/(k+1)\ge4/3$. Therefore no fixed constant multiple of $\log|\mathcal H|$ bounds the query count over this family. [F3, F4, step 2.1, algebra] ∎
