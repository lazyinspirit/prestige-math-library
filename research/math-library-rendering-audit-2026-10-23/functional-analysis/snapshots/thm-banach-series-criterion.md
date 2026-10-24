---
id: thm-banach-series-criterion
kind: theorem
title: "Series criterion for Banach spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-banach-space, def-series-and-absolute-convergence-in-a-normed-space,
       lem-absolutely-convergent-series-is-cauchy, def-cauchy-in-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Statement

For a normed space $V$, the following are equivalent.

1. $V$ is a Banach space.
2. Every absolutely convergent series in $V$ converges.

## Facts & Assumptions

**Given:** A normed space $V$.

[L1] A Banach space is complete for its norm metric ([[def-banach-space]]).

[L2] An absolutely convergent series has Cauchy partial sums ([[lem-absolutely-convergent-series-is-cauchy]]).

[A1] Every absolutely convergent series in $V$ converges.

## Proof

**Proof technique:** direct.

1.1 Assume $V$ is Banach. If $\sum x_n$ is absolutely convergent, [L2] makes its partial sums Cauchy, and [L1] then makes those partial sums converge in $V$. So every absolutely convergent series converges. [L1, L2]

1.2 Assume [A1]. Let $(y_m)$ be a Cauchy sequence in $V$. Choose inductively a strictly increasing sequence $(n_k)$ with $\|y_m-y_n\|<2^{-k}$ whenever $m,n\ge n_k$. Then $\|y_{n_{k+1}}-y_{n_k}\|<2^{-k}$ for every $k$. [A1, given, choose]

2.1 The series $\sum_{k=0}^\infty (y_{n_{k+1}}-y_{n_k})$ is absolutely convergent because $\sum 2^{-k}$ converges and each term has norm at most $2^{-k}$. By [A1] it therefore converges to some $z\in V$. [step 1.2, A1]

3.1 Its partial sums are $y_{n_m}-y_{n_0}$, so the subsequence $(y_{n_m})$ converges to $y_{n_0}+z$. [step 2.1, algebra]

4.1 Given $\varepsilon>0$, choose $K$ so that $\|y_m-y_n\|<\varepsilon/2$ for $m,n\ge K$, and choose $m$ with $n_m\ge K$ and $\|y_{n_m}-(y_{n_0}+z)\|<\varepsilon/2$. Then for every $n\ge K$, $\|y_n-(y_{n_0}+z)\|\le \|y_n-y_{n_m}\|+\|y_{n_m}-(y_{n_0}+z)\|<\varepsilon$. So $(y_n)$ converges, and $V$ is complete. [step 3.1, given, algebra]

5.1 Step 1.1 proves $(1)\Rightarrow(2)$ and steps 1.2 through 4.1 prove $(2)\Rightarrow(1)$, so the two conditions are equivalent. [step 1.1, step 4.1] ∎
