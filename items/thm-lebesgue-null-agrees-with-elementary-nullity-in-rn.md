---
id: thm-lebesgue-null-agrees-with-elementary-nullity-in-rn
kind: theorem
title: "A subset of $\\mathbb{R}^m$ has Lebesgue outer measure zero if and only if it is null in the sense of countable closed-cube covers"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure, def-null-and-content-zero-in-rn, def-lebesgue-outer-measure, def-multidimensional-rectangle-and-volume, def-nonnegative-extended-series, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "nullity agrees in $\\mathbb{R}^m$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
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

Let $m \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). For $E \subseteq \mathbb{R}^m$,

$$\lambda_m^*(E) = 0 \quad\Longleftrightarrow\quad E \text{ is null},$$

nullity being the covering notion of [[def-null-and-content-zero-in-rn]]:
that is, if and only if for every real $\varepsilon>0$ the set $E$ is covered by
a sequence of closed cubes whose nonnegative volume series converges with sum at
most $\varepsilon$.

## Facts & Assumptions

**Given:** A natural number $m \ge 1$, the Axiom of Countable Choice, and a subset $E \subseteq \mathbb{R}^m$.

[L1] Assuming countable choice, $\lambda^{\mathrm{cb}}(E) = \lambda_m^*(E)$, where $\lambda^{\mathrm{cb}}(E)$ is the infimum of $\sum_{k=0}^{\infty}\ell_k^{\,m}$ over countable covers of $E$ by closed cubes $\prod_{i<m}[c^k_i,c^k_i+\ell_k]$ ([[lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure]], [[def-lebesgue-outer-measure]]).

[F1] A **closed cube** is a rectangle $\prod_{j<m}[a_j,a_j+\ell]$ with $\ell\ge0$; its volume is $\ell^m$. A set $E\subseteq\mathbb R^m$ is **null** when, for every $\varepsilon>0$, it is covered by a sequence of closed cubes whose nonnegative volume series converges with sum at most $\varepsilon$ ([[def-null-and-content-zero-in-rn]], [[def-multidimensional-rectangle-and-volume]]).

[F2] The **nonnegative extended sum** of a sequence in $[0,+\infty]$ is $\sum_{k=0}^{\infty}a_k:=\sup_{n\in\mathbb N}s_n$, the supremum of its nondecreasing partial sums ([[def-nonnegative-extended-series]]).

## Proof

**Proof technique:** direct.

1.1 The closed cubes admitted in the published definition of nullity are exactly the sets $\prod_{i<m}[c_i,c_i+\ell]$ with $\ell \ge 0$, with the same size $\ell^{\,m}$ as in $\lambda^{\mathrm{cb}}$, so the two notions quantify over the same covers with the same terms. [F1]

1.2 For a sequence of nonnegative reals, the nonnegative extended sum is the supremum of the partial sums, so the condition that the volume series converges with sum at most $\varepsilon$ says exactly that this sum, taken in $[0,+\infty]$, is at most $\varepsilon$. [F2]

2.1 Hence $E$ is null in the published sense if and only if for every real $\varepsilon>0$ some admissible cube cover has total volume at most $\varepsilon$, which says exactly that the infimum $\lambda^{\mathrm{cb}}(E)$ is $0$; and $\lambda^{\mathrm{cb}}(E) = \lambda_m^*(E)$. [step 1.1, step 1.2, L1] ∎
