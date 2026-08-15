---
id: lem-abel-summation-for-complex-series
kind: lemma
title: "Abel summation by parts for complex coefficients and their partial sums"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-series-power-series-and-absolute-convergence, def-monoid-finite-product]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2, Abel's theorem"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $a_0,\ldots,a_N\in\mathbb C$, let $s_n=\sum_{k=0}^na_k$, and put $s_{-1}=0$. For complex weights $b_0,\ldots,b_N$,
$$\sum_{n=0}^Na_nb_n=s_Nb_N+\sum_{n=0}^{N-1}s_n(b_n-b_{n+1}).$$
More generally, for $0\le p\le q$,
$$\sum_{n=p}^qa_nb_n=s_qb_q-s_{p-1}b_p+\sum_{n=p}^{q-1}s_n(b_n-b_{n+1}).$$

## Facts & Assumptions

**Given:** Finite complex sequences $(a_n)$ and $(b_n)$ with partial sums $s_n$.

[L1] Complex partial sums are the finite sums in the additive monoid of $\mathbb C$ ([[def-complex-series-power-series-and-absolute-convergence]]).

[L2] Finite products, read additively, have the empty and one-term conventions and obey the recursion defining finite sums ([[def-monoid-finite-product]]).

## Proof

**Proof technique:** direct.

1.1 Since $a_n=s_n-s_{n-1}$, distributivity gives $\sum_{n=p}^qa_nb_n=\sum_{n=p}^qs_nb_n-\sum_{n=p}^qs_{n-1}b_n$. [L1, algebra]

2.1 Shift the second finite index and collect equal $s_n$ terms; the endpoints are $s_qb_q$ and $-s_{p-1}b_p$, while the interior terms are $s_n(b_n-b_{n+1})$. [step 1.1, L2, algebra]

3.1 This is the tail identity. Taking $p=0$ and $s_{-1}=0$ gives the first display; when $p=q$ the interior sum is empty and the identity remains valid. [step 2.1, L2] ∎
