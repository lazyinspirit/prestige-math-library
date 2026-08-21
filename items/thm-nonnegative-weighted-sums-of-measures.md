---
id: thm-nonnegative-weighted-sums-of-measures
kind: theorem
title: "Nonnegative scalar multiples and countable weighted sums of measures are measures"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nonnegative-weighted-sum-of-measures, thm-tonelli-for-nonnegative-double-series, def-measure]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Example 1.4.24 and Exercise 1.4.22"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $(\mu_k)$ be measures on one measurable space and let $c_k\in[0,+\infty]$. Each scalar multiple $c_k\mu_k$, defined by the zero, finite-positive, and positive-infinity branches of [[def-nonnegative-weighted-sum-of-measures]], is a measure. Every finite or countable weighted sum $\sum_kc_k\mu_k$ is also a measure.

## Facts & Assumptions

**Given:** Measures $(\mu_k)$ on $(X,\mathcal A)$ and coefficients $c_k\in[0,+\infty]$.

[L1] Scalar multiplication has separate $c=0$, $0<c<+\infty$, and $c=+\infty$ branches, and weighted sums are pointwise nonnegative extended sums ([[def-nonnegative-weighted-sum-of-measures]]).

[L2] For a nonnegative extended double sequence, the two iterated sums are equal ([[thm-tonelli-for-nonnegative-double-series]]).

[L3] A measure vanishes at the empty set and is countably additive on disjoint measurable sequences ([[def-measure]]).

## Proof

**Proof technique:** direct.

1.1 For $c=0$, the set function $c\mu$ is the zero measure. [given, L1, L3]

1.2 For $0<c<+\infty$, $(c\mu)(\varnothing)=0$; for disjoint $(E_j)$, multiplying the finite partial-sum identities by $c$ and taking their supremum gives $c\mu(\bigcup_jE_j)=\sum_jc\mu(E_j)$, whether the common value is finite or $+\infty$. [given, L1, L3, algebra]

1.3 For $c=+\infty$, a disjoint union has $\mu$-measure zero exactly when every member has $\mu$-measure zero: this follows directly from countable additivity and nonnegativity. Hence the infinite branch takes value $0$ on the union exactly when every term value is $0$, and otherwise both it and the series of term values are $+\infty$; this branch is a measure without forming $0\cdot(+\infty)$. [given, L1, L3]

2.1 Steps 1.1, 1.2 and 1.3 prove that every scalar multiple $c_k\mu_k$ is a measure for all possible coefficients. [step 1.1, step 1.2, step 1.3]

3.1 Put $\nu(E)=\sum_k(c_k\mu_k)(E)$. Then $\nu(\varnothing)=0$. [given, L1, step 2.1]

3.2 If $(E_j)$ is disjoint, then step 2.1 and Tonelli give $\nu(\bigcup_jE_j)=\sum_k\sum_j(c_k\mu_k)(E_j)=\sum_j\sum_k(c_k\mu_k)(E_j)=\sum_j\nu(E_j)$. [step 2.1, L1, L2, L3]

4.1 Steps 3.1 and 3.2 prove that the countable weighted sum is a measure; the same proof for a finite index range, or zero coefficients thereafter, gives every finite weighted sum, including the empty zero measure. [step 3.1, step 3.2, L3] ∎
