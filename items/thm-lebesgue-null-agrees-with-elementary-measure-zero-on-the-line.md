---
id: thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line
kind: theorem
title: "A subset of $\\mathbb{R}$ has Lebesgue outer measure zero if and only if it has measure zero in the sense of countable closed-interval covers"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure, def-measure-zero-and-content-zero, def-lebesgue-outer-measure, def-interval, def-nonnegative-extended-series, def-multidimensional-rectangle-and-volume, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "nullity agrees on the line"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]) and let
$A \subseteq \mathbb{R}$. Then

$$\lambda_1^*(A) = 0 \quad\Longleftrightarrow\quad A \text{ has measure zero},$$

measure zero being the covering notion of [[def-measure-zero-and-content-zero]]:
that is, if and only if for every real $\varepsilon>0$ there are sequences
$(a_k)_{k\in\mathbb{N}}$ and $(b_k)_{k\in\mathbb{N}}$ of reals with
$a_k \le b_k$ for every $k$ such that
$A \subseteq \bigcup_{k\in\mathbb{N}}[a_k,b_k]$ and
$\sum_{k=0}^{\infty}(b_k-a_k)$ converges with sum at most $\varepsilon$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the case $n=1$ of Lebesgue outer measure, and a subset $A \subseteq \mathbb{R}$.

[L1] Assuming countable choice, $\lambda^{\mathrm{cl}}(E) = \lambda_n^*(E)$, where $\lambda^{\mathrm{cl}}(E)$ is the infimum of $\sum_{k=0}^{\infty}\operatorname{vol}[u^k,v^k]$ over countable covers of $E$ by closed rectangles ([[lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure]], [[def-lebesgue-outer-measure]]).

[F1] $A$ has **measure zero**, equivalently $A$ is **null**, when for every real $\varepsilon > 0$ there are sequences $(a_k)_{k \ge 0}$ and $(b_k)_{k \ge 0}$ of reals with $a_k \le b_k$ for every $k \ge 0$, such that $A \subseteq \bigcup_{k \ge 0} [a_k, b_k]$ and $\sum_{k=0}^{\infty} (b_k - a_k)$ converges with sum $\le \varepsilon$ ([[def-measure-zero-and-content-zero]], [[def-interval]]).

[F2] For a fixed $\varepsilon > 0$, $\sum_{k=0}^{\infty}(b_k - a_k)$ converges with sum $\le \varepsilon$ if and only if $\sum_{k<n} (b_k - a_k) \le \varepsilon$ for every $n \in \mathbb{N}$ ([[def-measure-zero-and-content-zero]]).

[F3] The **nonnegative extended sum** of a sequence in $[0,+\infty]$ is $\sum_{k=0}^{\infty}a_k:=\sup_{n\in\mathbb N}s_n$, the supremum of its nondecreasing partial sums ([[def-nonnegative-extended-series]]).

[F4] Under the standard identification $\mathbb R^1\cong\mathbb R$, the rectangle $[a,b]$ of $\mathbb{R}^1$ is the interval $[a_0,b_0]$ and its volume is its length ([[def-multidimensional-rectangle-and-volume]]).

## Proof

**Proof technique:** direct.

1.1 At $n=1$ a closed rectangle is a closed interval $[a_k,b_k]$ with $a_k \le b_k$ and its volume is the length $b_k-a_k$, so the covers admitted in $\lambda^{\mathrm{cl}}(A)$ are exactly the covers admitted in the published definition of measure zero. [F1, F4]

1.2 For a sequence of nonnegative reals, the nonnegative extended sum is the supremum of the partial sums, so it is at most $\varepsilon$ exactly when every partial sum is, which is exactly the condition that the real series converges with sum at most $\varepsilon$. [F2, F3]

2.1 Hence $A$ has measure zero in the published sense if and only if for every real $\varepsilon>0$ some admissible cover has total length at most $\varepsilon$, which says exactly that the infimum $\lambda^{\mathrm{cl}}(A)$ is $0$; and $\lambda^{\mathrm{cl}}(A) = \lambda_1^*(A)$. [step 1.1, step 1.2, L1] ∎
