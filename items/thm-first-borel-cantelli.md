---
id: thm-first-borel-cantelli
kind: theorem
title: "The first Borel-Cantelli lemma for measures"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure, prop-measure-monotonicity, thm-finite-and-countable-subadditivity-of-measures, def-nonnegative-extended-series, def-set-limsup-and-liminf, def-series, lem-series-tail-invariance, thm-algebra-of-limits]
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
    - title: "S. Axler, Measure, Integration & Real Analysis, Theorem 12.6"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.44"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $(E_k)_{k\in\mathbb N}$ be measurable sets in a measure space. If the nonnegative extended sum satisfies

$$\sum_{k=0}^{\infty}\mu(E_k)<+\infty,$$

then

$$\mu\left(\limsup_{k\to\infty}E_k\right)=0.$$

No independence hypothesis and no finiteness hypothesis on the whole space are required.

## Facts & Assumptions

**Given:** Measurable sets $(E_k)$ with $S:=\sum_k\mu(E_k)<+\infty$.

[L1] Measures are monotone ([[prop-measure-monotonicity]]) and countably subadditive ([[thm-finite-and-countable-subadditivity-of-measures]]).

[L2] The set limsup is $\bigcap_N\bigcup_{k\ge N}E_k$ ([[def-set-limsup-and-liminf]]).

[L3] A nonnegative extended sum is the supremum of its partial sums ([[def-nonnegative-extended-series]]), while a convergent real series is the limit of its real partial sums ([[def-series]]).

[L4] A convergent real series and each of its tails converge, with total sum equal to the initial partial sum plus the tail sum ([[lem-series-tail-invariance]]).

[L5] Limits of real sequences respect addition and subtraction ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 Since $S$ is finite, every $\mu(E_k)$ and every partial sum $s_n$ is real. The $s_n$ increase and have supremum $S$; given $\varepsilon>0$, the defining property of the supremum supplies $N$ with $S-\varepsilon<s_N\le S$, and then $S-\varepsilon<s_n\le S$ for every $n\ge N$. Thus the real series $\sum_k\mu(E_k)$ converges to $S$, and its tail sums $T_N:=\sum_{k\ge N}\mu(E_k)$ are real. [given, L3]

1.2 For every $N$, [L2] gives $\limsup_kE_k\subseteq\bigcup_{k\ge N}E_k$, so monotonicity and subadditivity give $\mu(\limsup_kE_k)\le T_N$. [given, L1, L2]

2.1 If $s_N=\sum_{k<N}\mu(E_k)$, then $T_N=S-s_N$ by tail invariance, and $s_N\to S$; hence $T_N\to0$ by the algebra of limits. [step 1.1, L4, L5]

3.1 The nonnegative number $\mu(\limsup_kE_k)$ is at most every $T_N$ by step 1.2, while step 2.1 makes those tails arbitrarily small; therefore it is $0$. [step 1.2, step 2.1] ∎
