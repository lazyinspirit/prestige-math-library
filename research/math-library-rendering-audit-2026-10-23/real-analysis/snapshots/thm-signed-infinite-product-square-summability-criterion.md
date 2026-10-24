---
id: thm-signed-infinite-product-square-summability-criterion
kind: theorem
title: "Under square summability, the signed product of (1+p_n) converges iff the series of p_n converges"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-infinite-product, def-series, thm-log-one-plus-x-power-series, thm-natural-logarithm-laws, lem-nth-term-test, thm-direct-comparison-test, lem-absolute-convergence-implies-convergence, lem-series-linearity, lem-series-tail-invariance, thm-exponential-addition-formula, thm-exponential-is-strictly-increasing]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $(p_n)$ be a real sequence such that $\sum_n p_n^2$ converges. Then
$$\prod_n(1+p_n)\text{ converges}\quad\Longleftrightarrow\quad\sum_n p_n\text{ converges}.$$
The product uses the tail convention of [[def-infinite-product]], so finitely many zero factors are allowed.

## Facts & Assumptions

**Given:** A real sequence $(p_n)$ with $\sum_n p_n^2$ convergent.

[L1] A convergent series has terms tending to zero ([[lem-nth-term-test]]).

[L2] $\log(1+t)=t+\sum_{k\ge2}(-1)^{k+1}t^k/k$ for $|t|<1$ ([[thm-log-one-plus-x-power-series]]).

[L3] Direct comparison and absolute convergence give convergence of a series dominated by a convergent nonnegative series ([[thm-direct-comparison-test]], [[lem-absolute-convergence-implies-convergence]]).

[L4] Convergent series are closed under termwise addition and subtraction, and deleting a finite initial segment preserves convergence ([[lem-series-linearity]], [[lem-series-tail-invariance]], [[def-series]]).

[L5] $\exp(u+v)=\exp(u)\exp(v)$, while $\exp$ and $\log$ are continuous inverse functions on their stated domains ([[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]], [[thm-natural-logarithm-laws]]).

[L6] An infinite product converges when a tail of nonzero factors has nonzero limiting tail products; initial factors may be arbitrary ([[def-infinite-product]]).



## Proof

**Proof technique:** direct.

1.1 By [L1], choose $N$ such that $|p_n|\le1/2$ for $n\ge N$; then $1+p_n\ge1/2>0$ on that tail. [L1, choose]

1.2 For $|t|\le1/2$, the tail of the series in [L2] has absolute value at most $\sum_{k\ge2}|t|^k\le2t^2$, hence $|\log(1+t)-t|\le2t^2$. [L2, algebra]

1.3 Conversely, a nonzero limit of those positive tail products has a logarithm; continuity of $\log$ and the same finite-product identity make the tail logarithm partial sums converge. [L5, L6]

2.1 Applying step 1.2 to $p_n$ and using [L3] shows that $\sum_{n\ge N}(\log(1+p_n)-p_n)$ converges absolutely. [step 1.1, step 1.2, L3]

3.1 By [L4], $\sum_n p_n$ converges if and only if $\sum_{n\ge N}\log(1+p_n)$ converges. [step 2.1, L4]

4.1 The $m$-th tail product equals $\exp(\sum_{n=N}^{N+m-1}\log(1+p_n))$ by repeated use of [L5], so convergence of the logarithm series gives a nonzero tail-product limit. [step 3.1, L5, L6]

5.1 Steps 3.1, 4.1, and 1.3 prove both directions, and [L6] makes finite initial zero factors harmless. [step 3.1, step 4.1, step 1.3, L6] ∎
