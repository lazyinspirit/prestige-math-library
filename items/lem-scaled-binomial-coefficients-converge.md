---
id: lem-scaled-binomial-coefficients-converge
kind: lemma
title: "For fixed $k$, $\\binom{n}{k}/n^k$ tends to $1/k!$"
status: published
origin: session
deps: [thm-binomial-closed-formula, def-binomial-coefficient, def-factorial-and-falling-factorial, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-sign-rules, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Statement

For each fixed $k\in\mathbb N$,
$$\frac{\iota\binom nk}{\iota(n)^k}\longrightarrow\frac1{\iota(k!)} \qquad(n\to\infty),$$
where the expression is read for $n\ge\max\{1,k\}$.
For every such $n$, one also has the uniform bound
$$0\le \frac{\iota\binom nk}{\iota(n)^k}\le\frac1{\iota(k!)}.$$

## Facts & Assumptions

**Given:** A fixed $k\in\mathbb N$.

[L1] For $n\ge k$, $\binom nk\,k!=n^{\underline{k}}$ ([[thm-binomial-closed-formula]], [[def-factorial-and-falling-factorial]]), and the canonical embedding preserves the products involved ([[def-canonical-natural]]).

[L2] Finite products and sums obey [[def-finite-sum]] and [[lem-finite-sum-laws]], limits obey [[thm-algebra-of-limits]], and $1/\iota(n)\to0$ ([[cor-archimedean-reciprocal]]). Canonical naturals are positive and strictly increasing ([[lem-of-naturals-positive]]), while multiplication by a positive real preserves order ([[lem-of-sign-rules]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For $n\ge\max\{1,k\}$, $\iota\binom nk/\iota(n)^k=\iota(k!)^{-1}\prod_{j<k}(1-\iota(j)/\iota(n))$.   [L1, given, algebra]

2.1 For $j<k\le n$, strict increase and positivity give $0\le\iota(j)/\iota(n)<1$, so every factor in step 1.1 lies in $(0,1]$. Thus the finite product lies in $[0,1]$, proving the displayed uniform bound.  [step 1.1, L2]

3.1 For each of the finitely many $j<k$, $\iota(j)/\iota(n)\to0$; finite-product limit algebra makes the product in step 1.1 tend to $1$. Multiplication by the fixed factor $1/\iota(k!)$ yields the limit.  [step 1.1, L2] ∎
